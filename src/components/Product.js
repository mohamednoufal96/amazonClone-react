import React from "react";
import "../styles/Product.css";

function Product({ title, image, rating, price }) {
    debugger;
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => {
                            return <p key={index}>🌟</p>;
                        })}
                </div>
            </div>
            <img src={image} alt="not found" />
            <button> Add to basket</button>
        </div>
    );
}

export default Product;
