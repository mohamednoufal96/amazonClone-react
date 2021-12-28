import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = (event) => {
        event.preventDefault();
    };

    const handleCreateAccount = () => {};
    
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="not found"
                />
            </Link>

            <div className="login__container">
                <h1 className="login__title">Sign-in</h1>

                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <button className="login__signInButton" type="submit" onClck={(event) => handleSignin(event)}>
                        Sign in
                    </button>
                </form>

                <p className="login__description">
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy
                    Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to="/signup">
                    <button className="login__createAccountButton" onClick={handleCreateAccount}>
                        Create Amazon Account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
