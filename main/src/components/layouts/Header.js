import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {search: false};
    }

    render() {
        const searchPopup = (
            <>
                <div className={this.state.search ? 'body-overlay active' : 'body-overlay'} id="body-overlay" onClick={() => this.setState({search: false})} />
                <div className={this.state.search ? 'search-popup active' : 'search-popup'} id="search-popup">
                    <form className="search-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search....." />
                        </div>
                        <button type="button" className="submit-btn"><i className="fa fa-search" /></button>
                    </form>
                </div>
            </>
        );

        return (
            <>
                {this.props.searchPopup ? searchPopup : ''}
                <div className="header-area" style={{backgroundImage: "url(assets/img/bg/1.png)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <Link className="menu-back-page home-clicked" to={'/'}>
                                    <i className="fa fa-angle-left" />
                                </Link>
                            </div>
                            <div className="col-sm-4 col-6 text-center">
                                <div className="page-name">{this.props.title}</div>
                            </div>
                            <div className="col-sm-4 col-3 text-right">
                                {this.props.searchPopup ? (
                                    <div className="search header-search" onClick={() => this.setState({search: true})}>
                                        <i className="fa fa-search" />
                                    </div>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Title */}
                <div className="page-title mg-top-50">
                    <div className="container">
                        <Link className="float-left home-clicked" to={'/'}>Home</Link>
                        <span className="float-right">{this.props.title}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;