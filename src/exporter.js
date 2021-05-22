import { getSkmkLogsSortedByDate } from "./supabase"
import moment from 'moment';

import * as ExcelJS from "exceljs";
var FileSaver = require('file-saver');

export const exportSkmkLogByDate = async (startDate, endDate) => {
  console.log({startDate, endDate})
  const skmkLogsSortedByDate = await getSkmkLogsSortedByDate();
  const filteredLogsByDateRange = skmkLogsSortedByDate.filter(log => {
    const { tanggal_meninggal } = log;
    return moment(tanggal_meninggal).isAfter(startDate) &&
      moment(tanggal_meninggal).isBefore(endDate);
  })

  const workbook = new ExcelJS.Workbook();

  workbook.creator = 'admin';
  workbook.lastModifiedBy = 'admin';
  workbook.created = new Date();
  workbook.modified = new Date();
  workbook.lastPrinted = new Date(2016, 9, 27);

  workbook.calcProperties.fullCalcOnLoad = true;

  workbook.views = [
    {
      x: 0, y: 0, width: 10000, height: 20000,
      firstSheet: 0, activeTab: 1, visibility: 'visible'
    }
  ]

  const worksheet = workbook.addWorksheet('skmk');
  worksheet.state = 'visible';

  worksheet.columns = [
    { header: 'Nama', key: 'nama_jenazah', width: 32 },
    { header: 'Jenis Kelamin', key: 'jenis_kelamin', width: 32 },
    { header: 'Umur (tahun)', key: 'umur_tahun', width: 10 },
    { header: 'Umur (bulan)', key: 'umur_bulan', width: 10 },
    { header: 'Kecamatan', key: 'alamat_kecamatan', width: 10 },
    { header: 'Kelurahan', key: 'alamat_kelurahan', width: 10 },
    { header: 'Tanggal Meninggal', key: 'tanggal_meninggal', width: 32 },
    { header: 'Dasar', key: 'penyebab_dasar_id', width: 10 },
    { header: 'Antara 1', key: 'penyebab_antara_1_id', width: 10 },
    { header: 'Antara 2', key: 'penyebab_antara_2_id', width: 10 },
    { header: 'Langsung', key: 'penyebab_langsung_id', width: 10 },
    { header: 'Petugas Verifikator', key: 'nama_pembuat_surat', width: 32 },
    { header: 'Yg Menandatangani', key: 'nama_penandatangan', width: 32 }
  ];

  filteredLogsByDateRange.map(log => worksheet.addRow(log));

  //await workbook.xlsx.writeBuffer('skmk-log');

  await workbook.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      FileSaver.saveAs(blob, 'skmk-log.xlsx');
  });

  return filteredLogsByDateRange;
}