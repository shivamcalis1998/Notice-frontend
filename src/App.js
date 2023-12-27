import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Registration from "./Pages/Registration";
import Entryway from "./Pages/Entryway";
import Dashboard from "./Pages/Dashboard";
import Newsfeed from "./Pages/Newsfeed";
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
        <Route path="/home" element={<Dashboard Islogin={Islogin} />} />
        <Route path="/" element={<Dashboard Islogin={Islogin} />} />

        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Entryway setIsLogin={setIsLogin} />} />

        <Route path="/my-notices" element={<Newsfeed />} />
      </Routes>
    </div>
  );
}

export default App;
