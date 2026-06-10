import { useState } from "react";
import axios from "../api";

function AddStudent() {

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = async () => {

    try {

      await axios.post("/students", {
        name,
        department,
        marks
      });

      alert("✅ Student Added Successfully");

      setName("");
      setDepartment("");
      setMarks("");

    } catch (error) {

      console.log(error);

      alert("❌ Failed to Add Student");

    }

  };

  return (

    <div className="page">

      <div className="form-card">

        <h1>
          🎓 Student Registration Portal
        </h1>

        <p>
          Register students and instantly
          include them in performance analytics,
          rankings and department insights.
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            flexWrap: "wrap"
          }}
        >

          <span className="mini-stat">
            📊 Analytics Enabled
          </span>

          <span className="mini-stat">
            ⚡ Real-Time Updates
          </span>

        </div>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <select
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
        >

          <option value="">
            Select Department
          </option>

          <option value="CSE">
            Computer Science
          </option>

          <option value="ECE">
            Electronics & Communication
          </option>

          <option value="EEE">
            Electrical & Electronics
          </option>

          <option value="MECH">
            Mechanical
          </option>

          <option value="CIVIL">
            Civil
          </option>

          <option value="IT">
            Information Technology
          </option>

          <option value="AI&DS">
            AI & Data Science
          </option>

        </select>

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) =>
            setMarks(
              e.target.value
            )
          }
        />

        <button
          className="primary-btn"
          onClick={handleSubmit}
        >
          🚀 Add Student
        </button>

      </div>

    </div>

  );

}

export default AddStudent;