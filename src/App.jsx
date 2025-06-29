import React from "react";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProcedureDetails from "./pages/ProcedureDetails";
import Fav from "./pages/Fav";
import ProceduresAll from "./pages/ProceduresAll";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/الإجراءات/:id" element={<ProcedureDetails />} />
          <Route path="/مفضلة" element={<Fav />} />
          <Route path="/الإجراءات" element={<ProceduresAll />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
