import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateChoice = () => {
  const [startDate, setStartDate] = useState(new Date());

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
      />
    </div>
  );
};

export default DateChoice;
