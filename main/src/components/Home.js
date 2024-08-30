import React, {Component} from "react";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import {Link} from "react-router-dom";
import AutoNotification from "./layouts/AutoNotification";

class Home extends Component {
    render() {
        return (
            <>
                {/* Navigation Bar Imported from Layouts */}
                <Navbar />

                {/* Auto Notification Imported from Layout */}
                <AutoNotification />

                {/* Header Starts */}
                <div className="header-area" style={{backgroundImage: "url(assets/img/bg/1.png)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <div className="menu-bar">
                                    <i className="fa fa-bars" />
                                </div>
                            </div>
                            <div className="col-sm-4 col-4 text-center">
                                <Link to={'/'} className="logo">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt="logo" />
                                </Link>
                            </div>
                            <div className="col-sm-4 col-5 text-right">
                                <ul className="header-right">
                                    <li>
                                        <Link to={'/'}>
                                            <i className="fa fa-envelope" />
                                            <span className="badge">9</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/notification'}>
                                            <i className="fa fa-bell animated infinite swing" />
                                            <span className="badge">6</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="header-user" to={'/user-setting'}>
                                            <img src={process.env.PUBLIC_URL + '/assets/img/user.png'} alt="img" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Ends */}

                <div className="add-balance-inner-wrap">
                    <div className="container">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Balance</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="action-sheet-content">
                                        <form action="">
                                            <div className="form-group basic">
                                                <div className="input-wrapper">
                                                    <label className="label" htmlFor="account1">From</label>
                                                    <select className="form-control custom-select" id="account1">
                                                        <option value="0">Investment (*** 7284)</option>
                                                        <option value="1">Savings (*** 5078)</option>
                                                        <option value="2">Deposit (*** 2349)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <label className="label">Enter Amount</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="input1">$</span>
                                                    </div>
                                                    <input type="text" className="form-control form-control-lg" defaultValue={768} />
                                                </div>
                                            </div>

                                            <div className="form-group basic">
                                                <button type="button" className="btn-c btn-primary btn-block btn-lg" data-dismiss="modal">Deposit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar Ends */}

                {/* balance start */}
                <div className="balance-area pd-top-40 mg-top-50">
                    <div className="container">
                        <div className="balance-area-bg balance-area-bg-home">
                            <div className="balance-title text-center">
                                <h6>Welcome! <br /> Dear Mr Suvro - Bankapp Wallet</h6>
                            </div>
                            <div className="ba-balance-inner text-center" style={{backgroundImage: "url(assets/img/bg/2.png)"}}>
                                <div className="icon">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/1.png'} alt="img" />
                                </div>
                                <h5 className="title">Total Balance</h5>
                                <h5 className="amount">$56,985.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* balance End */}

                {/* add balance start */}
                <div className="add-balance-area pd-top-40">
                    <div className="container">
                        <div className="ba-add-balance-title ba-add-balance-btn">
                            <h5>Add Balance</h5>
                            <i className="fa fa-plus" />
                        </div>
                        <div className="ba-add-balance-inner mg-top-40">
                            <div className="row custom-gutters-20">
                                <div className="col-6">
                                    <Link className="btn btn-blue ba-add-balance-btn" to={'/'}>
                                        Withdraw
                                        <i className="fa fa-arrow-down" />
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="btn btn-red ba-add-balance-btn" to={'/'}>
                                        Send
                                        <i className="fa fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="btn btn-purple ba-add-balance-btn" to={'/'}>
                                        Cards
                                        <i className="fa fa-credit-card-alt" />
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="btn btn-green ba-add-balance-btn" to={'/'}>
                                        Exchange
                                        <i className="fa fa-arrow-down" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* add balance End */}

