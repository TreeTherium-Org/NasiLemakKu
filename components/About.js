import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'About'}>
                {/* transaction start */}
                <div className="transaction-area pd-top-36">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">About The Bankapp</h3>
                        </div>
                        <div className="about-content-inner p-0">
                            <img className="w-100" src={process.env.PUBLIC_URL + '/assets/img/other/2.png'} alt="img" />
                        </div>
                        <div className="about-content-inner">
                            <h5>Recived Money By Aron Fince</h5>
                            <p>You have received a payment from Aorn Fice.</p>
                            <p>Lpsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="about-content-inner">
                            <h5>Recived Money By Aron Fince</h5>
                            <p>You have received a payment from Aorn Fice.</p>
                            <p>Lpsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/7.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Contact Us</h5>
                                    <p>Your account logged in by another devices. Is not you. Please contact</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <Link className="float-left btn btn-red" to={'/contact'}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* transaction End */}
            </Section>
        );
    }
}

export default About;