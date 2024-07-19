import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            console.log("login successful");
            setError("");
        } else {
            setError("Invalid username or password");
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="d-flex flex-column align-items-center w-50 mx-auto"
            >
                <div className="form-group mb-3 w-100">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            console.log(username)
                        }}
                    />
                </div>
                <div className="form-group mb-3 w-100">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-success w-20">
                    Login
                </button>
                {error && <div className="alert alert-danger w-75 m-5">{error}</div>}
            </form>
        </div>
    );
}
