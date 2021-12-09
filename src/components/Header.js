import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <div className="header">
            <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="not found" />

            <div className="header-search">
                <input type="text" className="header-search-input" />
            </div>
            <div className="header-nav">
                <div className="header-nav-option">
                    <span className="header-nav-option-lineOne">Hello</span>
                    <span className="header-nav-option-lineTwo">Sign in</span>
                </div>
                <div className="header-nav-option">
                    <span className="header-nav-option-lineOne">Returns</span>
                    <span className="header-nav-option-lineTwo">& Orders</span>
                </div>
                <div className="header-nav-option">
                    <span className="header-nav-option-lineOne">Your</span>
                    <span className="header-nav-option-lineTwo">Prime</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
