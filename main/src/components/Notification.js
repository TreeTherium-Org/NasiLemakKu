import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Notification extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Notification'}>
                <div className="transaction-area pd-top-36 mg-bottom-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Inbox Notifications</h3>
                            <Link to={'/notification'}><i className="fa fa-bell" /></Link>
                        </div>
                        <div className="btn-wrap-area mb-2 text-center">
                            <Link className="btn btn-red mr-2 mb-1" to={'/notification'}>Message 12</Link>
                            <Link className="btn btn-purple ml-2 mb-1" to={'/notification'}>Notification 34</Link>
                        </div>
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/6.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Recived Money By Aron Fince</h5>
                                    <p>You have received a payment from Aorn Fice.</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <h5><i className="fa fa-long-arrow-left" />$169</h5>
                                <Link className="btn btn-blue" to={'/notification'}>Read</Link>
                            </div>
                        </div>
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/3.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Apple.com</h5>
                                    <p>Apple Laptop Monthly Pay System.</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <h5><i className="fa fa-long-arrow-right" />$130</h5>
                                <Link className="btn btn-gray" to={'/notification'}>Read</Link>
                            </div>
                        </div>
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/7.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Amazon.com</h5>
                                    <p>Standard Domain Services Subscribtion</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <h5>***</h5>
                                <Link className="btn btn-red" to={'/notification'}>Read</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Notification;