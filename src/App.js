import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />

        <main className="main">
          <Header />

          {/* مسیرها */}
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
