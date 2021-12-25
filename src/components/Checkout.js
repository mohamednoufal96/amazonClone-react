import React from "react";
import "../styles/Checkout.css";

function Checkout() {
    return (
        <div className="checkout__container">
            <div className="checkout__left">
                <img
                    className="checkout__adImage"
                    src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg"
                    alt="not found"
                />

                <h2 className="checkout__title">Your shopping basket</h2>
            </div>
            <div className="checkout__right">The subtotal will be here</div>
        </div>
    );
}

export default Checkout;
