import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class ComponentsButtons extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Buttons'}>
                <div className="container-inner mg-top-40">
                    <div className="container-fluid">
                        <div className="row flex-row">
                            <div className="col-xl-6">
                                {/* Basic Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Basic Buttons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <button type="button" className="btn-c btn-primary mr-1 mb-2">Primary</button>
                                            <button type="button" className="btn-c btn-secondary mr-1 mb-2">Secondary</button>
                                            <button type="button" className="btn-c btn-success mr-1 mb-2">Success</button>
                                            <button type="button" className="btn-c btn-info mr-1 mb-2">Info</button>
                                            <button type="button" className="btn-c btn-warning mr-1 mb-2">Warning</button>
                                            <button type="button" className="btn-c btn-danger mr-1 mb-2">Danger</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Basic Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Basic Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Ripple Effect</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <button type="button" className="btn-c btn-primary ripple mr-1 mb-2">Primary</button>
                                            <button type="button" className="btn-c btn-secondary ripple mr-1 mb-2">Secondary</button>
                                            <button type="button" className="btn-c btn-success ripple mr-1 mb-2">Success</button>
                                            <button type="button" className="btn-c btn-info ripple mr-1 mb-2">Info</button>
                                            <button type="button" className="btn-c btn-warning ripple mr-1 mb-2">Warning</button>
                                            <button type="button" className="btn-c btn-danger ripple mr-1 mb-2">Danger</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Basic Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Outline Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Outline Buttons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <button type="button" className="btn-c btn-outline-primary mr-1 mb-2">Primary</button>
                                            <button type="button" className="btn-c btn-outline-secondary mr-1 mb-2">Secondary</button>
                                            <button type="button" className="btn-c btn-outline-success mr-1 mb-2">Success</button>
                                            <button type="button" className="btn-c btn-outline-info mr-1 mb-2">Info</button>
                                            <button type="button" className="btn-c btn-outline-warning mr-1 mb-2">Warning</button>
                                            <button type="button" className="btn-c btn-outline-danger mr-1 mb-2">Danger</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Outline Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Bankapp Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Bankapp Buttons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <button type="button" className="btn-c btn-shadow mr-1 mb-2">Shadow</button>
                                            <button type="button" className="btn-c btn-gradient-01 mr-1 mb-2">Gradient 01</button>
                                            <button type="button" className="btn-c btn-gradient-02 mr-1 mb-2">Gradient 02</button>
                                            <button type="button" className="btn-c btn-gradient-03 mr-1 mb-2">Gradient 03</button>
                                            <button type="button" className="btn-c btn-gradient-04 mr-1 mb-2">Gradient 04</button>
                                            <button type="button" className="btn-c btn-gradient-05 mr-1 mb-2">Gradient 05</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Bankapp Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Square Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Square Buttons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <button type="button" className="btn-c btn-primary btn-square mr-1 mb-2">Primary</button>
                                            <button type="button" className="btn-c btn-secondary btn-square mr-1 mb-2">Secondary</button>
                                            <button type="button" className="btn-c btn-success btn-square mr-1 mb-2">Success</button>
                                            <button type="button" className="btn-c btn-info btn-square mr-1 mb-2">Info</button>
                                            <button type="button" className="btn-c btn-warning btn-square mr-1 mb-2">Warning</button>
                                            <button type="button" className="btn-c btn-danger btn-square mr-1 mb-2">Danger</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Square Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Buttons Group */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Buttons Group</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <div className="btn-group" role="group" aria-label="Buttons Group">
                                                <button type="button" className="btn-c btn-primary mb-2">Primary</button>
                                                <button type="button" className="btn-c btn-secondary mb-2">Secondary</button>
                                                <button type="button" className="btn-c btn-success mb-2">Success</button>
                                                <button type="button" className="btn-c btn-info mb-2">Info</button>
                                                <button type="button" className="btn-c btn-warning mb-2">Warning</button>
                                                <button type="button" className="btn-c btn-danger mb-2">Danger</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Buttons Group */}
                            </div>
                            <div className="col-xl-6">
                                {/* Buttons With Icons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>With Icons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <button type="button" className="btn-c btn-primary mr-1 mb-2"><i className="la la-pencil" />Primary</button>
                                            <button type="button" className="btn-c btn-secondary mr-1 mb-2"><i className="la la-rocket" />Secondary</button>
                                            <button type="button" className="btn-c btn-success mr-1 mb-2"><i className="la la-check" />Success</button>
                                            <button type="button" className="btn-c btn-info mr-1 mb-2"><i className="la la-question-circle" />Info</button>
                                            <button type="button" className="btn-c btn-warning mr-1 mb-2"><i className="la la-exclamation-triangle" />Warning</button>
                                            <button type="button" className="btn-c btn-danger mr-1 mb-2"><i className="la la-ban" />Danger</button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Buttons With Icons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Dropdown Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Dropdown Buttons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="form-group">
                                            <div className="btn-group mr-1 mb-2">
                                                <button type="button" className="btn-c btn-primary">Primary</button>
                                                <Link to={'/components-buttons'} className="btn-c btn-primary dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="la la-angle-down mr-0" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Another action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Something else here</Link>
                                                    <div className="dropdown-divider" />
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Separated link</Link>
                                                </div>
                                            </div>
                                            <div className="btn-group mr-1 mb-2">
                                                <button type="button" className="btn-c btn-secondary">Secondary</button>
                                                <Link to={'/components-buttons'} className="btn-c btn-secondary dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="la la-angle-down mr-0" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Another action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Something else here</Link>
                                                    <div className="dropdown-divider" />
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Separated link</Link>
                                                </div>
                                            </div>
                                            <div className="btn-group mr-1 mb-2">
                                                <button type="button" className="btn-c btn-success">Success</button>
                                                <Link to={'/components-buttons'} className="btn-c btn-success dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="la la-angle-down mr-0" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Another action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Something else here</Link>
                                                    <div className="dropdown-divider" />
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Separated link</Link>
                                                </div>
                                            </div>
                                            <div className="btn-group mr-1 mb-2">
                                                <button type="button" className="btn-c btn-info">Info</button>
                                                <Link to={'/components-buttons'} className="btn-c btn-info dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="la la-angle-down mr-0" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Another action</Link>
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Something else here</Link>
                                                    <div className="dropdown-divider" />
                                                    <Link className="dropdown-item" to={'/components-buttons'}>Separated link</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Dropdown Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Block Buttons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Block Buttons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <button type="button" className="btn-c btn-primary btn-block mb-2">Primary</button>
                                            </div>
                                            <div className="col-xl-6">
                                                <button type="button" className="btn-c btn-shadow btn-block mb-2">Shadow</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Block Buttons */}
                            </div>
                            <div className="col-xl-6">
                                {/* Buttons Sizes */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Buttons Size</h4>
                                    </div>
                                    <div className="widget-body">
                                        <button type="button" className="btn-c btn-primary btn-lg mr-1 mb-2">Large Button</button>
                                        <button type="button" className="btn-c btn-success mr-1 mb-2">Medium Button</button>
                                        <button type="button" className="btn-c btn-warning btn-sm mr-1 mb-2">Small Button</button>
                                    </div>
                                </div>
                                {/* End Buttons Sizes */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </Section>
        );
    }
}

export default ComponentsButtons;