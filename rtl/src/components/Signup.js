import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Signup extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Signup'}>
                <div className="ba-page-name text-center mg-bottom-40">
                    <h3>SignUp</h3>
                </div>

                <div className="signin-area mg-bottom-35">
                    <div className="container">
                        <form className="contact-form-inner">
                            <label className="single-input-wrap">
                                <span>User name*</span>
                                <input type="text" />
                            </label>
                            <label className="single-input-wrap">
                                <span>Email Address*</span>
                                <input type="text" />
                            </label>
                            <label className="single-input-wrap">
                                <span>Password*</span>
                                <input type="password" />
                            </label>
                            <div className="single-checkbox-wrap">
                                <input type="checkbox" /><span>Accept terms & condition</span>
                            </div>
                            <Link className="btn btn-purple" to={'/signup'}>Register</Link>
                        </form>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Signup;