import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class TransactionDetails extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Transaction Details'}>
                <div className="balance-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Recently Transactios</h3>
                            <Link className="sub-delete" to={'/transaction-details'}><i className="fa fa-trash" /></Link>
                        </div>
                        <div className="balance-area-bg bg-transaction-details">
                            <div className="balance-title text-center">
                                <h6>Here is your transactios <br /> details history</h6>
                            </div>
                            <div className="ba-balance-inner text-center"
                                 style={{backgroundImage: "url(assets/img/bg/2.png)"}}>
                                <div className="icon">
                                    <i className="fa fa-arrow-right" />
                                </div>
                                <h5 className="title">Pyment Sent</h5>
                                <h5 className="amount">$56.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* balance End */}

                {/* transaction start */}
                <div className="transaction-details pd-top-36">
                    <div className="container">
                        <ul className="transaction-details-inner">
                            <li className="transaction-details-title">
                                <span className="float-left">Payment Status</span>
                                <span className="float-right"><i className="fa fa-check-circle" /></span>
                            </li>
                            <li>
                                <span className="float-left">To</span>
                                <span className="float-right">Rakishony Roy</span>
                            </li>
                            <li>
                                <span className="float-left">Bank Name</span>
                                <span className="float-right">Payonner Internatnal</span>
                            </li>
                            <li>
                                <span className="float-left">Transaction Category</span>
                                <span className="float-right">Travely</span>
                            </li>
                            <li>
                                <span className="float-left">Purchase Receipt</span>
                                <span className="float-right">Yes</span>
                            </li>
                            <li>
                                <span className="float-left">Purchase Date</span>
                                <span className="float-right">03/22/2020</span>
                            </li>
                            <li>
                                <span className="float-left">Total Amounts</span>
                                <span className="float-right">$757.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* transaction End */}

                <div className="btn-wrap mg-top-40 text-center mg-bottom-35">
                    <div className="container">
                        <p className="btn-content-text">If haveing any transaction issue, Please <Link to={'/contact'}>conatat us</Link></p>
                    </div>
                </div>
            </Section>
        );
    }
}

export default TransactionDetails;