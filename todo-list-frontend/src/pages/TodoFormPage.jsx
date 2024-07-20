// src/pages/TodoFormPage.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo, createTodo, updateTodo } from "../api/TodoApi";

export default function TodoFormPage() {
    const { id } = useParams(); // Get ID from URL parameters
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [username, setUsername] = useState(""); // State for username
    const [description, setDescription] = useState(""); // State for description
    const [targetDate, setTargetDate] = useState(""); // State for target date
    const [isDone, setIsDone] = useState(false); // State for done status

    // Fetch the todo details if ID is present (for update case)
    useEffect(() => {
        if (id) {
            const fetchTodo = async () => {
                try {
                    const response = await getTodo("user1", id); // Replace "user1" with dynamic username
                    const todo = response.data;
                    setUsername(todo.username);
                    setDescription(todo.description);
                    setTargetDate(todo.targetDate);
                    setIsDone(todo.isDone);
                } catch (error) {
                    console.error("Error fetching todo:", error);
                }
            };

            fetchTodo();
        }
    }, [id]);

    // Handle form submission for adding or updating a todo
    const handleSubmit = async (e) => {
        e.preventDefault();

        const todo = { username, description, targetDate, isDone };

        try {
            if (id) {
                await updateTodo("user1", id, todo); // Update todo if ID is present
            } else {
                await createTodo("user1", todo); // Create new todo if no ID
            }
            navigate("/todos"); // Navigate back to todos list after submission
        } catch (error) {
            console.error("Error saving todo:", error);
        }
    };

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
