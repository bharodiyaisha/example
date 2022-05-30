import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import LocalStorage from "./components/LocalStorage/LocalStorage.js";
import SessionStorage from "./components/SessionStorage/SessionStorage.js";

import "./components/LocalStorage/localStorage.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="link">
              <Link className="tag" to={"/"}>
                LocalStorage
              </Link>
              <Link className="tag" to={"/sessionStorage"}>
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
