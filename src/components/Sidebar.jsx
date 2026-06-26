import React from "react";
import {FiGrid, FiClock, FiBarChart2, FiSettings, FiShield,} from "react-icons/fi";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo">
            <div className="logo-icon">p</div>

            <div className="logo-text">
              <h1>PayGuard AI</h1>
              <p>RBI Hackathon</p>
            </div>
          </div>

          <nav className="sidebar-menu">
            <SidebarItem 
              icon={<FiGrid/>}
              text="Dashboard"
              active/>

              <SidebarItem 
              icon={<FiClock/>}
              text="History"
              />

              <SidebarItem
            icon={<FiBarChart2 />}
            text="Analytics"
          />

          <SidebarItem
            icon={<FiSettings />}
            text="Settings"
          />
          </nav>
        </div>

        <div className="sidebar-footer">
          <FiShield className="footer-icon"/>

          <div>
            <h2>AI Protected</h2>
            <p>Fraud Detection Enabled</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
