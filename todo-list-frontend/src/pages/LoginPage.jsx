import { useState, useContext } from "react";
import { UserContext } from "../contexts/userContext"; // Import UserContext
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { username, setUsername } = useContext(UserContext); // Get setUsername from context
    const [localUsername, setLocalUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (localUsername === "admin" && password === "admin") {
            console.log("login successful");
            setUsername(localUsername); // Set username in context
            setError("");
            // Optionally redirect to the welcome page
            // window.location.href = "/welcome";
            navigate("/welcome");
        } else {
            setError("Invalid username or password");
        }
       }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={localUsername}
                        onChange={(e) => setLocalUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}
