import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import LocalStorage from "./components/LocalStorage/LocalStorage.js";
import SessionStorage from "./components/SessionStorage/SessionStorage.js";

import "./navbar.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav">
              <Link className="link" to={"/"}>
                LocalStorage
              </Link>
              <Link className="link" to={"/sessionStorage"}>
                SessionStorage
              </Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LocalStorage />} />
          <Route path="/sessionStorage" element={<SessionStorage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
