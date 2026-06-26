import React from "react";

import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import KPICards from '../components/KPICards.jsx';
import ComplaintForms from '../components/ComplaintForms.jsx';
import ResultCards from '../components/ResultCard.jsx';
import HistoryTable from '../components/HistoryTable.jsx';

function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar />

        <div className="flex-1 p-8">
          <Navbar />
          <KPICards />

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ComplaintForms />
            <ResultCards />
          </div>

          <div className="mt-8">
            <HistoryTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
