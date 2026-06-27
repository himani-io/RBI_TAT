import React, { useState } from "react";
import { Send, FileText, Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ComplaintForms() {
  const [complaint, setComplaint] = useState("");
  const [failureDate, setFailureDate] = useState(null);
  const [paymentType, setPaymentType] = useState("P2P");

  const handleSubmit = (e) => {
    e.preventDefault();

    let formattedDate = null;
    if (failureDate) {
      const year = failureDate.getFullYear();
      const day = String(failureDate.getDate()).padStart(2, "0");
      const month = String(failureDate.getMonth() + 1).padStart(2, "0");

      formattedDate = `${year}/${day}/${month}`;
    }
    console.log("Payload going to Backend: ", {
      paymentType,
      failureDate: formattedDate,
      complaint,
    });
  };

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <div className="form-header-title">
            <FileText size={20} />
            <h2>Log new Complaint</h2>
          </div>
          <p>
            File a transaction issue directly into PayGuard's AI evaluation
            queue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="complaint-form">
          <div className="form-group-grid">
            <div className="form-group">
              <label htmlFor="complaint">Complaint Text</label>
              <textarea
                id="complaint"
                name="complaint"
                rows="8"
                placeholder="Type your detailed complaint here..."
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="paymentType">Payment Type</label>
              <select
                id="paymentType"
                name="paymentType"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
              >
                <option value="P2P">P2P (Peer-to-Peer)</option>
                <option value="Merchant">Merchant</option>
              </select>
            </div>

            <div className="form-group">
              <label>Failure Date</label>
              <div className="datepicker-container">
                <DatePicker
                  selected={failureDate}
                  onChange={(date) => setFailureDate(date)}
                  dateFormat="yyy/dd/MM"
                  maxDate={new Date()}
                  className="custom-datepicker-input"
                  required
                />
                <CalendarIcon size={16} className="datepicker-icon" />
              </div>
            </div>

            <button type="submiffFfFFt" className="submit-btn">
              <span>Analyze & Register</span>
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ComplaintForms;
