import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext"; // Import UserContext
import { Link, useNavigate } from "react-router-dom";

export default function WelcomePage() {
    const { username } = useContext(UserContext); // Get username from context

    const navigate = useNavigate();

    const handleLogout = () => {
        //to-do clear context before logout
        navigate("/logout")
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">
                Welcome {username}, to the App!
            </h1>
            <p className="text-center">
                We are glad to have you here. Use the navigation below to
                explore the app.
            </p>
            <div className="d-flex justify-content-center">
                <Link to="/todos" className="btn btn-primary mx-2">
                    View Todos
                </Link>
                <button className="btn btn-secondary mx-2" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}
