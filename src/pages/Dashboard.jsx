import { useState } from "react";

import KPICards from "../components/KPICards";
import ComplaintForms from "../components/ComplaintForms";
import ResultCards from "../components/ResultCard";
import HistoryTable from "../components/HistoryTable";

function Dashboard() {
  const [evaluationResult, setEvaluationResult] = useState(null);

  return (
    <div className="space-y-12">
      <KPICards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ComplaintForms onAnalyze={setEvaluationResult} />
        <ResultCards data={evaluationResult} />
      </div>

      <HistoryTable />
    </div>
  );
}

export default Dashboard;
