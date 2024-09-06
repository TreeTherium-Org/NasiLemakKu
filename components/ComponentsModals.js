import React, {Component} from "react";
import Section from "./layouts/Section";

class ComponentsModals extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Modal'}>
                <div className="container-inner mg-top-40">
                    <div className="container-fluid">
                        <div className="row flex-row">
                            <div className="col-12">
                                {/* Modal */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Modals Example</h4>
                                    </div>
                                    <div className="widget-body">
                                        {/* Begin Basic Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Basic Modal</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-shadow" data-toggle="modal" data-target="#basic-modal">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Basic Modal */}
                                        {/* Begin Scrolling Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Modal Scrolling Long Content</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-primary" data-toggle="modal" data-target="#scroll-modal">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Scrolling Modal */}
                                        {/* Begin Centered Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Vertically Centered</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-secondary" data-toggle="modal" data-target="#modal-centered">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Centered Modal */}
                                        {/* Begin Small Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Small Modal</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-info" data-toggle="modal" data-target="#modal-small">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Small Modal */}
                                        {/* Begin Large Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Large Modal</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-danger" data-toggle="modal" data-target="#modal-large">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Large Modal */}
                                        {/* Begin Success Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Modal Validation Form</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-success" data-toggle="modal" data-target="#success-modal">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Success Modal */}
                                        {/* Begin Auto Close Modal */}
                                        <div className="row">
                                            <div className="col-xl-4 d-flex align-items-center mb-3">
                                                <p className="text-dark mb-0">Modal Auto Close</p>
                                            </div>
                                            <div className="col-xl-8 d-flex align-items-center mb-3">
                                                <button type="button" className="btn-c btn-gradient-01" data-toggle="modal" data-target="#delay-modal">Launch Modal</button>
                                            </div>
                                        </div>
                                        {/* End Auto Close Modal */}
                                    </div>
                                </div>
                                {/* End Modal */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
                {/* components modal End */}
                {/* Begin Basic Modal */}
                <div id="basic-modal" className="modal modal-top fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Title</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Donec non lectus nec est porta eleifend. Morbi ut dictum augue, feugiat condimentum est. Pellentesque tincidunt justo nec aliquet tincidunt. Integer dapibus tellus non neque pulvinar mollis. Maecenas dictum laoreet diam, non convallis lorem sagittis nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc venenatis lacus arcu, nec ultricies dui vehicula vitae.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-shadow" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Basic Modal */}
                {/* Begin Scrolling Modal */}
                <div id="scroll-modal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Title</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-shadow" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Scrolling Modal */}
                {/* Begin Centered Modal */}
                <div id="modal-centered" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Title</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Donec non lectus nec est porta eleifend. Morbi ut dictum augue, feugiat condimentum est. Pellentesque tincidunt justo nec aliquet tincidunt. Integer dapibus tellus non neque pulvinar mollis. Maecenas dictum laoreet diam, non convallis lorem sagittis nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc venenatis lacus arcu, nec ultricies dui vehicula vitae.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-shadow" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Centered Modal */}
                {/* Begin Small Modal */}
                <div id="modal-small" className="modal fade">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Title</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Donec non lectus nec est porta eleifend. Morbi ut dictum augue, feugiat condimentum est. Pellentesque tincidunt justo nec aliquet tincidunt. Integer dapibus tellus non neque pulvinar mollis. Maecenas dictum laoreet diam, non convallis lorem sagittis nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc venenatis lacus arcu, nec ultricies dui vehicula vitae. </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-shadow" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Small Modal */}
                {/* Begin Large Modal */}
                <div id="modal-large" className="modal fade">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Title</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Donec non lectus nec est porta eleifend. Morbi ut dictum augue, feugiat condimentum est. Pellentesque tincidunt justo nec aliquet tincidunt. Integer dapibus tellus non neque pulvinar mollis. Maecenas dictum laoreet diam, non convallis lorem sagittis nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc venenatis lacus arcu, nec ultricies dui vehicula vitae.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-shadow" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Large Modal */}
                {/* Begin Success Modal */}
                <div id="success-modal" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <div className="sa-icon sa-success animate" style={{display: 'block'}}>
                                    <span className="sa-line sa-tip animateSuccessTip" />
                                    <span className="sa-line sa-long animateSuccessLong" />
                                    <div className="sa-placeholder" />
                                    <div className="sa-fix" />
                                </div>
                                <div className="section-title mt-5 mb-2">
                                    <h2 className="text-gradient-02">Thank you!</h2>
                                </div>
                                <p className="mb-5">The form was submitted successfully</p>
                                <button type="button" className="btn btn-shadow mb-3" data-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Success Modal */}
                {/* Begin Auto Close Modal */}
                <div id="delay-modal" className="modal fade">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <div className="sa-icon sa-success animate" style={{display: 'block'}}>
                                    <span className="sa-line sa-tip animateSuccessTip" />
                                    <span className="sa-line sa-long animateSuccessLong" />
                                    <div className="sa-placeholder" />
                                    <div className="sa-fix" />
                                </div>
                                <div className="section-title mt-5 mb-2">
                                    <h2 className="text-gradient-01">Hello!</h2>
                                </div>
                                <p className="mb-5">And GoodBye :)</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Auto Close Modal */}
            </Section>
        );
    }
}

export default ComponentsModals;