"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AvailabilityCalendar() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <Calendar onChange={(value) => setDate(value as Date)} value={date} />
    </div>
  );
}