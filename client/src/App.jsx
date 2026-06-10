import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}

export default App;