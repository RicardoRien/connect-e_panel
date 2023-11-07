import dayjs from 'dayjs';

export function getLastWordsInDate(date: string, position: number): string {
  const formattedDate = dayjs(date).locale('en').format('dddd, MMMM YYYY');
	return formattedDate?.substring(formattedDate.lastIndexOf(",") + 1).trim().split(" ").slice(position).join(" ")
}