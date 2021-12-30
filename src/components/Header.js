import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import { useStateValue } from "../StateProvider";
const linkStyle = { textDecoration: "none", color: "white" };

export default function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        console.log("Header component: ", user);
    });

    const handleUser = () => {
        debugger
        if (user) {
            dispatch({
                type: "SET_USER",
                user: undefined,
            });
        }
    };

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="not found" />
            </Link>
            <div className="header__searchContainer">
                <input type="text" className="header__search__input" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} style={linkStyle}>
                    <div className="header__navOption" onClick={handleUser}>
                        <span className="navOption__lineOne">Hello {user ? user.firstName : "Guest"}</span>
                        <span className="navOption__lineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header__navOption">
                    <span className="navOption__lineOne">Returns</span>
                    <span className="navOption__lineTwo">&#38; Orders</span>
                </div>
                <div className="header__navOption">
                    <span className="navOption__lineOne">Your</span>
                    <span className="navOption__lineTwo">Prime</span>
                </div>
                <Link to="/checkout" style={linkStyle}>
                    <div className="header___option__subtotal">
                        <ShoppingBasketIcon className="header__basketIcon"></ShoppingBasketIcon>
                        <span className="navOption__lineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
