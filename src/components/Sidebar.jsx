import React from "react";
import {
  FiGrid,
  FiClock,
  FiBarChart2,
  FiSettings,
  FiShield,
} from "react-icons/fi";

function SidebarItem({ icon, text, active }) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <span className="sidebar-item-icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-icon">
            <FiShield size={20} style={{ strokeWidth: 2.5 }} />
          </div>
          <div className="logo-text">
            <h1>PayGuard AI</h1>
            <p>RBI Hackathon</p>
          </div>
        </div>

        <nav className="sidebar-menu">
          <SidebarItem icon={<FiGrid />} text="Dashboard" active />
          <SidebarItem icon={<FiClock />} text="Compliance Clock" />
          <SidebarItem icon={<FiBarChart2 />} text="Analytics" />
          <SidebarItem icon={<FiSettings />} text="Settings" />
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
