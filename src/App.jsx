import React from "react";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProcedureDetails from "./pages/ProcedureDetails";
import Fav from "./pages/Fav";
import { Procedures } from "./data/Procedures";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/الإجراءات" element={<ProcedureDetails />} />
          <Route path="/مفضلة" element={<Fav />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
