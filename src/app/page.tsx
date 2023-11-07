import { ApplicationCalendar } from './components/organism/ApplicationCalendar';
import { LayoutTeacher } from './components/templates/LayoutTeacher';
import { dates, profileData } from './data';

export default function Home() {
  return (
    <LayoutTeacher>
      <ApplicationCalendar
        accordionData={dates}
        profileData={profileData}
      />
    </LayoutTeacher>
  )
}