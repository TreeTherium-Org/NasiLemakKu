import React, {Component} from "react";
import Section from "./layouts/Section";

class ComponentsProgress extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Progress'}>
                <div className="container-inner mg-top-30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6">
                                {/* Basic */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Basic Progress Bars</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>
                                </div>
                                {/* End Basic */}
                                {/* Labels */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>With Labels</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Labels */}
                                {/* Gradient */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>With Gradient</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-gradient-01" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-gradient-05" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-gradient-03" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-gradient-04" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>
                                </div>
                                {/* End Gradient */}
                                {/* Multiple */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Multiple Bars</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" />
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar bg-gradient-01" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                            <div className="progress-bar bg-gradient-02" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                                            <div className="progress-bar bg-gradient-04" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                    </div>
                                </div>
                                {/* End Multiple */}
                            </div>
                            <div className="col-xl-6">
                                {/* Sizing */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Sizing</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="section-title mb-5">
                                            <h4>Small</h4>
                                        </div>
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-sm mb-3">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <p>Use <code>.progress-sm</code> class.</p>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Large</h4>
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <p>Use <code>.progress-lg</code> class.</p>
                                    </div>
                                </div>
                                {/* End Sizing */}
                                {/* Stripped */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Stipped Progress Bars</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <p>Use <code>.progress-bar-stripped</code> class.</p>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Animated</h4>
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <div className="progress progress-lg mb-3">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                        </div>
                                        <p>Use <code>.progress-bar-animated</code> class.</p>
                                    </div>
                                </div>
                                {/* End Stripped */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </Section>
        );
    }
}

export default ComponentsProgress;