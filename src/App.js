import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DomainDetails from "./Pages/DomainDetails/DomainDetails";
import Landing from "./Pages/Landing/Landing";

import React from "react";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<DomainDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
