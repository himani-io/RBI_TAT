import React from "react";
import { mockHistoryData } from "../data/data";

export default function HistoryTable() {
  return (
    <div className="history-table-container">
      <table className="history-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Merchant</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Time Left</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          {mockHistoryData.map((row) => (
            <tr key={row.id}>
              <td style={{ fontWeight: "600", color: "#CC2A49" }}>{row.id}</td>
              <td>{row.merchant}</td>
              <td>{row.category}</td>
              <td>
                <span className={`table-badge ${row.priority.toLowerCase()}`}>
                  {row.priority}
                </span>
              </td>
              <td>
                <span className={`table-badge ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </td>
              <td style={{ color: "#F99E4C" }}>{row.timeLeft}</td>
              <td style={{ fontWeight: "600" }}>{row.penalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
