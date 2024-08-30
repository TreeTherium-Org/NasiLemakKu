import React, {Component} from "react";
import Section from "./layouts/Section";

class ComponentsAccordion extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Accordion'}>
                <div className="container-inner mg-top-40">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6">
                                {/* Begin Basic Accordion */}
                                <div id="accordion" className="accordion">
                                    {/* Begin Widget */}
                                    <div className="widget has-shadow">
                                        <div className="widget-header bordered no-actions d-flex align-items-center">
                                            <h4>Basic Accordion</h4>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#collapseOne">
                                            <div className="card-title">Lorem ipsum dolor sit amet?</div>
                                        </a>
                                        <div id="collapseOne" className="card-body collapse show pt-0" data-parent="#accordion">
                                            <p>Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper. Curabitur tempor, orci eget laoreet lacinia, urna orci facilisis massa, nec convallis arcu lacus eu mi. Aliquam semper ante eget venenatis pellentesque. Sed suscipit sem id ligula sollicitudin pulvinar. Donec porta enim nec dignissim commodo. Mauris ac elit diam. In vel mattis massa. Donec id mi blandit diam fringilla fringilla vitae id elit.</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#collapseTwo">
                                            <div className="card-title">Nam fermentum mauris at lacus?</div>
                                        </a>
                                        <div id="collapseTwo" className="card-body collapse pt-0" data-parent="#accordion">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue </p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#collapseThree">
                                            <div className="card-title">Aenean feugiat interdum iaculis?</div>
                                        </a>
                                        <div id="collapseThree" className="card-body collapse pt-0" data-parent="#accordion">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue. Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper </p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#collapseFour">
                                            <div className="card-title">Curabitur eget lacinia ligula vivamus?</div>
                                        </a>
                                        <div id="collapseFour" className="card-body collapse pt-0" data-parent="#accordion">
                                            <p> Nunc augue neque, congue a auctor at, tincidunt vel nulla. Phasellus justo urna, laoreet sit amet commodo sed, volutpat vitae eros. Praesent eu tristique diam, eu elementum ligula. Sed ac lectus non neque tristique elementum a et nisi. Donec pellentesque volutpat nisl, id commodo lacus posuere eget. </p>
                                        </div>
                                    </div>
                                    {/* End Widget */}
                                </div>
                                {/* End Basic Accordion */}
                            </div>
                            <div className="col-xl-6">
                                {/* Begin Accordion Right */}
                                <div id="accordion-right" className="accordion">
                                    {/* Begin Widget */}
                                    <div className="widget has-shadow">
                                        <div className="widget-header bordered no-actions d-flex align-items-center">
                                            <h4>Accordion Right Aligned</h4>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#RightcollapseOne">
                                            <div className="card-title text-right w-100">Lorem ipsum dolor sit amet?</div>
                                        </a>
                                        <div id="RightcollapseOne" className="card-body collapse show pt-0 text-right" data-parent="#accordion-right">
                                            <p>Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper. Curabitur tempor, orci eget laoreet lacinia, urna orci facilisis massa, nec convallis arcu lacus eu mi. Aliquam semper ante eget venenatis pellentesque. Sed suscipit sem id ligula sollicitudin pulvinar. Donec porta enim nec dignissim commodo. Mauris ac elit diam. In vel mattis massa. Donec id mi blandit diam fringilla fringilla vitae id elit. </p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#RightcollapseTwo">
                                            <div className="card-title text-right w-100">Nam fermentum mauris at lacus?</div>
                                        </a>
                                        <div id="RightcollapseTwo" className="card-body collapse pt-0 text-right" data-parent="#accordion-right">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#RightcollapseThree">
                                            <div className="card-title text-right w-100">Aenean feugiat interdum iaculis?</div>
                                        </a>
                                        <div id="RightcollapseThree" className="card-body collapse pt-0 text-right" data-parent="#accordion-right">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue. Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#RightcollapseFour">
                                            <div className="card-title text-right w-100">Curabitur eget lacinia ligula vivamus?</div>
                                        </a>
                                        <div id="RightcollapseFour" className="card-body collapse pt-0 text-right" data-parent="#accordion-right">
                                            <p>Nunc augue neque, congue a auctor at, tincidunt vel nulla. Phasellus justo urna, laoreet sit amet commodo sed, volutpat vitae eros. Praesent eu tristique diam, eu elementum ligula. Sed ac lectus non neque tristique elementum a et nisi. Donec pellentesque volutpat nisl, id commodo lacus posuere eget.</p>
                                        </div>
                                    </div>
                                    {/* End Widget */}
                                </div>
                                {/* End Accordion Right */}
                            </div>
                            <div className="col-xl-6">
                                {/* Begin Icons 01 */}
                                <div id="accordion-icon-left" className="accordion-icon icon-01">
                                    {/* Begin Widget */}
                                    <div className="widget has-shadow">
                                        <div className="widget-header bordered no-actions d-flex align-items-center">
                                            <h4>Accordion Icons 01</h4>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconLeftCollapseOne">
                                            <div className="card-title">Lorem ipsum dolor sit amet?</div>
                                        </a>
                                        <div id="IconLeftCollapseOne" className="card-body collapse pt-0" data-parent="#accordion-icon-left">
                                            <p>Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper. Curabitur tempor, orci eget laoreet lacinia, urna orci facilisis massa, nec convallis arcu lacus eu mi. Aliquam semper ante eget venenatis pellentesque. Sed suscipit sem id ligula sollicitudin pulvinar. Donec porta enim nec dignissim commodo. Mauris ac elit diam. In vel mattis massa. Donec id mi blandit diam fringilla fringilla vitae id elit.</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconLeftCollapseTwo">
                                            <div className="card-title">Nam fermentum mauris at lacus?</div>
                                        </a>
                                        <div id="IconLeftCollapseTwo" className="card-body collapse pt-0" data-parent="#accordion-icon-left">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconLeftCollapseThree">
                                            <div className="card-title">Aenean feugiat interdum iaculis?</div>
                                        </a>
                                        <div id="IconLeftCollapseThree" className="card-body collapse pt-0" data-parent="#accordion-icon-left">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacustempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue. Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconLeftCollapseFour">
                                            <div className="card-title">Curabitur eget lacinia ligula vivamus?</div>
                                        </a>
                                        <div id="IconLeftCollapseFour" className="card-body collapse pt-0" data-parent="#accordion-icon-left">
                                            <p> Nunc augue neque, congue a auctor at, tincidunt vel nulla. Phasellus justo urna, laoreet sit amet commodo sed, volutpat vitae eros. Praesent eu tristique diam, eu elementum ligula. Sed ac lectus non neque tristique elementum a et nisi. Donec pellentesque volutpat nisl, id commodo lacus posuere eget.</p>
                                        </div>
                                    </div>
                                    {/* End Widget */}
                                </div>
                                {/* End Icons 01 */}
                            </div>
                            <div className="col-xl-6">
                                {/* Begin Icons 02 */}
                                <div id="accordion-icon-right" className="accordion-icon icon-02">
                                    {/* Begin Widget */}
                                    <div className="widget has-shadow">
                                        <div className="widget-header bordered no-actions d-flex align-items-center">
                                            <h4>Accordion Icons 02</h4>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseOne">
                                            <div className="card-title w-100">Lorem ipsum dolor sit amet?</div>
                                        </a>
                                        <div id="IconRightCollapseOne" className="card-body collapse pt-0" data-parent="#accordion-icon-right">
                                            <p> Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper. Curabitur tempor, orci eget laoreet lacinia, urna orci facilisis massa, nec convallis arcu lacus eu mi. Aliquam semper ante eget venenatis pellentesque. Sed suscipit sem id ligula sollicitudin pulvinar. Donec porta enim nec dignissim commodo. Mauris ac elit diam. In vel mattis massa. Donec id mi blandit diam fringilla fringilla vitae id elit. </p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseTwo">
                                            <div className="card-title w-100">Nam fermentum mauris at lacus?</div>
                                        </a>
                                        <div id="IconRightCollapseTwo" className="card-body collapse pt-0" data-parent="#accordion-icon-right">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseThree">
                                            <div className="card-title w-100">Aenean feugiat interdum iaculis?</div>
                                        </a>
                                        <div id="IconRightCollapseThree" className="card-body collapse pt-0" data-parent="#accordion-icon-right">
                                            <p>Etiam ut eleifend eros. Morbi in lectus ut nulla dapibus ornare. Praesent et sapien ac tortor consectetur bibendum.Nam nec sem at lacus tempor porta. Donec ultricies ante sed urna cursus, eget vestibulum libero congue. Praesent nibh nulla, vehicula vitae metus nec, lobortis commodo lorem. Nulla pulvinar vestibulum semper</p>
                                        </div>
                                        <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseFour">
                                            <div className="card-title w-100">Curabitur eget lacinia ligula vivamus?</div>
                                        </a>
                                        <div id="IconRightCollapseFour" className="card-body collapse pt-0" data-parent="#accordion-icon-right">
                                            <p>Nunc augue neque, congue a auctor at, tincidunt vel nulla. Phasellus justo urna, laoreet sit amet commodo sed, volutpat vitae eros. Praesent eu tristique diam, eu elementum ligula. Sed ac lectus non neque tristique elementum a et nisi. Donec pellentesque volutpat nisl, id commodo lacus posuere eget.</p>
                                        </div>
                                    </div>
                                    {/* End Widget */}
                                </div>
                                {/* End Icons 02 */}
                            </div>
                        </div>
                        {/* End Row */}
                    </div>
                </div>
            </Section>
        );
    }
}

export default ComponentsAccordion;