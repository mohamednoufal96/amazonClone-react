import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emai, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="signup">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="not found"
                />
            </Link>
            <div className="signup__container">
                <h1 className="signup__title">Create an account</h1>
                <form action="">
                    <h5 signup__formLabel>First name</h5>
                    <input type="text" required />
                    <h5 signup__formLabel>Last name</h5>
                    <input type="text" />

                    <h5 signup__formLabel>Email </h5>
                    <input type="text" required />

                    <h5 signup__formLabel>Password</h5>
                    <input type="password" required />

                    <button>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
