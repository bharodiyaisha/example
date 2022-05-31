import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Grid from "./components/Grid/Grid.js"

import "./components/Grid/grid.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav">
              <Link className="link" to={"/grid"}>
                Grid
              </Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/grid" element={<Grid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;