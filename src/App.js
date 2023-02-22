import React from "react";

import SideBar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Analytics from "./pages/dataAnalyticsPage";
import Entites from "./pages/entitiesPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes >
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/entities" element={<Entites />} />
        </Routes >
      </Router>

    </div>
  );
}
