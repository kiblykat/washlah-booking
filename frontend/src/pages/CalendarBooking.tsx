import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

const localizer = momentLocalizer(moment);

const events = [
  // Example event
  {
    start: new Date(),
    end: new Date(moment().add(1, "hour").toDate()),
    title: "Scheduled Event",
  },
];

const CalendarBooking = () => {
  const { userLoggedIn } = useAuth();

  // const [view, setView] = useState(Views.WEEK);
  const [view] = useState(Views.WEEK);

  return (
    <div>
      {!userLoggedIn && <Navigate to={"/"} replace={true} />}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={view}
        views={["day", "week"]} // Restrict to day and week view
        step={30} // 30-minute time slots
        timeslots={1} // Number of slots per "step"
        defaultDate={new Date()}
        style={{ height: "80vh" }} // Adjust height as needed
        min={new Date(new Date().setHours(9, 0, 0))} // Start time (9 AM)
        max={new Date(new Date().setHours(17, 0, 0))} // End time (5 PM)
      />
    </div>
  );
};

export default CalendarBooking;
