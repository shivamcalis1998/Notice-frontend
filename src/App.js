import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import MyNoticesPage from "./Pages/MyNoticesPage";
import { useState } from "react";

function App() {
  const tokenexist = JSON.parse(localStorage.getItem("token")) ? true : false;
  const [Islogin, setIsLogin] = useState(tokenexist);

  function handlelogout() {
    localStorage.clear();
    setIsLogin(false);
  }
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/my-notices">my-notices</Link>
          </li>
          {!Islogin ? (
            <div>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
            </div>
          ) : (
            <Link onClick={handlelogout}>Log out</Link>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<HomePage Islogin={Islogin} />} />
        <Route path="/" element={<HomePage Islogin={Islogin} />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} />} />

        <Route path="/my-notices" element={<MyNoticesPage />} />
      </Routes>
    </div>
  );
}

export default App;
