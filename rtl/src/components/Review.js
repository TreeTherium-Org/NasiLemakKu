import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Card, CardContent, CardMedia, Typography, Button, Box, Container, Grid, Snackbar } from '@mui/material';
import { Form } from 'react-bootstrap';
import '@solana/wallet-adapter-react-ui/styles.css';

const geocodeAddress = async (address) => {
    const apiKey = 'AIzaSyCIV9YVytAARkQZ1mLhzaauyJZqRC3anhc'; // Replace with your actual API key
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
    }
    throw new Error('Unable to geocode address');
};

const RatingSelector = ({ label, name, value, onChange }) => {
    const handleSelect = (selectedValue) => {
        onChange({ target: { name, value: selectedValue } });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
            <Typography variant="h6" style={{ marginBottom: '5px', fontWeight: 'bold' }}>{label}</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '150px', marginBottom: '5px' }}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <span key={num} style={{ fontWeight: 'bold' }}>{num}</span>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '150px' }}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <span
                        key={num}
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: num <= value ? '#007bff' : '#ccc',
                            borderRadius: '50%',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleSelect(num)}
                    />
                ))}
            </div>
        </div>
    );
};

const RestaurantList = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => `https://api.devnet.solana.com`, [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

    const { publicKey, connected } = useWallet();

    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [reviews, setReviews] = useState({
        foodQuality: 1,
        location: 1,
        services: 1,
        cleanliness: 1,
        ambiance: 1,
        feedback: '',
    });
    const [error, setError] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(true);

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setUserLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                        setLoadingLocation(false); // Stop loading when location is set
                    },
                    (error) => {
                        console.error('Error getting location: ', error);
                        setError('Failed to get your location. Please allow location access.');
                        setLoadingLocation(false); // Stop loading if there's an error
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
                setLoadingLocation(false); // Stop loading if geolocation is not supported
            }
        };

        getUserLocation();
    }, []);

    useEffect(() => {
        if (!userLocation) return; // Do nothing if location is not yet set

        const fetchRestaurants = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'restaurants'));
                const restaurantsData = await Promise.all(
                    querySnapshot.docs.map(async (doc) => {
                        const restaurant = { id: doc.id, ...doc.data() };
                        // Geocode each restaurant address
                        try {
                            const location = await geocodeAddress(restaurant.address);
                            return { ...restaurant, location };
                        } catch (error) {
                            console.error('Geocoding error: ', error);
                            return restaurant; // Return without location if geocoding fails
                        }
                    })
                );
                setRestaurants(restaurantsData);
            } catch (error) {
                console.error('Error fetching restaurants: ', error);
                setError('Failed to fetch restaurants. Please try again later.');
            }
        };

        fetchRestaurants();
    }, [userLocation]);

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRad = (value) => (value * Math.PI) / 180;
        const R = 6371; // Radius of the Earth in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    const filteredRestaurants = useMemo(() => {
        if (!userLocation) return restaurants;
        return restaurants.filter((restaurant) => {
            if (!restaurant.location) return false;
            const { latitude, longitude } = restaurant.location;
            const distance = calculateDistance(userLocation.latitude, userLocation.longitude, latitude, longitude);
            return distance <= 40; // Filter within 40 km
        });
    }, [userLocation, restaurants]);

    const handleReviewChange = (e) => {
        setReviews({
            ...reviews,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitReview = useCallback(async () => {
        if (!selectedRestaurant) {
            setError('Please select a restaurant to submit a review.');
            return;
        }

        try {
            await addDoc(collection(db, 'reviews'), {
                restaurantId: selectedRestaurant.id,
                restaurantName: selectedRestaurant.name,
                foodQuality: reviews.foodQuality,
                location: reviews.location,
                services: reviews.services,
                cleanliness: reviews.cleanliness,
                ambiance: reviews.ambiance,
                feedback: reviews.feedback,
                createdAt: new Date(),
            });

            alert('Review submitted successfully!');
        } catch (error) {
            console.error('Error submitting review: ', error);
            setError(`Failed to submit review: ${error.message}`);
        }
    }, [connected, publicKey, selectedRestaurant, reviews]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Container sx={{ my: 5 }}>
                        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <WalletMultiButton />
                            {connected && <WalletDisconnectButton />}
                            {error && <Snackbar open autoHideDuration={6000} message={error} />}
                        </div>
                        <Typography variant="h4" component="h2" align="center" gutterBottom color="primary">
                            Review our restaurants
                        </Typography>
                        {loadingLocation ? (
                            <div style={{ textAlign: 'center' }}>
                                <Typography variant="body1" color="textSecondary">
                                    Please authorize location access to see nearby restaurants.
                                </Typography>
                            </div>
                        ) : (
                            <Grid container spacing={4} justifyContent="center">
                                {filteredRestaurants.map((restaurant) => (
                                    <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
                                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            <CardMedia component="div" sx={{ height: 200, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                                <div style={{ display: 'flex', overflowX: 'auto' }}>
                                                    {restaurant.imageUrls.map((url, index) => (
                                                        <img
                                                            key={index}
                                                            src={url}
                                                            alt={`${restaurant.name} image ${index + 1}`}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover', flexShrink: 0 }}
                                                        />
                                                    ))}
                                                </div>
                                            </CardMedia>
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography variant="h6" component="h3">
                                                    {restaurant.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {restaurant.description}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Address: {restaurant.address}
                                                </Typography>
                                                <Box mt={2}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => setSelectedRestaurant(restaurant)}
                                                    >
                                                        Select to Review
                                                    </Button>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}

                        {selectedRestaurant && (
                            <Grid container justifyContent="center" mt={5}>
                                <Grid item xs={12} sm={8} md={6}>
                                    <Card sx={{ p: 3 }}>
                                        <CardContent>
                                            <Typography variant="h5" align="center" gutterBottom>
                                                Submit a Review for {selectedRestaurant.name}
                                            </Typography>
                                            {['foodQuality', 'location', 'services', 'cleanliness', 'ambiance'].map((key) => (
                                                <RatingSelector
                                                    key={key}
                                                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                                                    name={key}
                                                    value={reviews[key]}
                                                    onChange={handleReviewChange}
                                                />
                                            ))}
                                            <Form.Group controlId="feedback" sx={{ mt: 3 }}>
                                                <Form.Label>Feedback</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={reviews.feedback}
                                                    onChange={handleReviewChange}
                                                    name="feedback"
                                                />
                                            </Form.Group>
                                            <Box textAlign="center" mt={4}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleSubmitReview}
                                                >
                                                    Submit Review
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        )}
                    </Container>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default RestaurantList;
