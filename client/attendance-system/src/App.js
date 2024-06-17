import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "58%", right: "25rem" }}></div>
      <LoginPage />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
