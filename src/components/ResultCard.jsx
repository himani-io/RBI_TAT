import React from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Cpu,
  Calendar,
  ShieldCheck as FineIcon,
} from "lucide-react";

export default function ResultCards({ data }) {
  // Graceful pitch fallback data when the state hasn't changed yet
  const result = data || {
    status: "BREACHED",
    paymentType: "Merchant",
    daysElapsed: 7,
    deadlineDate: "24 Jun 2025",
    fineAccrued: 200,
    analysis:
      "This Merchant transaction (June 10) is SLA-BREACHED by 2 days. Initiate an immediate reversal of ₹5,000 to the source account and apply ₹200 statutory compensation. Escalate to L2 Banking Ops Circular No. 67.",
  };

  const isBreached = result.status === "BREACHED";

  return (
    <div className="result-container">
      <div className="result-header">
        <div className="result-header-title">
          <Cpu size={20} />
          <h2>AI Assessment Result</h2>
        </div>
        <p>Real-time machine learning pipeline compliance indicators.</p>
      </div>

      <div className="result-body">
        <div className={`status-banner ${isBreached ? "flagged" : "safe"}`}>
          <div className="status-banner-left">
            {isBreached ? <ShieldAlert size={24} /> : <ShieldCheck size={24} />}
            <div>
              <h3>
                {isBreached ? "SLA Breach Triggered" : "Timeline Compliant"}
              </h3>
              <p>Risk State: {isBreached ? "Critical Risk" : "Minimal Risk"}</p>
            </div>
          </div>
          <span className="badge">{result.paymentType} Mode</span>
        </div>

        <div className="metrics-row">
          <div className="metric-box">
            <div className="metric-box-header">
              <Calendar size={16} />
              <span>TAT Deadline</span>
            </div>
            <div className="metric-box-value text-blue">
              {result.deadlineDate}
            </div>
          </div>

          <div className="metric-box">
            <div className="metric-box-header">
              <FineIcon size={16} />
              <span>Accrued Fine</span>
            </div>
            <div
              className={`metric-box-value ${isBreached ? "text-red" : "text-emerald"}`}
            >
              ₹{result.fineAccrued}
            </div>
          </div>
        </div>

        <div className="analysis-box">
          <label>Gemini Operational Action Directive</label>
          <p>{result.analysis}</p>
        </div>
      </div>
    </div>
  );
}
