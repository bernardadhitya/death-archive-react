import { getSkmkLogsSortedByDate, getSkpkLogsSortedByDate } from './supabase';
import moment from 'moment';
import * as ExcelJS from 'exceljs';
import { AlignmentType, Document, Header, Packer, Paragraph, TextRun, UnderlineType } from 'docx';

var FileSaver = require('file-saver');

const createLogWorkbook = (logs, type) => {
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

  logs.forEach((log, idx) => {
    worksheet.addRow({idx, ...log});
  });

  worksheet.mergeCells('A1:N1'); worksheet.getCell('A1').value = 'Register ${type}';

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
    return '${String.fromCharCode(65 + col)}${row + 1}'
  }

  worksheet.getCell('A1').font = { size: 14 }

  for (let i=0; i < worksheet.columnCount; i++) {
    for (let j=0; j < worksheet.rowCount; j++) {
      worksheet.getCell('${cellName(i, j)}').alignment = alignmentStyle;
      if (j+1 === 1) continue;
      worksheet.getCell('${cellName(i, j)}').border = borderStyle;
    }
  };

  return workbook;
}

export const exportSkmkLogByDate = async (startDate, endDate) => {
  const skmkLogsSortedByDate = await getSkmkLogsSortedByDate();
  const filteredLogsByDateRange = skmkLogsSortedByDate.filter(log => {
    const { tanggal_meninggal } = log;
    return moment(tanggal_meninggal).isAfter(startDate) &&
      moment(tanggal_meninggal).isBefore(endDate);
  })

  const workbook = createLogWorkbook(filteredLogsByDateRange, 'SKMK');

  await workbook.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      FileSaver.saveAs(blob, 'skmk-log.xlsx');
  });

  return filteredLogsByDateRange;
}

export const exportSkpkLogByDate = async (startDate, endDate) => {
  const skpkLogsSortedByDate = await getSkpkLogsSortedByDate();
  const filteredLogsByDateRange = skpkLogsSortedByDate.filter(log => {
    const { tanggal_meninggal } = log;
    return moment(tanggal_meninggal).isAfter(startDate) &&
      moment(tanggal_meninggal).isBefore(endDate);
  })

  const workbook = createLogWorkbook(filteredLogsByDateRange, 'SKPK');

  await workbook.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      console.log(data);
      console.log(blob);
      FileSaver.saveAs(blob, 'skpk-log.xlsx');
  });

  return filteredLogsByDateRange;
}

