import React from "react";
import "../styles/Home.css";
import Product from "./Product";

export default function Home() {
    return (
        <div className="home__container">
            <img
                src="https://m.media-amazon.com/images/I/61ZtySPW1QL._SX3000_.jpg"
                className="banner__image"
                alt="not found"
            />

            <div className="home__row">
                <Product
                    title="The Real Anthony Fauci: Bill Gates"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
                <Product
                    title="The Real Anthony Fauci: Bill Gates"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    title="The Real Anthony Fauci: Bill Gates,"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
                <Product
                    title="The Real Anthony Fauci: Bill Gates"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
                <Product
                    title="The Real Anthony Fauci: Bill Gates"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    title="The Real Anthony Fauci: Bill Gates"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
                <Product
                    title="The Real Anthony Fauci: Bill Gates"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wH91YObNL._AC_SX184_.jpg"
                    price={99.99}
                    rating={5}
                />
            </div>
        </div>
    );
}
