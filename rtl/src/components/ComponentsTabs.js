import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class ComponentsTabs extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Tab'}>
                <div className="container-inner mg-top-30">
                    <div className="container-fluid">
                        <div className="row flex-row">
                            <div className="col-xl-6">
                                {/* Basic Tabs */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Basic Tabs</h4>
                                    </div>
                                    <div className="widget-body sliding-tabs">
                                        <ul className="nav nav-tabs" id="example-one" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="base-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Tab1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="base-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="base-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link disabled" to={'/components-tab'}>Disabled</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-3">
                                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="base-tab-1">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="base-tab-2">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="base-tab-3">
                                                Phasellus elementum ultricies venenatis. Vivamus eget semper ligula. Suspendisse efficitur est ac nisl sollicitudin, ac venenatis libero faucibus. Curabitur dictum pulvinar dui, nec posuere sapien condimentum in. Sed ornare enim quis enim pretium, tempus maximus dolor scelerisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Basic Tabs */}
                            </div>
                            <div className="col-xl-6">
                                {/* Tabs Dropdown */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Tabs Dropdown</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="drop-tab-1" data-toggle="tab" href="#d-tab-1" role="tab" aria-selected="true">Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="drop-tab-2" data-toggle="tab" href="#d-tab-2" role="tab" aria-selected="false">Tab 2</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to={'/components-tab'}>Dropdown
                                                    <i className="ion-android-arrow-dropdown" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" id="nav-dropdown1-tab" href="#nav-dropdown1" role="tab" data-toggle="tab">Dropdown 1</a>
                                                    <a className="dropdown-item" id="nav-dropdown2-tab" href="#nav-dropdown2" role="tab" data-toggle="tab">Dropdown 2</a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-3">
                                            <div className="tab-pane fade show active" id="d-tab-1" role="tabpanel" aria-labelledby="drop-tab-1">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="d-tab-2" role="tabpanel" aria-labelledby="drop-tab-2">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="nav-dropdown1" role="tabpanel" aria-labelledby="nav-dropdown1-tab">
                                                Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore.
                                            </div>
                                            <div className="tab-pane fade" id="nav-dropdown2" role="tabpanel" aria-labelledby="nav-dropdown2-tab">
                                                Proident incididunt esse qui ea nisi ullamco aliquip nostrud velit sint duis. Aute culpa aute cillum sit consectetur mollit minim non reprehenderit tempor. Occaecat amet consectetur aute esse ad ullamco ad commodo mollit reprehenderit esse in consequat.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Tabs Dropdown */}
                            </div>
                            <div className="col-xl-6">
                                {/* Basic Tabs */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Tabs With Icons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="i-base-tab-1" data-toggle="tab" href="#i-tab-1" role="tab" aria-controls="i-tab-1" aria-selected="true"><i className="ion-at mr-2"></i>Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="i-base-tab-2" data-toggle="tab" href="#i-tab-2" role="tab" aria-controls="i-tab-2" aria-selected="false"><i className="ion-clipboard mr-2"></i>Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="i-base-tab-3" data-toggle="tab" href="#i-tab-3" role="tab" aria-controls="i-tab-3" aria-selected="false"><i className="ion-flash mr-2"></i>Tab 3</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/components-tab'} className="nav-link disabled"><i className="ion-edit mr-2" />Disabled</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-3">
                                            <div className="tab-pane fade show active" id="i-tab-1" role="tabpanel" aria-labelledby="i-base-tab-1">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="i-tab-2" role="tabpanel" aria-labelledby="i-base-tab-2">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="i-tab-3" role="tabpanel" aria-labelledby="i-base-tab-3">
                                                Phasellus elementum ultricies venenatis. Vivamus eget semper ligula. Suspendisse efficitur est ac nisl sollicitudin, ac venenatis libero faucibus. Curabitur dictum pulvinar dui, nec posuere sapien condimentum in. Sed ornare enim quis enim pretium, tempus maximus dolor scelerisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Basic Tabs */}
                            </div>
                            <div className="col-xl-6">
                                {/* Tabs Dropdown */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Dropdown With Icons</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="i-drop-tab-1" data-toggle="tab" href="#i-d-tab-1" role="tab" aria-controls="i-d-tab-1" aria-selected="true">
                                                    <i className="ion-leaf mr-2" />
                                                    Tab 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="i-drop-tab-2" data-toggle="tab" href="#i-d-tab-2" role="tab" aria-controls="i-d-tab-2" aria-selected="false">
                                                    <i className="ion-pinpoint mr-2" />
                                                    Tab 2
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to={'/components-tab'} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <i className="ion-plus-round mr-2" />
                                                    Dropdown
                                                    <i className="ion-android-arrow-dropdown" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" id="i-nav-dropdown1-tab" href="#i-nav-dropdown1" role="tab" data-toggle="tab">
                                                        <i className="ion-pricetag mr-2" />
                                                        Dropdown 1
                                                    </a>
                                                    <a className="dropdown-item" id="i-nav-dropdown2-tab" href="#i-nav-dropdown2" role="tab" data-toggle="tab">
                                                        <i className="ion-speedometer mr-2" />
                                                        Dropdown 2
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-3">
                                            <div className="tab-pane fade show active" id="i-d-tab-1" role="tabpanel" aria-labelledby="i-drop-tab-1">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="i-d-tab-2" role="tabpanel" aria-labelledby="i-drop-tab-2">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="i-nav-dropdown1" role="tabpanel" aria-labelledby="i-nav-dropdown1-tab">
                                                Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore.
                                            </div>
                                            <div className="tab-pane fade" id="i-nav-dropdown2" role="tabpanel" aria-labelledby="i-nav-dropdown2-tab">
                                                Proident incididunt esse qui ea nisi ullamco aliquip nostrud velit sint duis. Aute culpa aute cillum sit consectetur mollit minim non reprehenderit tempor. Occaecat amet consectetur aute esse ad ullamco ad commodo mollit reprehenderit esse in consequat.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Tabs Dropdown */}
                            </div>
                            <div className="col-xl-6">
                                {/* Justified Tabs */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Justified Tabs</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="nav nav-tabs nav-fill" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="just-tab-1" data-toggle="tab" href="#j-tab-1" role="tab" aria-controls="j-tab-1" aria-selected="true">Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="just-tab-2" data-toggle="tab" href="#j-tab-2" role="tab" aria-controls="j-tab-2" aria-selected="false">Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="just-tab-3" data-toggle="tab" href="#j-tab-3" role="tab" aria-controls="j-tab-3" aria-selected="false">Tab 3</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/components-tab'} className="nav-link disabled">Disabled</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-3">
                                            <div className="tab-pane fade show active" id="j-tab-1" role="tabpanel" aria-labelledby="just-tab-1">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="j-tab-2" role="tabpanel" aria-labelledby="just-tab-2">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="j-tab-3" role="tabpanel" aria-labelledby="just-tab-3">
                                                Phasellus elementum ultricies venenatis. Vivamus eget semper ligula. Suspendisse efficitur est ac nisl sollicitudin, ac venenatis libero faucibus. Curabitur dictum pulvinar dui, nec posuere sapien condimentum in. Sed ornare enim quis enim pretium, tempus maximus dolor scelerisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Justified Tabs */}
                            </div>
                            <div className="col-xl-6">
                                {/* Justified Dropdown */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Justified Dropdown</h4>
                                    </div>
                                    <div className="widget-body">
                                        <ul className="nav nav-tabs nav-fill" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="j-drop-tab-1" data-toggle="tab" href="#j-d-tab-1" role="tab" aria-controls="j-d-tab-1" aria-selected="true">Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="j-drop-tab-2" data-toggle="tab" href="#j-d-tab-2" role="tab" aria-controls="j-d-tab-2" aria-selected="false">Tab 2</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to={'/components-tab'} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown
                                                    <i className="ion-android-arrow-dropdown" />
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" id="j-nav-dropdown1-tab" href="#j-nav-dropdown1" role="tab" data-toggle="tab">Dropdown 1</a>
                                                    <a className="dropdown-item" id="j-nav-dropdown2-tab" href="#j-nav-dropdown2" role="tab" data-toggle="tab">Dropdown 2</a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-3">
                                            <div className="tab-pane fade show active" id="j-d-tab-1" role="tabpanel" aria-labelledby="j-drop-tab-1">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="j-d-tab-2" role="tabpanel" aria-labelledby="j-drop-tab-2">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at   ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="j-nav-dropdown1" role="tabpanel" aria-labelledby="j-nav-dropdown1-tab">
                                                Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore.
                                            </div>
                                            <div className="tab-pane fade" id="j-nav-dropdown2" role="tabpanel" aria-labelledby="j-nav-dropdown2-tab">
                                                Proident incididunt esse qui ea nisi ullamco aliquip nostrud velit sint duis. Aute culpa aute cillum sit consectetur mollit minim non reprehenderit tempor. Occaecat amet consectetur aute esse ad ullamco ad commodo mollit reprehenderit esse in consequat.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Justified Dropdown */}
                            </div>
                            <div className="col-xl-6">
                                {/* Vertical Tabs */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Vertical Tabs</h4>
                                    </div>
                                    <div className="widget-body p-0 d-flex align-items-center">
                                        <ul className="nav nav-tabs nav-left flex-column" role="tablist"
                                            aria-orientation="vertical">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="vert-tab-1" data-toggle="tab" href="#v-tab-1" role="tab" aria-controls="v-tab-1" aria-selected="true">Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="vert-tab-2" data-toggle="tab" href="#v-tab-2" role="tab" aria-controls="v-tab-2" aria-selected="false">Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="vert-tab-3" data-toggle="tab" href="#v-tab-3" role="tab" aria-controls="v-tab-3" aria-selected="false">Tab 3</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/components-tab'} className="nav-link disabled">Disabled</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content d-flex align-items-center">
                                            <div className="tab-pane fade show active" id="v-tab-1" role="tabpanel" aria-labelledby="vert-tab-1">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="v-tab-2" role="tabpanel" aria-labelledby="vert-tab-2">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="v-tab-3" role="tabpanel" aria-labelledby="vert-tab-3">
                                                Phasellus elementum ultricies venenatis. Vivamus eget semper ligula. Suspendisse efficitur est ac nisl sollicitudin, ac venenatis libero faucibus. Curabitur dictum pulvinar dui, nec posuere sapien condimentum in. Sed ornare enim quis enim pretium, tempus maximus dolor scelerisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Vertical Tabs */}
                            </div>
                            <div className="col-xl-6">
                                {/* Vertical Tabs Icons */}
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Vertical Tabs Icons</h4>
                                    </div>
                                    <div className="widget-body p-0 d-flex align-items-center">
                                        <ul className="nav nav-tabs nav-left flex-column" role="tablist"
                                            aria-orientation="vertical">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="i-vert-tab-1" data-toggle="tab" href="#i-v-tab-1" role="tab" aria-controls="i-v-tab-1" aria-selected="true"><i className="ion-at" /></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="i-vert-tab-2" data-toggle="tab" href="#i-v-tab-2" role="tab" aria-controls="i-v-tab-2" aria-selected="false"><i className="ion-clipboard" /></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="i-vert-tab-3" data-toggle="tab" href="#i-v-tab-3" role="tab" aria-controls="i-v-tab-3" aria-selected="false"><i className="ion-flash" /></a>
                                            </li>
                                        </ul>
                                        <div className="tab-content d-flex align-items-center">
                                            <div className="tab-pane fade show active" id="i-v-tab-1" role="tabpanel" aria-labelledby="i-vert-tab-1">
                                                Mauris venenatis rutrum augue vulputate fringilla. Aliquam euismod tempor neque. Ut urna tortor, mattis vitae gravida in, consectetur at est. Nulla eu purus et justo porttitor luctus. Cras sed urna vitae quam interdum varius vel sollicitudin lectus. Proin ullamcorper lacinia justo, eget porta odio egestas sed.
                                            </div>
                                            <div className="tab-pane fade" id="i-v-tab-2" role="tabpanel" aria-labelledby="i-vert-tab-2">
                                                Nam sagittis nec velit vitae molestie. Donec eget luctus sem. Nullam tortor tortor, consequat id lacinia nec, tempus in diam. Phasellus vel molestie purus, ac hendrerit risus. Phasellus non purus lacinia purus fringilla hendrerit. Sed pharetra odio a ante volutpat aliquam id non lacus.
                                            </div>
                                            <div className="tab-pane fade" id="i-v-tab-3" role="tabpanel" aria-labelledby="i-vert-tab-3">
                                                Phasellus elementum ultricies venenatis. Vivamus eget semper ligula. Suspendisse efficitur est ac nisl sollicitudin, ac venenatis libero faucibus. Curabitur dictum pulvinar dui, nec posuere sapien condimentum in. Sed ornare enim quis enim pretium, tempus maximus dolor scelerisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Vertical Tabs Icons */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </Section>
        );
    }
}

export default ComponentsTabs;