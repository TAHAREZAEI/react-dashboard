import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>پنل مدیریت</h2>
      <ul>
        <li><Link to="/" style={{color: "white", textDecoration: "none"}}>🏠 خانه</Link></li>
        <li><Link to="/users" style={{color: "white", textDecoration: "none"}}>👤 کاربران</Link></li>
        <li>📊 گزارش‌ها</li>
        <li>⚙️ تنظیمات</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
