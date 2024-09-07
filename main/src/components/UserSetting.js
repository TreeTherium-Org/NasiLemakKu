import React, { Component } from "react";
import Section from "./layouts/Section";
import { Link } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase"; // Add storage from firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage methods

class UserSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: '',
            restaurantExists: false,
            restaurantName: '',
            restaurantDescription: '',
            username: "",
            email: "",
            walletAddress: "",
            iconUrl: '',
            backgroundUrl: '',
            error: null,
        };
    }

    componentDidMount() {
        this.fetchUserData();
        this.checkRestaurantInfo();
    }

    fetchUserData = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    this.setState({
                        username: userData.username || "Unknown",
                        email: userData.email || "Unknown",
                        walletAddress: userData.walletAddress || "Not Connected",
                        iconUrl: userData.iconUrl || process.env.PUBLIC_URL + '/assets/img/other/1.png', // Fallback icon
                        backgroundUrl: userData.backgroundUrl || "url(assets/img/bg/2.png)", // Fallback background
                    });

                } else {
                    console.log("No such user document!");
                }
            } else {
                console.log("User is not authenticated");
            }
        } catch (error) {
            console.error("Error fetching user data: ", error);
            this.setState({ error: error.message });
        }
    };

    checkRestaurantInfo = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userId = user.uid;
                // Fetch the user's document from the 'info' collection
                const userDocRef = doc(db, 'users', userId);
                const userDoc = await getDoc(userDocRef);

                // Check if restaurantName and restaurantDescription exist
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    if (userData.restaurantName && userData.restaurantDescription) {
                        this.setState({ restaurantExists: true });
                    } else {
                        console.log("No restaurant info found.");
                    }
                } else {
                    console.log("No such document in 'users' collection!");
                }
            }
        } catch (error) {
            console.error("Error checking restaurant users: ", error);
            this.setState({ error: error.message });
        }
    };


    toggleModal = (modalName) => {
        this.setState({ showModal: modalName });
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSwitchToRestaurant = () => {
        this.props.history.push('/restaurant-setting');  // Use '/restaurant-setting' as your RestaurantSetting page route
    };

    handleSave = async () => {
        const user = auth.currentUser;
        if (user) {
            const userId = user.uid;
            const { showModal, username, email, walletAddress, restaurantName, restaurantDescription } = this.state;

            try {
                if (showModal === 'username' || showModal === 'email' || showModal === 'description') {
                    // Update user data in 'users' collection
                    await setDoc(doc(db, 'users', userId), {
                        username: showModal === 'username' ? username : this.state.username,
                        email: showModal === 'email' ? email : this.state.email,
                        walletAddress: walletAddress, // Assuming walletAddress doesn't change here
                        description: showModal === 'description' ? this.state.description : '', // Add description update
                    }, { merge: true });  // Use merge to avoid overwriting existing fields
                }

                if (showModal === 'restaurant') {
                    // Update restaurant data in 'users' collection
                    await setDoc(doc(db, 'users', userId), {
                        restaurantName: restaurantName,
                        restaurantDescription: restaurantDescription,
                    }, { merge: true });  // Use merge to avoid overwriting other user data
                    this.setState({ restaurantExists: true });
                }

                // Close modal after saving
                this.setState({ showModal: '' });
            } catch (error) {
                console.error("Error saving data: ", error);
                this.setState({ error: error.message });
            }
        }
    };
    handleImageUpload = async (event, type) => {
        const file = event.target.files[0];
        if (file) {
            const user = auth.currentUser;
            const userId = user.uid;
            const fileRef = ref(storage, `${userId}/${type}`);
    
            // Create an object URL for instant preview
            const objectUrl = URL.createObjectURL(file);
            this.setState({ [type + 'Url']: objectUrl });
    
            try {
                // Upload the file to Firebase storage
                await uploadBytes(fileRef, file);
                const fileUrl = await getDownloadURL(fileRef);
    
                // Save the image URL to Firestore
                await setDoc(doc(db, 'users', userId), {
                    [type]: fileUrl
                }, { merge: true });
    
                // Update state with the new image URL
                this.setState({ [type + 'Url']: fileUrl });
    
                // Clean up object URL
                URL.revokeObjectURL(objectUrl);
            } catch (error) {
                console.error("Error uploading image: ", error);
                this.setState({ error: error.message });
            }
        }
    };
    
    

    renderModalContent = () => {
        const { showModal, username, email } = this.state;

        switch (showModal) {
            case 'username':
                return (
                    <div className="modal-content">
                        <h2>Change Username</h2>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.toggleModal('')}>Cancel</button>
                    </div>
                );
            case 'email':
                return (
                    <div className="modal-content">
                        <h2>Update Email</h2>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.toggleModal('')}>Cancel</button>
                    </div>
                );
            case 'address':
                return (
                    <div className="modal-content">
                        <h2>Edit Address</h2>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="address"
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.toggleModal('')}>Cancel</button>
                    </div>
                );
            case 'description':
                return (
                    <div className="modal-content">
                        <h2>Edit Description</h2>
                        <label>
                            Description:
                            <textarea
                                name="description"
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.toggleModal('')}>Cancel</button>
                    </div>
                );
            case 'restaurant':
                return (
                    <div className="modal-content">
                        <h2>Add Restaurant Information</h2>
                        <label>
                            Restaurant Name:
                            <input
                                type="text"
                                name="restaurantName"
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Restaurant Description:
                            <input
                                type="text"
                                name="restaurantDescription"
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.toggleModal('')}>Cancel</button>
                    </div>

                );
            default:
                return null;
        }
    };

    render() {
        const { showModal, restaurantExists, username, email, walletAddress, iconUrl, backgroundUrl, error } = this.state;

        // Verify URL formatting
        console.log('Icon URL:', iconUrl);
        console.log('Background URL:', backgroundUrl);

        return (
            <Section allNotification={false} searchPopup={true} title={'Profile & Setting'}>
                <div className="balance-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Profile</h3>
                        </div>
                        <div className="balance-area-bg pt-5 bg-user-setting"
                            style={{
                                backgroundImage: `url(${backgroundUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '5px',

                            }}>
                            <label htmlFor="background-upload" className="edit-title">Change Background</label>
                            <input
                                type="file"
                                id="background-upload"
                                style={{ display: "none" }}
                                onChange={(e) => this.handleImageUpload(e, 'backgroundUrl')}
                            />
                            <div className="ba-balance-inner text-center">
                                <label htmlFor="icon-upload">
                                    <div className="icon">
                                        <img src={iconUrl} alt="icon" />
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="icon-upload"
                                    style={{ display: "none" }}
                                    onChange={(e) => this.handleImageUpload(e, 'iconUrl')}
                                />
                                <h5 className="title mb-0">{username}</h5>
                                <p>{email}</p>
                            </div>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>

                <div className="transaction-details pd-top-36 mg-bottom-35">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Account Setting</h3>
                        </div>
                        <ul className="transaction-details-inner">
                            <li onClick={() => this.toggleModal('username')}>
                                <span className="float-left">Change Username</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li onClick={() => this.toggleModal('email')}>
                                <span className="float-left">Change Email</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li onClick={() => this.toggleModal('address')}>
                                <span className="float-left">Edit Address</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li onClick={() => this.toggleModal('description')}>
                                <span className="float-left">Edit Description</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li>
                                {restaurantExists ? (
                                    <span className="float-left" onClick={this.handleSwitchToRestaurant}>
                                        Switch to Restaurant
                                    </span>
                                ) : (
                                    <span className="float-left" onClick={() => this.toggleModal('restaurant')}>Add Restaurant</span>
                                )}
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                        </ul>
                    </div>
                </div>

                {showModal && (
                    <div className="modal-overlay">
                        {this.renderModalContent()}
                    </div>
                )}
            </Section>
        );
    }
}

export default UserSetting;
