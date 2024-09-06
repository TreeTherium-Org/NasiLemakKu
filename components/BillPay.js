import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class BillPay extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Monthly Bill'}>
                <div className="bill-pay-area pd-top-36 mg-bottom-35">
                    <div className="container">
                        <div className="section-title style-three">
                            <h3 className="title">Pay Monthly Bill</h3>
                            <Link to={'/bill-pay'}><i className="fa fa-bell" /></Link>
                        </div>
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/6.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Envato.com</h5>
                                    <p>Standard Elements Services Subscribtion</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <h5>$169</h5>
                                <Link className="btn btn-blue" to={'/bill-pay'}>Pay Now</Link>
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
                                <h5>$130</h5>
                                <Link className="btn btn-blue" to={'/bill-pay'}>Pay Now</Link>
                            </div>
                        </div>
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/4.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Amazon.com</h5>
                                    <p>Standard Domain Services Subscribtion</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <h5>$130</h5>
                                <Link className="btn btn-blue" to={'/bill-pay'}>Pay Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default BillPay;