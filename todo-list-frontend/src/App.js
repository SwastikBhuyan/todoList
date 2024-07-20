import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ListTodosPage from "./pages/ListTodosPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import TodoFormPage from "./pages/TodoFormPage"; // Import TodoFormPage
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/todos" element={<ListTodosPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/logout" element={<LogoutPage />} />
                    <Route path="/todos/new" element={<TodoFormPage />} /> {/* Add route for new todo */}
                    <Route path="/todos/edit/:id" element={<TodoFormPage />} /> {/* Add route for editing todo */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <FooterComponent />
        </div>
    );
}

export default App;
