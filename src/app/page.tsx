"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";

import { ApplicationCalendar } from "./components/organism/ApplicationCalendar";
import { LayoutTeacher } from "./components/templates/LayoutTeacher";
import { dates, profileData } from "./data";

export default function Home() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <LayoutTeacher>
        <ApplicationCalendar accordionData={dates} profileData={profileData} />
      </LayoutTeacher>
    </LocalizationProvider>
  );
}
