// src/pages/TodoFormPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoFormPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (id) {
            // Fetch the todo by id and set the initial values
            // Replace this with your actual API call
            const fetchTodo = async () => {
                const response = await fetch(`your_api_endpoint/todos/${id}`);
                const todo = await response.json();
                setUsername(todo.username);
                setDescription(todo.description);
                setTargetDate(todo.targetDate);
                setIsDone(todo.isDone);
            };
            fetchTodo();
        }
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();
        if (id) {
            // Logic to update the todo
            console.log("Updating todo:", { id, username, description, targetDate, isDone });
        } else {
            // Logic to add a new todo
            console.log("Adding new todo:", { username, description, targetDate, isDone });
        }
        // Optionally redirect back to the todos list
        navigate("/todos");
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">{id ? "Update Todo" : "Add New Todo"}</h1>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="targetDate" className="form-label">Target Date</label>
                    <input
                        type="date"
                        id="targetDate"
                        className="form-control"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="form-check-label">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={isDone}
                            onChange={(e) => setIsDone(e.target.checked)}
                        />
                        Is Done?
                    </label>
                </div>
                <button type="submit" className="btn btn-primary w-25 p-2 mt-5">{id ? "Update Todo" : "Add Todo"}</button>
            </form>
        </div>
    );
}
