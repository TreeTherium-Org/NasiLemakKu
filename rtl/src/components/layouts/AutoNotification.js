import React, {Component} from "react";
import {Link} from "react-router-dom";

class AutoNotification extends Component {
    render() {
        return (
            <div className="modal fade fade-modal-nitification" id="overlay">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="ba-bill-pay-inner">
                            <div className="ba-single-bill-pay">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/icon/6.png'} alt="img" />
                                </div>
                                <div className="details">
                                    <h5>تلقي الأموال عن طريق آرون فينكن</h5>
                                    <p>لقد تلقيت دفعة من Aorn Fice.</p>
                                </div>
                            </div>
                            <div className="amount-inner">
                                <h5><i className="fa fa-long-arrow-left" />$169</h5>
                                <Link className="btn btn-blue" to={'/notification'}>اقرأ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutoNotification;