import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import HomePage from "./pages/HomePage.tsx";
import CalendarBooking from "./pages/CalendarBooking.tsx";
import RootLayout from "./layout/RootLayout.tsx";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarBooking />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
