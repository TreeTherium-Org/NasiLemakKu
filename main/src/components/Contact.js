import React, {Component} from "react";
import Section from "./layouts/Section";

class Contact extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Contact'}>
                <div className="transaction-area pd-top-36 mg-bottom-35">
                    <div className="container">
                        <form action="#" className="contact-form-wrap">
                            <ul>
                                <li><input type="text" placeholder="Your Name" /></li>
                                <li><input type="text" placeholder="Mail Address" /></li>
                                <li><input type="text" placeholder="Phone Number" /></li>
                                <li><input type="text" placeholder="Type Of Message" /></li>
                            </ul>
                            <button type="button" className="btn-large btn-purple w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Contact;