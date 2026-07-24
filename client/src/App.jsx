import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to SmartLearn</h1>
            </div>
          }
        />

        {/* Authentication */}
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Temporary Student Dashboard */}
        <Route
          path="/student-dashboard"
          element={
            <div>
              <h1>Student Dashboard</h1>
              <p>Welcome Student!</p>
            </div>
          }
        />

        {/* Temporary Teacher Dashboard */}
        <Route
          path="/teacher-dashboard"
          element={
            <div>
              <h1>Teacher Dashboard</h1>
              <p>Welcome Teacher!</p>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;