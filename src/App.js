import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DomainDetails from "./DomainDetails/DomainDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/domain" element={<DomainDetails />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
