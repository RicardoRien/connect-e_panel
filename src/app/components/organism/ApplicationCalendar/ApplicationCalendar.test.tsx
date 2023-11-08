import { ApplicationCalendar } from "@/app/components/organism/ApplicationCalendar";
import { dates, profileData } from "@/app/data";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { render, screen } from "@testing-library/react";

test("Renders the component correctly", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ApplicationCalendar accordionData={dates} profileData={profileData} />
    </LocalizationProvider>
  );

  expect(screen.getByText("Isaac Newton")).toBeInTheDocument();
  expect(screen.getByText("London, England")).toBeInTheDocument();
  expect(screen.getByAltText(`Teacher's avatar`)).toBeInTheDocument();
  expect(screen.getByTestId("teacher-go-back-link")).toBeInTheDocument();
});
