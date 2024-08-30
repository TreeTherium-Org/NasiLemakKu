import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Saving extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Saving'}>
                <div className="goal-area pd-top-36 mg-bottom-35">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Saving Goals</h3>
                            <Link className="goal-title" to={'/saving'}>Total-$ 129898</Link>
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
            </Section>
        );
    }
}

export default Saving;