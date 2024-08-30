import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Carts extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Carts'}>
                <div className="cart-area pd-top-36 mg-bottom-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">You Have Carts</h3>
                            <Link className="count-title" to={'/carts'}>5</Link>
                        </div>
                        <div className="ba-cart-inner mb-3" style={{backgroundImage: "url(assets/img/bg/4.png)"}}>
                            <p>Balance</p>
                            <h4>$56,985.00</h4>
                            <p>Card Number</p>
                            <h5>0000 0000 0000 0909</h5>
                            <div className="row">
                                <div className="col-4">
                                    <p>Expiry</p>
                                    <h5>12/10</h5>
                                </div>
                                <div className="col-8">
                                    <p>CCV</p>
                                    <h5>513</h5>
                                </div>
                            </div>
                            <p>aron smith</p>
                        </div>

                        <div className="ba-cart-inner mb-3" style={{backgroundImage: "url(assets/img/bg/10.png)"}}>
                            <p>Balance</p>
                            <h4>$56,985.00</h4>
                            <p>Card Number</p>
                            <h5>0000 0000 0000 0909</h5>
                            <div className="row">
                                <div className="col-4">
                                    <p>Expiry</p>
                                    <h5>12/10</h5>
                                </div>
                                <div className="col-8">
                                    <p>CCV</p>
                                    <h5>513</h5>
                                </div>
                            </div>
                            <p>aron smith</p>
                        </div>

                        <div className="ba-cart-inner mb-3" style={{backgroundImage: "url(assets/img/bg/11.png)"}}>
                            <p>Balance</p>
                            <h4>$56,985.00</h4>
                            <p>Card Number</p>
                            <h5>0000 0000 0000 0909</h5>
                            <div className="row">
                                <div className="col-4">
                                    <p>Expiry</p>
                                    <h5>12/10</h5>
                                </div>
                                <div className="col-8">
                                    <p>CCV</p>
                                    <h5>513</h5>
                                </div>
                            </div>
                            <p>aron smith</p>
                        </div>

                        <div className="ba-cart-inner mb-3" style={{backgroundImage: "url(assets/img/bg/12.png)"}}>
                            <p>Balance</p>
                            <h4>$56,985.00</h4>
                            <p>Card Number</p>
                            <h5>0000 0000 0000 0909</h5>
                            <div className="row">
                                <div className="col-4">
                                    <p>Expiry</p>
                                    <h5>12/10</h5>
                                </div>
                                <div className="col-8">
                                    <p>CCV</p>
                                    <h5>513</h5>
                                </div>
                            </div>
                            <p>aron smith</p>
                        </div>

                        <div className="ba-cart-inner" style={{backgroundImage: "url(assets/img/bg/13.png)"}}>
                            <p>Balance</p>
                            <h4>$56,985.00</h4>
                            <p>Card Number</p>
                            <h5>0000 0000 0000 0909</h5>
                            <div className="row">
                                <div className="col-4">
                                    <p>Expiry</p>
                                    <h5>12/10</h5>
                                </div>
                                <div className="col-8">
                                    <p>CCV</p>
                                    <h5>513</h5>
                                </div>
                            </div>
                            <p>aron smith</p>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Carts;