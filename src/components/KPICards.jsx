import React from "react";
import { ShieldAlert, CheckCircle, Clock, TrendingUp } from "lucide-react";

function KPICard({ title, value, change, icon: Icon, variant }) {
  const isPositive =
    change.startsWith("+") || change.toLowerCase().includes("up");
  const badgeClass = isPositive ? "positive" : "negative";

  return (
    <div className="kpi-card">
      <div className="kpi-card-left">
        <span className="kpi-title">{title}</span>
        <span className="kpi-value">{value}</span>
        <div className="kpi-change-container">
          <span className={`kpi-badge ${badgeClass}`}>{change}</span>
          <span className="kpi-change-text">vs yesterday</span>
        </div>
      </div>
      <div className={`kpi-icon-wrapper ${variant}`}>
        <Icon size={22} strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function KPICards() {
  return (
    <div className="kpi-grid">
      <KPICard
        title="Total Complaints"
        value="1,345"
        change="+12.5%"
        icon={TrendingUp}
        variant="blue"
      />
      <KPICard
        title="Open Critical"
        value="24"
        change="+14.3%"
        icon={ShieldAlert}
        variant="red"
      />
      <KPICard
        title="Total Penalty Accrued"
        value="₹12,600"
        change="+₹2,300"
        icon={TrendingUp}
        variant="amber"
      />
      <KPICard
        title="Compliance Rate"
        value="97.2%"
        change="+2.4%"
        icon={CheckCircle}
        variant="emerald"
      />
    </div>
  );
}
