 import { useState } from "react";

function DataEntry() {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState([1]);
  const [incidents, setIncidents] = useState([]);
const [formData, setFormData] = useState({
  date: "",
  incidentId: "",
  incidentName: "",
  category: "",
  severity: "Low",
  status: "Open",
  remarks: "",
});
  const handleSubmit = () => {
  setIncidents([...incidents, formData]);

  setMessage("✅ Data submitted successfully!");

  setFormData({
    date: "",
    incidentId: "",
    incidentName: "",
    category: "",
    severity: "Low",
    status: "Open",
    remarks: "",
  });
};
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>
        Cyber Security Incident Tracker
      </h1>

      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
  <tr>
    <th>Date</th>
    <th>Incident ID</th>
    <th>Incident Name</th>
    <th>Category</th>
    <th>Severity</th>
    <th>Status</th>
    <th>Remarks</th>
  </tr>
</thead>

    <tbody>
  {rows.map((row, index) => (
    <tr key={index}>
      <td>
  <input
    type="date"
    value={formData.date}
    onChange={(e) =>
      setFormData({ ...formData, date: e.target.value })
    }
  />
</td>
      <td>
  <input
    type="text"
    placeholder="Incident ID"
    value={formData.incidentId}
    onChange={(e) =>
      setFormData({ ...formData, incidentId: e.target.value })
    }
  />
</td>
      <td>
  <input
    type="text"
    placeholder="Incident Name"
    value={formData.incidentName}
    onChange={(e) =>
      setFormData({ ...formData, incidentName: e.target.value })
    }
  />
</td>
      <td>
  <input
    type="text"
    placeholder="Category"
    value={formData.category}
    onChange={(e) =>
      setFormData({ ...formData, category: e.target.value })
    }
  />
  </td>


      <td>
        <select
  value={formData.severity}
  onChange={(e) =>
    setFormData({ ...formData, severity: e.target.value })
  }
>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
  <option>Critical</option>
</select>
      </td>

      <td>
        <select
  value={formData.status}
  onChange={(e) =>
    setFormData({ ...formData, status: e.target.value })
  }
>
  <option>Open</option>
  <option>In Progress</option>
  <option>Resolved</option>
  <option>Closed</option>
</select>
      </td>

      <td>
  <input
    type="text"
    placeholder="Remarks"
    value={formData.remarks}
    onChange={(e) =>
      setFormData({ ...formData, remarks: e.target.value })
    }
  />
</td>
    </tr>
  ))}
</tbody>
      </table>

      <br />
<button
  onClick={() => setRows([...rows, 1])}
  style={{
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  }}
>
  + Add Row
</button>

<br /><br />
<button
  onClick={handleSubmit}
  style={{
    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px 30px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  }}
>
  Submit
</button>
     
<p
  style={{
    color: "green",
    fontWeight: "bold",
    marginTop: "15px",
  }}
>
  {message}
</p>
<h2>Saved Incidents</h2>

<table
  border="1"
  style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  }}
>
  <thead>
    <tr>
      <th>Date</th>
      <th>Incident ID</th>
      <th>Incident Name</th>
      <th>Category</th>
      <th>Severity</th>
      <th>Status</th>
      <th>Remarks</th>
    </tr>
  </thead>

  <tbody>
    {incidents.map((incident, index) => (
      <tr key={index}>
        <td>{incident.date}</td>
        <td>{incident.incidentId}</td>
        <td>{incident.incidentName}</td>
        <td>{incident.category}</td>
        <td>{incident.severity}</td>
        <td>{incident.status}</td>
        <td>{incident.remarks}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default DataEntry;