import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateChoice = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  // Function to filter out times (disable times outside 9 AM - 6 PM)
  const filterTimes = (time: Date) => {
    const selectedTime = new Date(time);
    const currentTime = new Date();
    //block out timings that have passed
    const isElapsed = selectedTime > currentTime;
    //working hours
    const hours = selectedTime.getHours();

    return hours >= 10 && hours <= 17.5 && isElapsed; // Allow only 9 AM to 6 PM
  };

  const filterDates = (date: Date) => {
    const currentDate = new Date();
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(currentDate.getDate() + 14); // Add 14 days to the current date

    // Allow dates only between the current date and two weeks from now
    return date >= currentDate && date <= twoWeeksFromNow;
  };

  return (
    <div className="m-3 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Choose Date and Time
      </h2>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
        className="border p-2 rounded-md shadow-sm"
        filterTime={filterTimes}
        filterDate={filterDates}
      />
    </div>
  );
};

export default DateChoice;
