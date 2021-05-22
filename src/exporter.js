import { getSkmkLogsSortedByDate } from "./supabase"
import moment from 'moment';

export const exportSkmkLogByDate = async (startDate, endDate) => {
  console.log({startDate, endDate})
  const skmkLogsSortedByDate = await getSkmkLogsSortedByDate();
  const filteredLogsByDateRange = skmkLogsSortedByDate.filter(log => {
    const { tanggal_meninggal } = log;
    return moment(tanggal_meninggal).isAfter(startDate) &&
      moment(tanggal_meninggal).isBefore(endDate);
  })
  return filteredLogsByDateRange;
}