import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class UserVerification extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Verification'}>
                <div className="ba-page-name text-center mg-bottom-40">
                    <h3>Verification</h3>
                </div>
                <div className="signin-area mg-bottom-35">
                    <div className="container">
                        <form className="verification-inner text-center" style={{backgroundImage: "url(assets/img/bg/14.png)"}}>
                            <h3>Enter SMS Verification 4 Digit Code</h3>
                            <input type="text" placeholder="...." />
                            <div className="verify-btn"><Link className="#" to={'user-verification'}>VerifY</Link></div>
                        </form>
                    </div>
                </div>
            </Section>
        );
    }
}

export default UserVerification;