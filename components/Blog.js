import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <Section allNotification={false} searchPopup={true} title={'Blog'}>
                <div className="blog-area pd-top-36 pb-2 mg-top-40">
                    <div className="container">
                        <div className="section-title">
                            <h3 className="title">Recent Posts</h3>
                            <Link to={'/blog'}>View All</Link>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/1.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/3.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/2.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/4.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/5.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="single-blog">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/blog/6.png'} alt="img" />
                                    </div>
                                    <div className="details">
                                        <Link to={'/blog-details'}>How to save your money in own business firm.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btn-wrap mg-top-40 mg-bottom-40">
                    <div className="container">
                        <Link className="btn-large btn-blue w-100" to={'/blog'}>Load More</Link>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Blog;