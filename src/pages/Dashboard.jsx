import { useState } from "react";

import KPICards from "../components/KPICards";
import ComplaintForms from "../components/ComplaintForms";
import ResultCards from "../components/ResultCard";
import HistoryTable from "../components/HistoryTable";

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