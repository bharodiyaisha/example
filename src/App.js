import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import ImageVideo from "./components/ImageVideo/ImageVideo.js"

import "./navbar.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav">
              <Link className="link" to={"/imageVideo"}>
                ImageVideo
              </Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/imageVideo" element={<ImageVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;