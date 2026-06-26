import React from "react";
import { Bell, Settings, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Complaint Dashboard</h1>
        <p>Monitor and resolve complaints efficiently.</p>
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
            <span className="profile-name">Admin</span>
            <span className="profile-role">Super User</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
