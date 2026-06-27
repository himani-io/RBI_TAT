import React from "react";

const mockHistoryData = [
  {
    id: "#4587",
    merchant: "Flipkart India Pvt Ltd",
    category: "Payment Gateway Failure",
    priority: "Critical",
    status: "Open",
    timeLeft: "1 day left",
    penalty: "₹100",
  },
  {
    id: "#4586",
    merchant: "Zomato Ltd",
    category: "Refund not received yet",
    priority: "High",
    status: "Open",
    timeLeft: "2 days left",
    penalty: "₹200",
  },
  {
    id: "#4585",
    merchant: "Amazon Seller Services",
    category: "Duplicate Debit",
    priority: "Critical",
    status: "Open",
    timeLeft: "0 days left",
    penalty: "₹500",
  },
  {
    id: "#4584",
    merchant: "Uber India Systems",
    category: "Money debited but ride not booked",
    priority: "Medium",
    status: "Open",
    timeLeft: "3 days left",
    penalty: "₹300",
  },
  {
    id: "#4583",
    merchant: "Swiggy Pvt Ltd",
    category: "Delayed refund for cancelled order",
    priority: "Low",
    status: "Resolved",
    timeLeft: "4 days left",
    penalty: "₹0",
  },
];

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
