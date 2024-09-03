import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import HomePage from "./pages/HomePage.tsx";
import CalendarBooking from "./pages/CalendarBooking.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarBooking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
