import { StaticImageData } from "next/image";
import newton from "public/newton.jpg";

export interface ProfileDataInterface {
  name: string;
  location: string;
  avatarTeacher?: StaticImageData | undefined;
}

export interface DatesInterface {
  status: 'completed' | 'booked' | 'busy';
  title: string;
  date: string;
  hour: string;
}

export const profileData: ProfileDataInterface = {
  name: 'Isaac Newton',
  location: 'London, England',
  avatarTeacher: newton ,
}

export const dates: DatesInterface[] = [
  {
    status: 'completed',
    title: 'English Lesson 1',
    date: 'Friday, August 18',
    hour: '09:45 a.m'
  },
  {
    status: 'booked',
    title: 'English Lesson 2',
    date: 'Monday, August 21',
    hour: '09:45 a.m'
  },
  {
    status: 'booked',
    title: 'English Lesson 3',
    date: 'Wednesday, August 23',
    hour: '09:45 a.m'
  },
  {
    status: 'busy',
    title: 'English Lesson 4',
    date: 'Wednesday, August 23',
    hour: '02:00 p.m'
  },
]