// src/pages/ListTodosPage.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos, deleteTodo } from "../api/TodoApi";

export default function ListTodosPage() {
    const [todos, setTodos] = useState([]); // State to store todos
    const [loading, setLoading] = useState(true); // State to manage loading state
    const username = "admin"; // Example username; replace with dynamic value if needed

    // Fetch todos when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await getTodos(username);
                console.log("list todos use eff",response)
                setTodos(response.data); // Set todos from response
            } catch (error) {
                console.error("Error fetching todos:", error);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchTodos();
    }, [username]);


    // Handle deleting a todo
    const handleDelete = async (id) => {
        try {
            await deleteTodo(username, id); // Delete todo by ID
            setTodos(todos.filter((todo) => todo.id !== id)); // Remove deleted todo from state
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    // Show loading indicator while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Todos</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is Done?</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.username}</td>
                            <td>{todo.description}</td>
                            <td>{todo.targetDate}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todo.isDone}
                                    readOnly
                                />
                            </td>
                            <td>
                                <Link
                                    to={`/todos/edit/${todo.id}`}
                                    className="btn btn-warning"
                                >
                                    Update
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center mt-4">
                <Link to="/todos/new" className="btn btn-primary">
                    Add Todo
                </Link>
            </div>
        </div>
    );
}
