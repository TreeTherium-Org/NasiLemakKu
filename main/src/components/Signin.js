import React, { Component } from "react";
import Section from "./layouts/Section";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase.js";
import { withRouter } from "react-router-dom";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signIn = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            // Retrieve user data
            const user = userCredential.user;
            // Store the user's data in localStorage or state
            localStorage.setItem("user", JSON.stringify(user)); // Save user details

            // Redirect to home page
            this.props.history.push("/");
        } catch (error) {
            console.log(error);
            this.setState({ error: error.message });
        }
    }

    handleProviderSignIn = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Store user data locally or in state
            localStorage.setItem("user", JSON.stringify(user)); // Save user details

            // Redirect to home page
            this.props.history.push("/");
        } catch (error) {
            console.error("Error signing in with provider:", error);
            this.setState({ error: error.message });
        }
    }

    render() {
        // Initialize providers
        const googleProvider = new GoogleAuthProvider();
        const facebookProvider = new FacebookAuthProvider();

        const { error } = this.state;
        return (
            <Section allNotification={false} searchPopup={true} title={'Login'}>
                <div className="ba-page-name text-center mg-bottom-40">
                    <h3>Login</h3>
                </div>

                <div className="signin-area mg-bottom-35">
                    <div className="container">
                        <form className="contact-form-inner" onSubmit={this.signIn}>
                            <label className="single-input-wrap">
                                <span>Email address*</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                            <label className="single-input-wrap">
                                <span>Password*</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                            <div className="single-checkbox-wrap">
                                <input type="checkbox" />
                                <span>Remember password</span>
                            </div>
                            <button className="btn btn-green" type="submit">Login</button>
                            <Link className="forgot-btn" to={'/forgot-password'}>Forgot password?</Link>
                        </form>
                        {error && <p className="error">{error}</p>}

                        <div className="social-buttons">
                            <button onClick={() => this.handleProviderSignIn(googleProvider)} className="social-button btn-google">
                                <img src="https://theplace2b.com.au/wp-content/uploads/2020/09/178-1783296_g-transparent-circle-google-logo.png" alt="Google" /> Sign in with Google
                            </button>
                            <button onClick={() => this.handleProviderSignIn(facebookProvider)} className="social-button btn-facebook">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" /> Sign in with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default withRouter(Signin);