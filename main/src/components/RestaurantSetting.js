import React, { Component } from "react";
import Section from "./layouts/Section";
import { Link } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { withRouter } from "react-router-dom";

class RestaurantSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: '',
            restaurantName: '',
            restaurantDescription: '',
            address: '',
            email: "",
            error: null,
        };
    }

    componentDidMount() {
        this.fetchRestaurantData();
    }

    fetchRestaurantData = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    this.setState({
                        restaurantName: userData.restaurantName || "Unknown",
                        restaurantDescription: userData.restaurantDescription || "No Description",
                        email: userData.email || "Unknown",
                        address: userData.address || "Not Provided",
                    });
                } else {
                    console.log("No restaurant data found!");
                }
            } else {
                console.log("User is not authenticated");
            }
        } catch (error) {
            console.error("Error fetching restaurant data: ", error);
            this.setState({ error: error.message });
        }
    };

    toggleModal = (modalName) => {
        this.setState({ showModal: modalName });
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSave = async () => {
        const user = auth.currentUser;
        if (user) {
            const userId = user.uid;
            const { restaurantName, restaurantDescription, address } = this.state;

            try {
                if (this.state.showModal === 'restaurantName') {
                    // Update restaurant name
                    await setDoc(doc(db, 'users', userId), { restaurantName }, { merge: true });
                }
                if (this.state.showModal === 'restaurantDescription') {
                    // Update restaurant description
                    await setDoc(doc(db, 'users', userId), { restaurantDescription }, { merge: true });
                }
                if (this.state.showModal === 'address') {
                    // Update address
                    await setDoc(doc(db, 'users', userId), { address }, { merge: true });
                }

                // Close modal after saving
                this.setState({ showModal: '' });
            } catch (error) {
                console.error("Error saving data: ", error);
                this.setState({ error: error.message });
            }
        }
    };

    renderModalContent = () => {
        const { showModal, restaurantName, restaurantDescription, address } = this.state;

        switch (showModal) {
            case 'restaurantName':
                return (
                    <div className="modal-content">
                        <h2>Change Restaurant Name</h2>
                        <label>
                            Restaurant Name:
                            <input
                                type="text"
                                name="restaurantName"
                                value={restaurantName}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={() => this.toggleModal('')}>Cancel</button>
                    </div>
                );
            case 'restaurantDescription':
                return (
                    <div className="modal-content">
                        <h2>Edit Restaurant Description</h2>
                        <label>
                            Description:
                            <textarea
                                name="restaurantDescription"
                                value={restaurantDescription}
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
                                value={address}
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

    handleSwitchToUser = () => {
        this.props.history.push('/user-setting');  // Redirect to UserSetting page
    };

    render() {
        const { showModal, restaurantName, email, restaurantDescription, address, error } = this.state;

        return (
            <Section allNotification={false} searchPopup={true} title={'Restaurant Setting'}>
                <div className="balance-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Restaurant Profile</h3>
                        </div>
                        <div className="balance-area-bg pt-5 bg-user-setting">
                            <Link className="edit-title" to={'/restaurant-setting'}>Edit</Link>
                            <div className="ba-balance-inner text-center"
                                style={{ backgroundImage: "url(assets/img/bg/2.png)" }}>
                                <div className="icon">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/other/1.png'} alt="img" />
                                </div>
                                <h5 className="title mb-0">{restaurantName}</h5>
                                <p>{restaurantDescription}</p>
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
                            <li onClick={() => this.toggleModal('restaurantName')}>
                                <span className="float-left">Change Restaurant Name</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li onClick={() => this.toggleModal('restaurantDescription')}>
                                <span className="float-left">Edit Restaurant Description</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li onClick={() => this.toggleModal('address')}>
                                <span className="float-left">Edit Address</span>
                                <span className="float-right"><i className="la la-angle-right" /></span>
                            </li>
                            <li onClick={this.handleSwitchToUser}>
                                <span className="float-left">Switch to Reviewer</span>
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

export default withRouter(RestaurantSetting);
