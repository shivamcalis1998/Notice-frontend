import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Entryway from "./Pages/Entryway";
import Dashboard from "./Pages/Dashboard";
import CreateNotc from "./Pages/CreateNotc";
import Newsfeed from "./Pages/Newsfeed";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const tokenexist = JSON.parse(localStorage.getItem("token")) ? true : false;
  const [Islogin, setIsLogin] = useState(tokenexist);

  const [userInfo, setUserInfo] = useState({
    token: JSON.parse(localStorage.getItem("token")) || null,

    user: JSON.parse(localStorage.getItem("userPro")) || null,
  });

  const navigate = useNavigate();
  function handlelogout() {
    localStorage.clear();
    setUserInfo({ token: null, user: null });

    navigate("/");
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
            <div>
              <Link onClick={handlelogout}>Log out</Link>
              <Link to="/makenotice">create</Link>
            </div>
          )}
        </ul>
      </nav>
      <Routes>
        <Route
          path="/home"
          element={<Dashboard Islogin={Islogin} userInfo={userInfo} />}
        />
        <Route
          path="/"
          element={<Dashboard Islogin={Islogin} userInfo={userInfo} />}
        />

        <Route path="/signup" element={<Registration />} />
        <Route
          path="/login"
          element={
            <Entryway
              setIsLogin={setIsLogin}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />

        <Route path="/my-notices" element={<Newsfeed userInfo={userInfo} />} />
        <Route
          path="/makenotice"
          element={<CreateNotc userInfo={userInfo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
