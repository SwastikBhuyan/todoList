import React from "react";
import { Link } from "react-router-dom";

const todos = [
    {
        id: 1,
        username: "user1",
        description: "Learn React",
        targetDate: "2024-08-01",
        isDone: false,
    },
    {
        id: 2,
        username: "user2",
        description: "Learn Spring Boot",
        targetDate: "2024-08-02",
        isDone: true,
    },
    // Add more sample todos as needed
];

export default function ListTodosPage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Todos</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
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
                            <td>{todo.id}</td>
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
                                <button className="btn btn-danger">
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
