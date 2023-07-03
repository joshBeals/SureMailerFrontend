import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AuthPage from "./pages/auth";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth/login" element={<AuthPage />} />
                    <Route path="/auth/register" element={<AuthPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
