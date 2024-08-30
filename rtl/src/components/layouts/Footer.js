import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer-area'>
          <div
            className='footer-top text-center'
            style={{ backgroundImage: "url(assets/img/bg/7.png)" }}
          >
            <div className='container'>
              <p>
                حقوق الطبع والنشر © Bankapp 2023. جميع الحقوق محفوظة. صممه
                S7template
              </p>
            </div>
          </div>
          <div className='container'>
            <div className='footer-bottom text-center'>
              <ul>
                <li>
                  <Link className='home-clicked' to={"/"}>
                    <i className='fa fa-home' />
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/all-pages"}>
                    <i className='fa fa-file-text' />
                    <p>Pages</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/components"}>
                    <i className='fa fa-plus' />
                    <p>Components</p>
                  </Link>
                </li>
                <li>
                  <div className='menu-bar'>
                    <i className='fa fa-bars' />
                    <p>Menu</p>
                  </div>
                </li>
                <li>
                  <Link to={"/carts"}>
                    <i className='fa fa-home' />
                    <p>My Card</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className='back-to-top'>
          <span className='back-top'>
            <i className='fa fa-angle-up' />
          </span>
        </div>
      </>
    );
  }
}

export default Footer;
