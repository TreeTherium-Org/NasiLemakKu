import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Components extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'All Components'}>
                <div className="allpage-area mg-bottom-35">
                    <div className="container">
                        <div className="ba-all-page-inner">
                            <h5>All Components</h5>
                            <ul>
                                <li><Link to={'components-accordion'}>Accordion</Link></li>
                                <li><Link to={'components-alerts'}>Alerts</Link></li>
                                <li><Link to={'components-buttons'}>Button</Link></li>
                                <li><Link to={'components-modal'}>Modal</Link></li>
                                <li><Link to={'components-notifications'}>Notifications</Link></li>
                                <li><Link to={'components-progress'}>Progress</Link></li>
                                <li><Link to={'components-tabs'}>Tabs</Link></li>
                                {/*<li><Link to={'components-tooltip'}>Tooltip</Link></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Components;