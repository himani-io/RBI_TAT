import React, { useState, useEffect } from "react";
import {
  FiGrid,
  FiClock,
  FiBarChart2,
  FiSettings,
  FiShield,
  FiMenu,
  FiX,
  FiAlertTriangle,
  FiUsers,
} from "react-icons/fi";


function SidebarItem({ icon, text, active, onClick }) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick}>
      <span className="sidebar-item-icon">{icon}</span>
      <span className="sidebar-item-text">{text}</span>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  // Close sidebar on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    { icon: <FiGrid />, text: "Dashboard" },
    { icon: <FiAlertTriangle />, text: "Live Complaints" },
    { icon: <FiUsers />, text: "Merchants" },
    { icon: <FiClock />, text: "Compliance Clock" },
    { icon: <FiShield />, text: "Penalties" },
    { icon: <FiBarChart2 />, text: "Analytics" },
    { icon: <FiSettings />, text: "Settings" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Overlay (mobile only) */}
      <div
        className={`sidebar-overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="logo">
            <div className="logo-icon">P</div>
            <div className="logo-text">
              <h1>PayGuard AI</h1>
              <p>RBI Hackathon</p>
            </div>
          </div>

          <nav className="sidebar-menu">
            <div className="sidebar-section-label">Main Menu</div>
            {navItems.map((item) => (
              <SidebarItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                active={activePage === item.text}
                onClick={() => {
                  setActivePage(item.text);
                  setOpen(false);
                }}
              />
            ))}
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
    </>
  );
}