                {/* goal area Start */}
                <div className="goal-area pd-top-36">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Saving Goals</h3>
                            <Link to={'/saving'}>View All</Link>
                        </div>
                        <div className="single-goal single-goal-one">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <div className="details">
                                        <h6>Finance Business</h6>
                                        <p>Business</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0">
                                    <div className="circle-inner circle-inner-one">
                                        <h6 className="goal-amount">$130</h6>
                                        <div className="chart-circle" data-value="0.30">
                                            <canvas width="52" height="52" />
                                            <div className="chart-circle-value text-center">30%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-goal single-goal-two">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <div className="details">
                                        <h6>App Store</h6>
                                        <p>Technology</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0">
                                    <div className="circle-inner circle-inner-two">
                                        <h6 className="goal-amount">$1065</h6>
                                        <div className="chart-circle" data-value="0.90">
                                            <canvas width="52" height="52" />
                                            <div className="chart-circle-value text-center">90%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-goal single-goal-three">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <div className="details">
                                        <h6>Gaming Software</h6>
                                        <p>Development</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0">
                                    <div className="circle-inner circle-inner-three">
                                        <h6 className="goal-amount">$580</h6>
                                        <div className="chart-circle" data-value="0.60">
                                            <canvas width="52" height="52" />
                                            <div className="chart-circle-value text-center">60%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-goal single-goal-four">
                            <div className="row">
                                <div className="col-7 pr-0">
                                    <div className="details">
                                        <h6>Racing Car</h6>
                                        <p>Playing</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0">
                                    <div className="circle-inner circle-inner-four">
                                        <h6 className="goal-amount">$980</h6>
                                        <div className="chart-circle" data-value="0.60">
                                            <canvas width="52" height="52" />
                                            <div className="chart-circle-value text-center">60%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* goal area End */}

                {/* history start */}
                <div className="history-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">History</h3>
                            <Link to={'/saving'}>View All</Link>
                        </div>
                        <div className="ba-history-inner">
                            <div className="row custom-gutters-20">
                                <div className="col-6">
                                    <div className="ba-single-history ba-single-history-one" style={{backgroundImage: "url(assets/img/bg/3.png)"}}>
                                        <h6>Income</h6>
                                        <h5>$58,968.00</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ba-single-history ba-single-history-two" style={{backgroundImage: "url(assets/img/bg/3.png)"}}>
                                        <h6>Expenses</h6>
                                        <h5>$50,968.00</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ba-single-history ba-single-history-three" style={{backgroundImage: "url(assets/img/bg/3.png)"}}>
                                        <h6>Total Bills</h6>
                                        <h5>$50,968.00</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ba-single-history ba-single-history-four" style={{backgroundImage: "url(assets/img/bg/3.png)"}}>
                                        <h6>Savings</h6>
                                        <h5>$58.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* history End */}

                {/* cart start */}
                <div className="cart-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">My Cart</h3>
                            <Link to={'/carts'}>View All</Link>
                        </div>
                        <div className="ba-cart-inner" style={{backgroundImage: "url(assets/img/bg/4.png)"}}>
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
                {/* cart End */}

                {/* transaction start */}
                <div className="transaction-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Transactions</h3>
                            <Link to={'/transaction'}>View All</Link>
                        </div>
                        <ul className="transaction-inner">
                            <li className="ba-single-transaction">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/2.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Namecheap Inc.</h5>
                                    <p>Domain Purchase</p>
                                    <h5 className="amount">-$130</h5>
                                </div>
                            </li>
                            <li className="ba-single-transaction">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/3.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Namecheap Inc.</h5>
                                    <p>Domain Purchase</p>
                                    <h5 className="amount">-$130</h5>
                                </div>
                            </li>
                            <li className="ba-single-transaction">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/4.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Namecheap Inc.</h5>
                                    <p>Domain Purchase</p>
                                    <h5 className="amount">-$130</h5>
                                </div>
                            </li>
                            <li className="ba-single-transaction">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/5.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>Namecheap Inc.</h5>
                                    <p>Domain Purchase</p>
                                    <h5 className="amount">-$130</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* transaction End */}

                {/* send-money start */}
                <div className="send-money-area pd-top-36 pd-bottom-40 mg-top-40" style={{backgroundImage: "url(assets/img/bg/5.png)"}}>
                    <div className="container">
                        <div className="section-title style-two">
                            <h3 className="title">Send Money</h3>
                            <Link to={'/bill-pay'}>View All</Link>
                        </div>
                    </div>
                    <div className="send-money-slider owl-carousel">
                        <div className="item">
                            <div className="single-send-money">
                                <img src={process.env.PUBLIC_URL + '/assets/img/send-money/1.png'} alt="img" />
                                <p>Alex Smith</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-send-money">
                                <img src={process.env.PUBLIC_URL + '/assets/img/send-money/2.png'} alt="img" />
                                <p>Mariano </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-send-money">
                                <img src={process.env.PUBLIC_URL + '/assets/img/send-money/3.png'} alt="img" />
                                <p>Karitika</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-send-money">
                                <img src={process.env.PUBLIC_URL + '/assets/img/send-money/4.png'} alt="img" />
                                <p>Jhone</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* send-money End */}

                {/* bill-pay start */}
                <div className="bill-pay-area pd-top-36">
                    <div className="container">
                        <div className="section-title style-three text-center">
                            <h3 className="title">Pay Your Monthly Bill</h3>
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
                        <div className="btn-wrap text-center mt-4">
                            <Link className="readmore-btn" to={'/bill-pay'}>View All</Link>
                        </div>
                    </div>
                </div>
                {/* bill-pay End */}

                {/* blog-area start */}
                <div className="blog-area pd-top-36 pb-2 mg-top-40" style={{backgroundImage: "url(assets/img/bg/6.png)"}}>
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Recent Posts</h3>
                            <Link to={'/blog'}>View All</Link>
                        </div>
                        <div className="blog-slider owl-carousel">
                            <div className="item">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/1.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/2.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog-area End */}

                {/* Footer Component Imported from Layouts */}
                <Footer />
            </>
        );
    }
}

export default Home;