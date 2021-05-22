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

  worksheet.properties.defaultRowHeight = 21;

  const borderStyle = {
    top: { style: 'medium' },
    left: { style: 'medium' },
    bottom: { style: 'medium' },
    right: { style: 'medium' },
  }

  const alignmentStyle = {
    vertical: 'middle',
    horizontal: 'center'
  }

  worksheet.columns = [
    { header: 'No.', key: 'idx', width: 10 },
    { header: 'Nama', key: 'nama_jenazah', width: 24 },
    { header: 'Jenis Kelamin', key: 'jenis_kelamin', width: 18 },
    { header: 'Umur (tahun)', key: 'umur_tahun', width: 14 },
    { header: 'Umur (bulan)', key: 'umur_bulan', width: 14 },
    { header: 'Kecamatan', key: 'alamat_kecamatan', width: 18 },
    { header: 'Kelurahan', key: 'alamat_kelurahan', width: 18 },
    { header: 'Tanggal Meninggal', key: 'tanggal_meninggal', width: 18 },
    { header: 'Dasar', key: 'penyebab_dasar_id', width: 10 },
    { header: 'Antara 1', key: 'penyebab_antara_1_id', width: 10 },
    { header: 'Antara 2', key: 'penyebab_antara_2_id', width: 10 },
    { header: 'Langsung', key: 'penyebab_langsung_id', width: 10 },
    { header: 'Petugas Verifikator', key: 'nama_pembuat_surat', width: 32 },
    { header: 'Yg Menandatangani', key: 'nama_penandatangan', width: 32 }
  ];

  const columnHeaders = {
    'idx': 'No.',
    'nama_jenazah': 'Nama',
    'jenis_kelamin': 'Jenis Kelamin', 
    'umur_tahun': 'Umur (tahun)', 
    'umur_bulan': 'Umur (bulan)', 
    'alamat_kecamatan': 'Kecamatan', 
    'alamat_kelurahan': 'Kelurahan', 
    'tanggal_meninggal': 'Tanggal Meninggal', 
    'penyebab_dasar_id': 'Dasar', 
    'penyebab_antara_1_id': 'Antara 1', 
    'penyebab_antara_2_id': 'Antara 2', 
    'penyebab_langsung_id': 'Langsung', 
    'nama_pembuat_surat': 'Petugas Verifikator', 
    'nama_penandatangan': 'Yg Menandatangani' 
  }

  worksheet.addRow(columnHeaders);
  worksheet.addRow(columnHeaders);

  filteredLogsByDateRange.forEach((log, idx) => {
    worksheet.addRow({idx, ...log});
  });

  worksheet.mergeCells('A1:N1'); worksheet.getCell('A1').value = 'Register SKMK';

  worksheet.mergeCells('A2:A3');
  worksheet.mergeCells('B2:B3');
  worksheet.mergeCells('C2:C3');
  worksheet.mergeCells('D2:E2'); worksheet.getCell('D2').value = 'Umur'; //umur tahun dan bulan
  worksheet.mergeCells('F2:F3');
  worksheet.mergeCells('G2:G3');
  worksheet.mergeCells('H2:H3');
  worksheet.mergeCells('I2:L2'); worksheet.getCell('I2').value = 'Diagnosa'; //diagnosa
  worksheet.mergeCells('M2:M3');
  worksheet.mergeCells('N2:N3');

  const cellName = (col, row) => {
    return `${String.fromCharCode(65 + col)}${row + 1}`
  }

  worksheet.getCell('A1').font = { size: 14 }

  for (let i=0; i < worksheet.columnCount; i++) {
    for (let j=0; j < worksheet.rowCount; j++) {
      worksheet.getCell(`${cellName(i, j)}`).alignment = alignmentStyle;
      if (j+1 === 1) continue;
      worksheet.getCell(`${cellName(i, j)}`).border = borderStyle;
    }
  };

  //await workbook.xlsx.writeBuffer('skmk-log');

  await workbook.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      FileSaver.saveAs(blob, 'skmk-log.xlsx');
  });

  return filteredLogsByDateRange;
}