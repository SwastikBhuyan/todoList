import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ListTododsPage from "./pages/ListTodosPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/todos" element={<ListTododsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/logout" element={<LogoutPage />} />

                    <Route path="*" component={ErrorPage} />
                </Routes>
            </div>
            <FooterComponent />
        </div>
    );
}

export default App;
