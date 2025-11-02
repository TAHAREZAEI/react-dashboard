import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

// کامپوننت اصلی پروژه
function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
