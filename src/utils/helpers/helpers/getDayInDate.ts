import dayjs from 'dayjs';

export function getDayInDate(date: string): string {
  const formattedDate = dayjs(date).locale('en').format('dddd, MMMM YYYY');
	return formattedDate?.substring(0, formattedDate.indexOf(","))
}