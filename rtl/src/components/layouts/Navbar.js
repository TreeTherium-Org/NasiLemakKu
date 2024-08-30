import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="ba-navbar">
                <div className="ba-navbar-user">
                    <div className="menu-close">
                        <i className="la la-times" />
                    </div>
                    <div className="thumb">
                        <img src={process.env.PUBLIC_URL + '/assets/img/user.png'} alt="user" />
                    </div>
                    <div className="details">
                        <h5>كيلاكس رادورونتو </h5>
                        <p>ID: 99883323</p>
                    </div>
                </div>
                <div className="ba-add-balance-title">
                    <h5>أضف رصيدًا</h5>
                    <p>$458786.00</p>
                </div>
                <div className="ba-add-balance-title style-two">
                    <h5>الإيداع</h5>
                    <i className="fa fa-plus" />
                </div>
                <div className="ba-main-menu">
                    <h5>القائمة</h5>
                    <ul>
                        <li><Link to={'/'}>عرض البنك</Link></li>
                        <li><Link to={'/all-pages'}>الصفحات</Link></li>
                        <li><Link to={'/components'}>مكونات</Link></li>
                        <li><Link to={'/carts'}>سلة التسوق</Link></li>
                        <li><Link to={'/user-setting'}>الإعداد</Link></li>
                        <li><Link to={'/notification'}>الإخطار</Link></li>
                        <li><Link to={'/signup'}>تسجيل الخروج</Link></li>
                    </ul>
                    <Link className="btn btn-purple" to={'/user-setting'}>مشاهدة الملف الشخصي</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;