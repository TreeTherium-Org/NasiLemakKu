import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AutoNotification from "./AutoNotification";

class Section extends Component {
    render() {
        return (
            <>
                <Navbar />
                {this.props.autoNotification ? <AutoNotification /> : ''}
                <Header title={this.props.title} searchPopup={this.props.searchPopup} />
                {this.props.children}
                <Footer />
            </>
        );
    }
}

export default Section;