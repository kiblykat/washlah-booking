import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addHours,
  getHours,
} from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import default styles
import { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/hooks";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS },
});

const events = [
  // Example event
  {
    title: "Meeting (P1)",
    start: parse("2024-09-10 15:00:00", "yyyy-MM-dd HH:mm:ss", new Date()),
    end: addHours(
      parse("2024-09-10 15:00:00", "yyyy-MM-dd HH:mm:ss", new Date()),
      0.5
    ),
  },
  {
    title: "Jane Smith (P4)",
    start: parse("2024-09-10 15:00:00", "yyyy-MM-dd HH:mm:ss", new Date()),
    end: addHours(
      parse("2024-09-10 15:00:00", "yyyy-MM-dd HH:mm:ss", new Date()),
      1.5
    ),
  },
];

const CalendarBooking = () => {
  const eventPropGetter = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any, start: any, end: any, isSelected: any) => ({
      ...(isSelected && {
        style: {
          backgroundColor: "#000",
        },
      }),
      ...(getHours(start) < 16 && {
        className: "bg-green-50",
      }),
      ...(event.title.includes("Meeting") && {
        className: "bg-green-50",
      }),
    }),
    []
  );
  const { userLoggedIn } = useAuth();

  // const [view, setView] = useState(Views.WEEK);
  const [view] = useState(Views.WEEK);

  return (
    <div className="p-6">
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
        max={new Date(new Date().setHours(19, 30, 0))} // End time (5 PM)
        eventPropGetter={eventPropGetter}
        className="bg-gray-100 p-5 rounded-box shadow-md"
      />
    </div>
  );
};

export default CalendarBooking;