const createSkpkLogDocs = (log) => {
  const {
    nama_pembuat_surat: namaPembuatSurat,
    nomor_surat: nomorSurat,
    tanggal_surat: tanggalSurat,
    nama_rs_pkm: namaRsPkm,
    kode_rs_pkm: kodeRsPkm,
    no_urut: nomorUrutSurat,
    no_rekam_medis: nomorRekamMedis,
    nama_penerima: namaPenerima,
    hubungan: hubunganPenerima,
    nama_penandatangan: namaPenandatangan,
    jenazah_skpk : {
      nama_jenazah: namaJenazah,
      jenis_kelamin: jenisKelaminJenazah,
      tempat_lahir: tempatLahirJenazah,
      tanggal_lahir: tanggalLahirJenazah,
      umur_tahun: umurTahunJenazah,
      umur_bulan: umurBulanJenazah,
      pendidikan: pendidikanJenazah,
      alamat: alamatJalanJenazah,
      status_penduduk: statusKependudukanJenazah,
      tanggal_meninggal: tanggalMeninggalJenazah,
      waktu_meninggal: waktuMeninggalJenazah,
      lahir_mati: lahirMatiJenazah,
      tempat_meninggal: tempatMeninggalJenazah,
      lama_dirawat: nilaiLamaDirawatJenazah,
      dasar_diagnosis: dasarDiagnosaJenazah,
      rencana_pemulasaran: rencanaPemulasaranJenazah,
      tanggal_pemulasaran: waktuPemulasaranJenazah,
      status_wanita: statusWanitaJenazah,
      ktp: nomorKtpJenazah,
      pekerjaan: pekerjaanJenazah
    },
    diagnosa_skpk_list: diagnosaSkpkList
  } = log;

  let image = new Image();
  image.src = './Assets/images/kop-surat.png';

  const doc = new Document({
    sections: [{
      properties: {},
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun(
                  {
                    text: 'PEMERINTAH PROVINSI DAERAH KHUSUS IBUKOTA JAKARTA',
                    font: 'Roboto',
                    bold: true,
                    size: 24,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000'
                    },
                  }
                )
              ]}
            ),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun(
                  {
                    text: 'DINAS KESEHATAN',
                    font: 'Roboto',
                    bold: true,
                    size: 24,
                    underline: {
                      type: UnderlineType.SINGLE,
                      color: '000000'
                    },
                  }
                )
              ]}
            ),
          ]
        })
      },
      children: [
        new Paragraph({ text: '' }),
        new Paragraph({ text: '' }),
        new Paragraph({ text: '' }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun(
              {
                text: 'SURAT KETERANGAN PENYEBAB KEMATIAN',
                font: 'Roboto',
                bold: true,
                size: 24,
                underline: {
                  type: UnderlineType.SINGLE,
                  color: '000000'
                },
              }
            )
          ]}
        ),
        new Paragraph({ text: '' }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `No. Surat : ${nomorSurat}`,
                font: `Roboto`,
                size: 20
              }
            )
          ]
        }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `Bulan/Tahun Kematian : ${tanggalMeninggalJenazah} Nama RS/PKM : ${namaRsPkm} Kode RS/PKM : ${kodeRsPkm}`,
                font: `Roboto`,
                size: 20
              }
            )
          ],
          spacing: {
            line: 300
          },
        }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `No. Urut Pencatatan Kematian Tiap Bulan : ${nomorUrutSurat}	 No. Rekam Medis : ${nomorRekamMedis}`,
                font: `Roboto`,
                size: 20
              }
            )
          ],
          spacing: {
            line: 300
          },
        }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `Identitas Jenazah`,
                font: `Roboto`,
                size: 20,
                bold: true
              }
            )
          ]
        }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `1.	Nama Lengkap			: ${namaJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `2.	No. Induk Kependudukan	: ${nomorKtpJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `3.	Jenis Kelamin	 		: ${jenisKelaminJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `4.	Tempat/Tanggal Lahir		: ${tempatLahirJenazah}, ${tanggalLahirJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `5.	Pendidikan almarhum/ah	: ${pendidikanJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text:  `6.	Pekerjaan almarhum/ah 	: ${pekerjaanJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `7.	Alamat Sesuai KTP/KK		: ${alamatJalanJenazah} `,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `8.	Status Kependudukan 		: ${statusKependudukanJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `- - - - - - - - - - - - - - - -YANG BERSANGKUTAN DINYATAKAN MENINGGAL DUNIA- - - - - - - - - - - - - - - - `,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ],
          spacing: {
            after: 200
          },
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `9.	Waktu Meninggal		: ${tanggalMeninggalJenazah}, ${waktuMeninggalJenazah}`,
                font: `Roboto`,
                size: 20,
                
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `10.	Umur Saat Meninggal 		: 	0	Hari ( < 29 hari )	           Lahir Mati : ${lahirMatiJenazah ? 'Ya' : 'tidak'}`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `						${umurBulanJenazah}	Bulan ( 29 hari s.d < 5 tahun)`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `						${umurTahunJenazah}	Tahun ( >= 5 tahun )`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `11.	Bila yang meninggal wanita umur 10-54 tahun, Almarhumah dalam keadaan: ${statusWanitaJenazah || '-'}`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `12.	Tempat Meninggal	 	: ${tempatMeninggalJenazah} lama dirawat : ${nilaiLamaDirawatJenazah}`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `13.	Dasar Diagnosis 		: ${dasarDiagnosaJenazah}`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `14.	Rencana Pemulasaran 		: ${rencanaPemulasaranJenazah}		`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `15.	Waktu Pemulasaran		: ${waktuPemulasaranJenazah}`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({ text: `` }),
        new Paragraph({ text: `` }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `									      Jakarta, ${tanggalSurat}`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `Pihak Yang Menerima,							Dokter Yang Menerangkan,`,
                font: `Roboto`,
                size: 20,
              }
            )
          ]
        }),
        new Paragraph({ text: `` }),
        new Paragraph({ text: `` }),
        new Paragraph({ text: `` }),
        new Paragraph({ text: `` }),
        new Paragraph({ text: `` }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `${namaPenerima} `,
                font: `Roboto`,
                size: 20,
                underline: {
                  type: UnderlineType.SINGLE,
                  color: `000000`
                },
              }
            ),
            new TextRun(
              {
                text: `\t\t\t\t\t\t\t\t`,
                font: `Roboto`,
                size: 20,
              }
            ),
            new TextRun(
              {
                text: `${namaPenandatangan}`,
                font: `Roboto`,
                size: 20,
                underline: {
                  type: UnderlineType.SINGLE,
                  color: `000000`
                },
              }
            )
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun(
              {
                text: `${hubunganPenerima} Almarhum/ah`,
                font: `Roboto`,
                size: 20,
                underline: {
                  type: UnderlineType.SINGLE,
                  color: `000000`
                },
              }
            ),
            new TextRun(
              {
                text: `\t\t\t\t\t\t\t`,
                font: `Roboto`,
                size: 20,
              }
            ),
            new TextRun(
              {
                text: `Jabatan & Cap Instansi`,
                font: `Roboto`,
                size: 20,
                underline: {
                  type: UnderlineType.SINGLE,
                  color: `000000`
                },
              }
            )
          ]
        }),
      ],
    }]
  });

  return doc
}

export const exportSkpkDetail = async (skpkDetailData) => {
  const doc = createSkpkLogDocs(skpkDetailData)

  Packer.toBuffer(doc).then((buffer) => {
    const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})
    FileSaver.saveAs(blob, 'skpk');
  })
}