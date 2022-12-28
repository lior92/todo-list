import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UserPage from "./components/UserPage";
import PageNoFound from "./components/PageNoFound";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user_page/:user_name" element={<UserPage />} />
        <Route path="*" element={<PageNoFound />} />
      </Routes>
    </div>
  );
}

export default App;
