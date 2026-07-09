 import { useState } from "react";

function DataEntry() {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState([1]);
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
      <td><input type="date" /></td>
      <td><input type="text" placeholder="Incident ID" /></td>
      <td><input type="text" placeholder="Incident Name" /></td>
      <td><input type="text" placeholder="Category" /></td>

      <td>
        <select>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
      </td>

      <td>
        <select>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>
      </td>

      <td><input type="text" placeholder="Remarks" /></td>
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
  onClick={() => setMessage("✅ Data submitted successfully!")}
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
    </div>
  );
}

export default DataEntry;