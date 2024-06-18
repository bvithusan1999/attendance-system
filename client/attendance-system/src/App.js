import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.loginReducer.authData);
  console.log(user);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "58%", right: "25rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to={"home"} /> : <Navigate to="login" />}
        />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"../home"} /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
