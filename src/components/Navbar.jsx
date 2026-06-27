import React from "react";
import { Bell, Settings, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Compliance Dashboard</h1>
        <p>Monitor real-time payment failures and SLA turnaround tracking.</p>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>

        <button className="icon-btn">
          <Settings size={20} />
        </button>

        <div className="profile">
          <UserCircle size={28} className="profile-icon" />
          <div className="profile-info">
            <span className="profile-name">Compliance Admin</span>
            <span className="profile-role">Super User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
