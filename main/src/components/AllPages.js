import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class AllPages extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'All Pages'}>
                <div className="allpage-area mg-bottom-40">
                    <div className="container">
                        <div className="ba-all-page-inner">
                            <h5>Pages</h5>
                            <ul>
                                <li><Link to={'/carts'}>My Card</Link></li>
                                <li><Link to={'/saving'}>Saving</Link></li>
                                <li><Link to={'/transaction'}>Transaction</Link></li>
                                <li><Link to={'/transaction-details'}>Transaction Details</Link></li>
                                <li><Link to={'/bill-pay'}>Bills Details</Link></li>
                                <li><Link to={'/notification'}>Notification</Link></li>
                                <li><Link to={'/bill-pay'}>Bill Pay</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/blog-details'}>Blog Details</Link></li>
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="ba-all-page-inner style-two">
                            <h5>User Authentication</h5>
                            <ul>
                                <li><Link to={'/signin'}>Login</Link></li>
                                <li><Link to={'/signup'}>Register</Link></li>
                                <li><Link to={'/user-setting'}>User Setting</Link></li>
                                <li><Link to={'/user-verification'}>SMS Verification</Link></li>
                                <li><Link to={'/signup'}>Forgot Password</Link></li>
                            </ul>
                        </div>
                        <div className="ba-all-page-inner style-three">
                            <h5>Menu</h5>
                            <ul>
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/blog-details'}>Blog Details</Link></li>
                                <li><Link to={'/all-pages'}>404</Link></li>
                                <li><Link to={'/all-pages'}>Faq</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default AllPages;