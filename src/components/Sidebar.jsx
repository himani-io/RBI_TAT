import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiClock,
  FiBarChart2,
  FiSettings,
  FiShield,
} from "react-icons/fi";

function SidebarItem({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => `sidebar-item${isActive ? " active" : ""}`}
    >
      <span className="sidebar-item-icon">{icon}</span>
      <span className="sidebar-item-text">{text}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <NavLink to="/" className="logo">
          <div className="logo-icon">
            <FiShield size={20} style={{ strokeWidth: 2.5 }} />
          </div>

          <div className="logo-text">
            <h1>PayGuard AI</h1>
            <p>RBI Hackathon</p>
          </div>
        </NavLink>

        <nav className="sidebar-menu">
          <SidebarItem icon={<FiGrid />} text="Dashboard" to="/" />

          <SidebarItem
            icon={<FiClock />}
            text="Compliance Clock"
            to="/history"
          />

          <SidebarItem
            icon={<FiBarChart2 />}
            text="Analytics"
            to="/analytics"
          />

          <SidebarItem icon={<FiSettings />} text="Settings" to="/settings" />
        </nav>
      </div>

      <div className="sidebar-footer">
        <FiShield className="footer-icon" />

        <div>
          <h2>AI Protected</h2>
          <p>Zero PII Leakage Enabled</p>
        </div>
      </div>
    </aside>
  );
}
