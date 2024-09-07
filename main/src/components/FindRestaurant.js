import React, { Component } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import based on your firebase.js exports

class FindRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      autocomplete: null,
      restaurants: [],
    };
  }

  componentDidMount() {
    this.loadGoogleMapsScript();
  }

  loadGoogleMapsScript = () => {
    const existingScript = document.getElementById('googleMaps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIV9YVytAARkQZ1mLhzaauyJZqRC3anhc&libraries=places`;
      script.id = 'googleMaps';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        this.initAutocomplete();
      };
    } else {
      this.initAutocomplete();
    }
  };

  initAutocomplete = () => {
    const input = document.getElementById('location-input');
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.setFields(['geometry', 'name']);
    this.setState({ autocomplete });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place && place.geometry) {
        this.searchNearbyNasiLemak(place.geometry.location);
      } else {
        console.log('No valid place selected');
      }
    });
  };

  searchNearbyNasiLemak = (location) => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15,
      disableDefaultUI: true, // Hides extra controls for a cleaner mobile view
    });

    this.setState({ map }, () => {
      this.fetchRestaurants(location);
    });
  };

  fetchRestaurants = async (location) => {
    const restaurantCollection = collection(db, 'restaurants');
    const restaurantSnapshot = await getDocs(restaurantCollection);
    const restaurantList = restaurantSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    this.setState({ restaurants: restaurantList }, () => {
      this.displayMarkers(location);
    });
  };

  displayMarkers = (location) => {
    const { restaurants, map } = this.state;
    if (!map) {
      console.error('Map not initialized');
      return;
    }
    
    const infowindow = new window.google.maps.InfoWindow();

    restaurants.forEach((restaurant) => {
      if (!restaurant.location || !restaurant.location.latitude || !restaurant.location.longitude) {
        console.error('Invalid location data', restaurant);
        return;
      }

      const position = {
        lat: restaurant.location.latitude,
        lng: restaurant.location.longitude,
      };

      const marker = new window.google.maps.Marker({
        position: position,
        map: map,
        title: restaurant.name,
      });

      marker.addListener('click', () => {
        infowindow.setContent(`
          <div><strong>${restaurant.name}</strong><br>
          ${restaurant.description}<br>
          <a href="${restaurant.facebook}">Facebook</a><br>
          <a href="${restaurant.instagram}">Instagram</a>
          </div>
        `);
        infowindow.open(map, marker);
      });
    });
  };

  resetLocationSearch = () => {
    const { map, autocomplete } = this.state;

    const input = document.getElementById('location-input');
    input.value = '';

    if (map) {
      map.setCenter({ lat: 3.139, lng: 101.6869 }); // Default location (Kuala Lumpur center)
      map.setZoom(12); // Default zoom level
    }

    if (autocomplete) {
      autocomplete.set('place', null);
    }
  };

  render() {
    return (
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <input
          id="location-input"
          type="text"
          placeholder="Enter a location"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            padding: '10px',
            zIndex: 1000,
            width: 'calc(100% - 80px)',
            maxWidth: '400px',
            borderRadius: '5px',
            border: '1px solid #16423C',
            fontSize: '16px',
          }}
        />
        <button
          onClick={this.resetLocationSearch}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '10px',
            zIndex: 1000,
            borderRadius: '5px',
            border: '1px solid #ccc',
            color: '#E9EFEC',
            backgroundColor: '#16423C',
            fontSize: '16px',
          }}
        >
          Back
        </button>
        <div
          id="map"
          style={{
            width: '100%',
            height: 'calc(100% - 60px)',
            minHeight: '400px',
            marginTop: '60px',
          }}
        ></div>
      </div>
    );
  }
}

export default FindRestaurant;
