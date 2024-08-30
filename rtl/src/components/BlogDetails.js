import React, {Component} from "react";
import Section from "./layouts/Section";

class BlogDetails extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Blog Details'}>
                <div className="blog-details-area pd-top-40 mg-bottom-40">
                    <div className="container">
                        <div className="blog-details-inner">
                            <div className="section-title">
                                <h3 className="title">Blog Details</h3>
                            </div>
                            <div className="thumb">
                                <img src={process.env.PUBLIC_URL + '/assets/img/blog/7.png'} alt="img" />
                            </div>
                            <div className="details">
                                <h6>How to save your money in own business firm.</h6>
                                <p>Folore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <p>Folore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                <p>Folore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default BlogDetails;