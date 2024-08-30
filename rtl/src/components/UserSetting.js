import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class UserSetting extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'User Setting'}>
                <div className="balance-area pd-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Update Your Information</h3>
                        </div>
                        <div className="balance-area-bg pt-5 bg-user-setting">
                            <Link className="edit-title" to={'/user-setting'}>Edit</Link>
                            <div className="ba-balance-inner text-center"
                                 style={{backgroundImage: "url(assets/img/bg/2.png)"}}>
                                <div className="icon">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/other/1.png'} alt="img" />
                                </div>
                                <h5 className="title mb-0">Aron Fince</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="transaction-details pd-top-36 mg-bottom-35">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Profile Setting</h3>
                        </div>
                        <ul className="transaction-details-inner">
                            <li>
                                <span className="float-left">Payment Alert</span>
                                <span className="float-right">
                                    <span className="single-switch">
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                    </span>
                                </span>
                            </li>
                            <li>
                                <span className="float-left">Notification Sound</span>
                                <span className="float-right">Beep</span>
                            </li>
                            <li>
                                <Link to={'/user-setting'}>
                                    <span className="float-left">Change Username</span>
                                    <span className="float-right"><i className="la la-angle-right" /></span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/user-setting'}>
                                    <span className="float-left">Email Update</span>
                                    <span className="float-right"><i className="la la-angle-right" /></span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/user-setting'}>
                                    <span className="float-left">Edit Address</span>
                                    <span className="float-right"><i className="la la-angle-right" /></span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/user-setting'}>
                                    <span className="float-left">Add Cuntom Fileds</span>
                                    <span className="float-right"><i className="fa fa-plus" /></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        );
    }
}

export default UserSetting;