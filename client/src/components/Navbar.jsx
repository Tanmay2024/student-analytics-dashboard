import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">

        📊 EduMetrics

      </div>

      <div className="nav-links">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/add-student">
          Add Student
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;