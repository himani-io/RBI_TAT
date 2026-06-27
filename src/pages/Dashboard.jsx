import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import KPICards from "../components/KPICards.jsx";
import ComplaintForms from "../components/ComplaintForms.jsx";
import ResultCards from "../components/ResultCard.jsx";
import HistoryTable from "../components/HistoryTable.jsx";

function Dashboard() {
  const [evaluationResult, setEvaluationResult] = useState(null);

  return (
    <div className="flex min-h-screen bg-[#0f0a0e] text-white font-sans antialiased">
      <Sidebar />

      <div className="flex-1 min-h-screen ml-64 p-8 md:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <Navbar />

          <KPICards />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
            <ComplaintForms onAnalyze={setEvaluationResult} />
            <ResultCards data={evaluationResult} />
          </div>

          <div className="pt-4">
            <HistoryTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
