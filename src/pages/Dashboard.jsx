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
    <div className="app-shell">
      <Sidebar />

      <div className="main-content">
        <div className="page-wrapper">
          <Navbar />

          <KPICards />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start" style={{ marginBottom: "2rem" }}>
            <ComplaintForms onAnalyze={setEvaluationResult} />
            <ResultCards data={evaluationResult} />
          </div>

          <HistoryTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;