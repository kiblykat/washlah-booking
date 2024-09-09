import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateChoice = () => {
  const [startDate, setStartDate] = useState(new Date());

  // Function to filter out times (disable times outside 9 AM - 6 PM)
  const filterTimes = (time) => {
    const selectedTime = new Date(time);
    const currentTime = new Date();
    //block out timings that have passed
    let isElapsed = selectedTime > currentTime;
    //working hours
    const hours = selectedTime.getHours();

    return hours >= 9 && hours <= 22 && isElapsed; // Allow only 9 AM to 6 PM
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
      />
    </div>
  );
};

export default DateChoice;
