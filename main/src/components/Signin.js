import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Signin extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Signin'}>
                <div className="ba-page-name text-center mg-bottom-40">
                    <h3>Login</h3>
                </div>

                <div className="signin-area mg-bottom-35">
                    <div className="container">
                        <form className="contact-form-inner">
                            <label className="single-input-wrap">
                                <span>User name or email address*</span>
                                <input type="text" />
                            </label>
                            <label className="single-input-wrap">
                                <span>Password*</span>
                                <input type="password" />
                            </label>
                            <div className="single-checkbox-wrap">
                                <input type="checkbox" /><span>Remember password</span>
                            </div>
                            <Link className="btn btn-purple" to={'/signin'}>Login</Link>
                            <Link className="forgot-btn" to={'/signin'}>Forgot password?</Link>
                        </form>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Signin;