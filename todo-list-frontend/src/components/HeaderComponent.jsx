// src/components/HeaderComponent.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/taskly-logo.png";

const HeaderComponent = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        //to-do clear context before logout
        navigate("/logout")
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" className="navbar-logo" />
                    </Link>
                    <ul className="navbar-nav d-flex flex-row ms-3 mb-0">
                        <li className="nav-item">
                            <Link to="/welcome" className="nav-link text-white">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/todos" className="nav-link text-white">
                                Todos
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav mb-0">
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link text-white" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderComponent;
