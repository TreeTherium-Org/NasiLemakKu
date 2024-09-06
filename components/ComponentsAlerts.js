import React, {Component} from "react";
import Section from "./layouts/Section";

class ComponentsAlerts extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Alerts'}>
                <div className="container-inner mg-top-40">
                    <div className="container-fluid">
                        <div className="row flex-row">
                            <div className="col-xl-6">
                                {/* Basic Alerts */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Basic Alerts</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="alert alert-primary" role="alert">
                                            <strong>Hey!</strong> This is a primary alert
                                        </div>
                                        <div className="alert alert-secondary" role="alert">
                                            <strong>Hey!</strong> This is a secondary alert
                                        </div>
                                        <div className="alert alert-success" role="alert">
                                            <strong>Hey!</strong> This is a success alert
                                        </div>
                                        <div className="alert alert-info" role="alert">
                                            <strong>Hey!</strong> This is a info alert
                                        </div>
                                        <div className="alert alert-warning" role="alert">
                                            <strong>Hey!</strong> This is a warning alert
                                        </div>
                                        <div className="alert alert-danger" role="alert">
                                            <strong>Hey!</strong> This is a danger alert
                                        </div>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Dissmissible Alerts</h4>
                                        </div>
                                        <div className="alert alert-primary alert-dissmissible fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <strong>Hey!</strong> This is a primary alert
                                        </div>
                                        <div className="alert alert-secondary alert-dissmissible fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <strong>Hey!</strong> This is a secondary alert
                                        </div>
                                        <div className="alert alert-success alert-dissmissible fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <strong>Hey!</strong> This is a success alert
                                        </div>
                                        <div className="alert alert-info alert-dissmissible fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <strong>Hey!</strong> This is a info alert
                                        </div>
                                        <div className="alert alert-warning alert-dissmissible fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <strong>Hey!</strong> This is a warning alert
                                        </div>
                                        <div className="alert alert-danger alert-dissmissible fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <strong>Hey!</strong> This is a danger alert
                                        </div>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Alerts Size</h4>
                                        </div>
                                        <div className="alert alert-primary alert-lg" role="alert">
                                            <strong>Hey!</strong> This is a large primary alert
                                        </div>
                                        <p>Use <code>.alert-lg</code> class.</p>
                                    </div>
                                </div>
                                {/* End Basic Alerts */}
                            </div>
                            <div className="col-xl-6">
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Alerts Styles</h4>
                                    </div>
                                    <div className="widget-body">
                                        {/* Outline Style */}
                                        <div className="section-title mb-5">
                                            <h4>Outline Style</h4>
                                        </div>
                                        <div className="alert alert-outline-primary" role="alert">
                                            <strong>Hey!</strong> This is a primary alert
                                        </div>
                                        <div className="alert alert-outline-secondary" role="alert">
                                            <strong>Hey!</strong> This is a secondary alert
                                        </div>
                                        <div className="alert alert-outline-success" role="alert">
                                            <strong>Hey!</strong> This is a success alert
                                        </div>
                                        {/* End Outline Style */}
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Border Style</h4>
                                        </div>
                                        {/* Bordered Style */}
                                        <div className="alert alert-outline-info dashed" role="alert">
                                            <strong>Hey!</strong> This is a info alert with dashed border
                                        </div>
                                        <p>Use <code>.dashed</code> class.</p>
                                        <div className="alert alert-outline-danger dotted" role="alert">
                                            <strong>Hey!</strong> This is a danger alert with dotted border
                                        </div>
                                        <p>Use <code>.dotted</code> class.</p>
                                        {/* End Bordered Style */}
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Gradient Style</h4>
                                        </div>
                                        {/* Gradient Style */}
                                        <div className="alert bg-gradient-03 no-border" role="alert">
                                            <strong>Hey!</strong> This is an alert with gradient background
                                        </div>
                                        <div className="alert alert-outline-secondary" role="alert">
                                            <span className="text-gradient-03"><strong>Hey!</strong> This is an alert with text gradient</span>
                                        </div>
                                        <p>Use <code>.bg-gradient</code> and <code>.text-gradient</code> class.</p>
                                        {/* End Gradient Style */}
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Square Style</h4>
                                        </div>
                                        {/* Square Style */}
                                        <div className="alert alert-primary square" role="alert">
                                            <strong>Hey!</strong> This is a primary alert
                                        </div>
                                        <div className="alert alert-secondary square" role="alert">
                                            <strong>Hey!</strong> This is a secondary alert
                                        </div>
                                        <p>Use <code>.square</code> class.</p>
                                        {/* End Square Style */}
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Other Styles</h4>
                                        </div>
                                        {/* Other Style */}
                                        <div className="alert alert-shadow alert-lg" role="alert">
                                            <i className="la la-rocket mr-2" />
                                            <strong>Hey!</strong> This is a primary alert
                                        </div>
                                        <div className="alert alert-secondary-bordered alert-lg square fade show" role="alert">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" />
                                            <i className="la la-diamond mr-2" />
                                            <strong>Hey!</strong> This is a secondary alert
                                        </div>
                                        <div className="alert alert-primary-bordered alert-lg square" role="alert">
                                            <strong>Hey!</strong> This is a primary alert
                                        </div>
                                        <div className="alert alert-info-bordered alert-lg square" role="alert">
                                            <strong>Hey!</strong> This is a danger alert
                                        </div>
                                        {/* End Other Style */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </Section>
        );
    }
}

export default ComponentsAlerts;