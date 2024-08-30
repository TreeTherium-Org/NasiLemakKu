import React, {Component} from "react";
import Section from "./layouts/Section";

class ComponentsTooltip extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Tooltip'}>
                <div className="container-inner mg-top-30">
                    <div className="container-fluid">
                        <div className="row flex-row">
                            <div className="col-xl-6">
                                {/* Basic Example */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Basic Example</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="section-title mb-5">
                                            <h4>Basic Tooltip</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip Title">Click Me</button>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Directions</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-primary mr-2 mb-3" data-toggle="tooltip" data-placement="top" title="Tooltip Top">Tooltip On Top</button>
                                        <button type="button" className="btn-c btn-info mr-2 mb-3" data-toggle="tooltip" data-placement="right" title="Tooltip Right">Tooltip On Right</button>
                                        <button type="button" className="btn-c btn-success mr-2 mb-3" data-toggle="tooltip" data-placement="bottom" title="Tooltip Bottom">Tooltip On Bottom</button>
                                        <button type="button" className="btn-c btn-warning mb-3" data-toggle="tooltip" data-placement="left" title="Tooltip Left">Tooltip On Left</button>
                                        <p>Four options are available: top, right, bottom, and left aligned.</p>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>Dismiss on next click</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-danger" data-toggle="tooltip" data-placement="top" data-trigger="focus" title="Now click anywhere">Dissmissible Tooltip</button>
                                    </div>
                                </div>
                                {/* End Basic Example */}
                            </div>
                            <div className="col-xl-6">
                                {/* Advanced Example */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Advanced Example</h4>
                                    </div>
                                    <div className="widget-body">
                                        <div className="section-title mb-5">
                                            <h4>Tooltip On Click</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-primary mr-2 mb-3" data-toggle="tooltip" data-placement="top" data-trigger="click" title="Tooltip Title">Tooltip Top</button>
                                        <button type="button" className="btn-c btn-info mr-2 mb-3" data-toggle="tooltip" data-placement="right" data-trigger="click" title="Tooltip Title">Tooltip Right</button>
                                        <button type="button" className="btn-c btn-success mr-2 mb-3" data-toggle="tooltip" data-placement="bottom" data-trigger="click" title="Tooltip Title"> Tooltip Bottom</button>
                                        <button type="button" className="btn-c btn-warning mb-3" data-toggle="tooltip" data-placement="left" data-trigger="click" title="Tooltip Title">Tooltip Left</button>
                                        <p>Use <code>data-trigger="click"</code> for click trigger.</p>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>With Delay</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-danger mr-2 mb-3" data-toggle="tooltip" data-placement="top" data-trigger="click" title="Tooltip Title" data-delay="800">Click Me</button>
                                        <p>Use <code>data-delay="value"</code> in milliseconds.</p>
                                        <div className="section-title mt-5 mb-5">
                                            <h4>With HTML Content</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-gradient-01 mb-3" data-toggle="tooltip" data-placement="top" data-original-title="This is <b>HTML</b> <u>tooltip</u>" data-html="true">HTML Tooltip</button>
                                    </div>
                                </div>
                                {/* End Advanced Example */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </Section>
        );
    }
}

export default ComponentsTooltip;