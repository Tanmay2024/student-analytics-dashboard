import { useEffect, useState } from "react";
import axios from "../api";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function Dashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("/students");
    setStudents(res.data);
  };

  const totalStudents = students.length;

  const averageMarks =
    students.length
      ? (
          students.reduce(
            (sum, student) =>
              sum + student.marks,
            0
          ) / students.length
        ).toFixed(1)
      : 0;

  const topScore =
    students.length
      ? Math.max(
          ...students.map(
            (student) =>
              student.marks
          )
        )
      : 0;

  const passPercentage =
    students.length
      ? (
          students.filter(
            (student) =>
              student.marks >= 40
          ).length /
          students.length *
          100
        ).toFixed(1)
      : 0;

  const totalDepartments =
    new Set(
      students.map(
        (student) =>
          student.department
      )
    ).size;

  const topper =
    students.length
      ? students.reduce(
          (prev, current) =>
            prev.marks >
            current.marks
              ? prev
              : current
        )
      : null;

  const departmentData = [];

  students.forEach((student) => {

    const existing =
      departmentData.find(
        (item) =>
          item.name ===
          student.department
      );

    if (existing) {

      existing.value++;

    } else {

      departmentData.push({
        name: student.department,
        value: 1
      });

    }

  });

  const rankedStudents =
    [...students].sort(
      (a, b) =>
        b.marks - a.marks
    );

  return (

    <div className="page">

      <div className="card">

        <div className="hero-section">

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Monitor academic performance,
            department trends and student
            outcomes from one centralized
            dashboard.
          </p>

        </div>

        <div className="dashboard-cards">

          <div className="stat-box">
            <h2>🎓 {totalStudents}</h2>
            <p>Total Students</p>
          </div>

          <div className="stat-box">
            <h2>📈 {averageMarks}</h2>
            <p>Average Marks</p>
          </div>

          <div className="stat-box">
            <h2>🏆 {topScore}</h2>
            <p>Highest Score</p>
          </div>

          <div className="stat-box">
            <h2>✅ {passPercentage}%</h2>
            <p>Pass Rate</p>
          </div>

          <div className="stat-box">
            <h2>🏫 {totalDepartments}</h2>
            <p>Departments</p>
          </div>

        </div>

        <div
          style={{
            marginTop: "30px"
          }}
        >
          <div className="topper-card">

            <h3>
              🏆 Top Performer
            </h3>

            <h1>
              {
                topper
                  ? topper.name
                  : "-"
              }
            </h1>

            <p>
              {
                topper
                  ? `${topper.marks} Marks`
                  : ""
              }
            </p>

          </div>
        </div>

        <h2
          style={{
            marginTop: "40px",
            marginBottom: "20px"
          }}
        >
          Academic Insights
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(400px,1fr))",
            gap: "30px"
          }}
        >

          <div className="stat-box">

            <h3>
              🏆 Student Rankings
            </h3>

            {
              rankedStudents.map(
                (
                  student,
                  index
                ) => (

                  <div
                    key={student._id}
                    style={{
                      marginTop: "20px"
                    }}
                  >

                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        marginBottom: "8px"
                      }}
                    >

                      <span>
                        #{index + 1} {student.name}
                      </span>

                      <span>
                        {student.marks}
                      </span>

                    </div>

                    <div
                      style={{
                        height: "10px",
                        background:
                          "#334155",
                        borderRadius:
                          "10px"
                      }}
                    >

                      <div
                        style={{
                          width:
                            `${student.marks}%`,
                          height: "10px",
                          borderRadius:
                            "10px",
                          background:
                            "linear-gradient(90deg,#06b6d4,#3b82f6)",
                          transition:
                            "width 1.2s ease"
                        }}
                      />

                    </div>

                  </div>

                )
              )
            }

          </div>

          <div className="stat-box">

            <h3>
              🏫 Department Insights
            </h3>

            {
              departmentData.map(
                (dept) => (

                  <div
                    key={dept.name}
                    style={{
                      marginTop: "20px"
                    }}
                  >

                    <div
                      style={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        marginBottom: "8px"
                      }}
                    >

                      <span>
                        {dept.name}
                      </span>

                      <span>
                        {dept.value} Students
                      </span>

                    </div>

                    <div
                      style={{
                        height: "12px",
                        background:
                          "#334155",
                        borderRadius:
                          "10px"
                      }}
                    >

                      <div
                        style={{
                          width:
                            `${(dept.value / totalStudents) * 100}%`,
                          height: "12px",
                          borderRadius:
                            "10px",
                          background:
                            "linear-gradient(90deg,#f59e0b,#f97316)",
                          transition:
                            "width 1.2s ease"
                        }}
                      />

                    </div>

                  </div>

                )
              )
            }

          </div>

        </div>

        <h2
          style={{
            marginTop: "40px",
            marginBottom: "20px"
          }}
        >
          📊 Performance Overview
        </h2>

        <div className="stat-box">

          <ResponsiveContainer
            width="100%"
            height={450}
          >

            <AreaChart
              data={rankedStudents}
            >

              <defs>

                <linearGradient
                  id="colorMarks"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#06b6d4"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="95%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
              />

              <XAxis
                dataKey="name"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="marks"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorMarks)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;