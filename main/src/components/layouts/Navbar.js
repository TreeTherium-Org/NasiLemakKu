import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="ba-navbar">
                <div className="ba-navbar-user">
                    <div className="menu-close">
                        <i className="la la-times" />
                    </div>
                    <div className="thumb">
                        <img src={process.env.PUBLIC_URL + '/assets/img/user.png'} alt="user" />
                    </div>
                    <div className="details">
                        <h5>Raduronto kelax</h5>
                        <p>ID: 99883323</p>
                    </div>
                </div>
                <div className="ba-add-balance-title">
                    <h5>Add Balance</h5>
                    <p>$458786.00</p>
                </div>
                <div className="ba-add-balance-title style-two">
                    <h5>Deposit</h5>
                    <i className="fa fa-plus" />
                </div>
                <div className="ba-main-menu">
                    <h5>Menu</h5>
                    <ul>
                        <li><Link to={'/'}>Bankapp Display</Link></li>
                        <li><Link to={'/all-pages'}>Pages</Link></li>
                        <li><Link to={'/components'}>Components</Link></li>
                        <li><Link to={'/carts'}>My Cart</Link></li>
                        <li><Link to={'/user-setting'}>Setting</Link></li>
                        <li><Link to={'/notification'}>Notification</Link></li>
                        <li><Link to={'/signup'}>Logout</Link></li>
                    </ul>
                    <Link className="btn btn-purple" to={'/user-setting'}>View Profile</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;