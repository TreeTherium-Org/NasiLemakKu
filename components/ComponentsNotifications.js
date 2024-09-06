import React, {Component} from "react";
import Section from "./layouts/Section";
import {Alert} from "../alertServices";

class ComponentsNotifications extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Notification'}>
                <div className="container-inner mg-top-30">
                    <div className="container-fluid">
                        <div className="row flex-row">
                            <div className="col-xl-6">
                                {/* Basic Example */}
                                <div className="widget has-shadow">
                                    <div className="widget-body">
                                        <div className="section-title mt-3 mb-3">
                                            <h4>Layouts:</h4>
                                        </div>
                                        <p><code>notification</code> , <code>alert</code> , <code>success</code> , <code>warning</code> , <code>error</code> , <code>info/informations</code> , <code>confirm</code> , <code>delete</code></p>
                                        <div className="section-title mt-4 mb-3">
                                            <h4>Positions:</h4>
                                        </div>
                                        <p><code>top-full-width</code> , <code>top-left</code> , <code>top-right</code> , <code>bottom-full-width</code> , <code>bottom-left</code> , <code>bottom-right</code></p>
                                        <div className="section-title mt-5 mb-3">
                                            <h4>Directions (Top)</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-shadow mr-2 mb-3" onClick={() => Alert.success({title: 'hello there'})}>Full Width</button>
                                        <button type="button" className="btn-c btn-shadow mr-2 mb-3" onClick={() => Alert.success({title: 'hello there', position: 'toast-top-left'})}>Top Left</button>
                                        <button type="button" className="btn-c btn-shadow mr-2 mb-3" onClick={() => Alert.success({title: 'hello there', position: 'toast-top-right'})}>Top Right</button>
                                        <div className="section-title mt-3 mb-3">
                                            <h4>Directions (Bottom)</h4>
                                        </div>
                                        <button type="button" className="btn-c btn-shadow mr-2 mb-3" onClick={() => Alert.success({title: 'hello there', position: 'toast-bottom-full-width'})}>Full Width</button>
                                        <button type="button" className="btn-c btn-shadow mr-2 mb-3" onClick={() => Alert.success({title: 'hello there', position: 'toast-bottom-left'})}>Bottom Left</button>
                                        <button type="button" className="btn-c btn-shadow mr-2 mb-3" onClick={() => Alert.success({title: 'hello there', position: 'toast-bottom-right'})}>Bottom Right</button>
                                    </div>
                                </div>
                                {/* End Basic Example */}
                            </div>
                            <div className="col-xl-6">
                                {/* Advanced Example */}
                                <div className="widget has-shadow">
                                    <div className="widget-body">
                                        <div className="section-title mt-5 mb-3">
                                            <h4>Layouts:</h4>
                                        </div>
                                        <button type="button" className="d-block btn-c btn-success mr-2 mb-3" onClick={() => Alert.success({title: 'hello there', position: 'toast-top-right'})}>Success</button>
                                        <button type="button" className="d-block btn-c btn-warning mr-2 mb-3" onClick={() => Alert.warning({title: 'hello there', position: 'toast-top-right'})}>Warning</button>
                                        <button type="button" className="d-block btn-c btn-danger mr-2 mb-3" onClick={() => Alert.error({title: 'hello there', position: 'toast-top-right'})}>Error</button>
                                        <button type="button" className="d-block btn-c btn-info mr-2 mb-3" onClick={() => Alert.info({title: 'hello there', position: 'toast-top-right'})}>Informations</button>
                                        <button type="button" className="d-block btn-c btn-primary mr-2 mb-3" onClick={() => Alert.confirm({action: () => console.log('confirmed')})}>Confirm</button>
                                        <button type="button" className="d-block btn-c btn-danger mr-2 mb-3" onClick={() => Alert.delete({action: () => console.log('deleted')})}>Delete</button>
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

export default ComponentsNotifications;