import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
