import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import LabList from "./pages/LabList/LabList";
import Slots from "./pages/Slots/Slots";
import LabDashboard from "./pages/Lab_Dashboard/LabDashboard";
import LoginInstitute from "./pages/Login_Institute/LoginInstitute";
import LoginStudent from "./pages/Login_Student/LoginStudent";
import SignupInstitute from "./pages/Signup_Institute/SignupInstitute";
import SignupStudent from "./pages/Signup_Student/SignupStudent";
import StudentDashboard from "./pages/Student_Dashboard/StudentDashboard";
import InstituteDashboard from "./pages/Institute_Dashboard/InstituteDashboard";
import Maps from "./pages/map";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/map' element={<Maps />} />
          <Route path='/labs' element={<LabList />} />
          <Route path='/signup/student' element={<SignupStudent />} />
          <Route path='/signup/institute' element={<SignupInstitute />} />
          <Route path='/login/student' element={<LoginStudent />} />
          <Route path='/login/institute' element={<LoginInstitute />} />
          <Route path='/slots/:id' element={<Slots />} />
          <Route path='/lab/:id' element={<LabDashboard />} />
          <Route path='/student/dashboard' element={<StudentDashboard />} />
          <Route path='/institute/dashboard' element={<InstituteDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
