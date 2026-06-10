import { useEffect, useState } from "react";
import axios from "../api";

function Students() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchStudents();

    }, []);

    const fetchStudents = async () => {

        try {

            const res =
                await axios.get(
                    "/students"
                );

            setStudents(res.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const deleteStudent =
        async (id) => {

            const confirmDelete =
                window.confirm(
                    "Are you sure you want to delete this student?"
                );

            if (!confirmDelete)
                return;

            try {

                await axios.delete(
                    `/students/${id}`
                );

                fetchStudents();

            } catch (error) {

                console.log(error);

            }

        };
    const updateStudent = async (student) => {

        const name = prompt(
            "Enter New Name",
            student.name
        );

        if (name === null) return;

        const department = prompt(
            "Enter Department",
            student.department
        );

        if (department === null) return;

        const marks = prompt(
            "Enter Marks",
            student.marks
        );

        if (marks === null) return;

        try {

            await axios.put(
                `/students/${student._id}`,
                {
                    name,
                    department,
                    marks
                }
            );

            fetchStudents();

        } catch (error) {

            console.log(error);

        }

    };

    if (loading) {

        return (

            <div className="page">

                <div
                    className="table-card"
                >

                    <h2>
                        Loading Student Records...
                    </h2>

                </div>

            </div>

        );

    }

    return (

        <div className="page">

            <div className="table-card">

                <h1>
                    Student Performance Center
                </h1>

                <p>
                    Monitor student records,
                    academic performance and
                    department-wise outcomes.
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginTop: "20px",
                        marginBottom: "25px",
                        flexWrap: "wrap"
                    }}
                >

                    <div className="mini-stat">
                        👥 {students.length} Students
                    </div>

                    <div className="mini-stat">
                        🏫 {
                            new Set(
                                students.map(
                                    s => s.department
                                )
                            ).size
                        } Departments
                    </div>

                    <div className="mini-stat">
                        ✅ {
                            students.filter(
                                s => s.marks >= 40
                            ).length
                        } Passed
                    </div>

                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        marginBottom: "20px",
                        flexWrap: "wrap"
                    }}
                >

                    <input
                        type="text"
                        placeholder="Search Student..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
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

                        <option value="All">
                            All Departments
                        </option>

                        {
                            [...new Set(
                                students.map(
                                    (student) =>
                                        student.department
                                )
                            )].map((dept) => (

                                <option
                                    key={dept}
                                    value={dept}
                                >
                                    {dept}
                                </option>

                            ))
                        }

                    </select>

                </div>

                <table>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Department</th>
                            <th>Marks</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            students
                                .filter((student) => {

                                    const nameMatch =
                                        student.name
                                            .toLowerCase()
                                            .includes(
                                                search.toLowerCase()
                                            );

                                    const deptMatch =
                                        department === "All"
                                            ? true
                                            : student.department === department;

                                    return (
                                        nameMatch &&
                                        deptMatch
                                    );

                                })
                                .length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        style={{
                                            padding: "40px",
                                            textAlign: "center",
                                            fontSize: "18px"
                                        }}
                                    >

                                        📭 No Students Found

                                    </td>

                                </tr>

                            ) : (

                                students
                                    .filter((student) => {

                                        const nameMatch =
                                            student.name
                                                .toLowerCase()
                                                .includes(
                                                    search.toLowerCase()
                                                );

                                        const deptMatch =
                                            department === "All"
                                                ? true
                                                : student.department === department;

                                        return (
                                            nameMatch &&
                                            deptMatch
                                        );

                                    })
                                    .map((student) => (

                                        <tr key={student._id}>

                                            <td>
                                                {student.name}
                                            </td>

                                            <td>
                                                {student.department}
                                            </td>

                                            <td>
                                                {student.marks}
                                            </td>

                                            <td>

                                                {
                                                    student.marks >= 85
                                                        ? (
                                                            <span className="excellent">
                                                                Excellent
                                                            </span>
                                                        )
                                                        : student.marks >= 60
                                                            ? (
                                                                <span className="good">
                                                                    Good
                                                                </span>
                                                            )
                                                            : student.marks >= 40
                                                                ? (
                                                                    <span className="average">
                                                                        Average
                                                                    </span>
                                                                )
                                                                : (
                                                                    <span className="poor">
                                                                        Needs Improvement
                                                                    </span>
                                                                )
                                                }

                                            </td>

                                            <td>

                                                <button
                                                    className="action-btn"
                                                    onClick={() =>
                                                        updateStudent(
                                                            student
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                {" "}

                                                <button
                                                    className="action-btn delete-btn"
                                                    onClick={() =>
                                                        deleteStudent(
                                                            student._id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                            )
                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Students;