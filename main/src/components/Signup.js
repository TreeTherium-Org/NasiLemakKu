import React, { Component } from "react";
import Section from "./layouts/Section";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            error: null,
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    signUp = async (e) => {
        e.preventDefault();  // Ensure 'e' is passed as a parameter and used here
        const { email, password, username } = this.state;
        
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log("User Credential:", userCredential);//to know in web's console log the user credentials 
    
          // Add user information to Firestore
          const userDocRef = doc(collection(db, "users"), userCredential.user.uid);
          await setDoc(userDocRef, {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            username: username,
          });
          console.log("Document added");
    
          this.props.history.push("/");
        } catch (error) {
            console.error("Error signing up: ", error);
            this.setState({ error: error.message });
        }
    }

    handleProviderSignIn = async (provider) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save the user's data to Firestore
            const userDocRef = doc(collection(db, "users"), user.uid);
            await setDoc(userDocRef, {
                uid: user.uid,
                email: user.email,
                username: user.displayName || this.state.username,
            });

            console.log("User signed in with provider:", user);
            this.props.history.push("/");
        } catch (error) {
            console.error("Error signing in with provider:", error);
            this.setState({ error: error.message });
        }
    }

    render() {
        const googleProvider = new GoogleAuthProvider();
        const facebookProvider = new FacebookAuthProvider();

        return (
            <Section allNotification={false} searchPopup={true} title={'Signup'}>
                <div className="ba-page-name text-center mg-bottom-40">
                    <h3>SignUp</h3>
                </div>

                <div className="signin-area mg-bottom-35">
                    <div className="container">
                        <form className="contact-form-inner" onSubmit={this.signUp}>
                            <label className="single-input-wrap">
                                <span>User name*</span>
                                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </label>
                            <label className="single-input-wrap">
                                <span>Email Address*</span>
                                <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                            </label>
                            <label className="single-input-wrap">
                                <span>Password*</span>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </label>
                            <div className="single-checkbox-wrap">
                                <input type="checkbox" /><span>Accept terms & condition</span>
                            </div>
                            <button type="submit" className="btn btn-green">Register</button>
                        </form>
                        {this.state.error && <p className="error">{this.state.error}</p>}
                        
                        <div className="social-buttons">
                            <button onClick={() => this.handleProviderSignIn(googleProvider)} className="social-button btn-google">
                                <img src="https://theplace2b.com.au/wp-content/uploads/2020/09/178-1783296_g-transparent-circle-google-logo.png" alt="Google" /> Sign up with Google
                            </button>
                            <button onClick={() => this.handleProviderSignIn(facebookProvider)} className="social-button btn-facebook">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" /> Sign up with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Signup;