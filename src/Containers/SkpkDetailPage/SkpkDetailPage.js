import { Button, withStyles } from '@material-ui/core';
import { Col, Row } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import SkpkDataDiagnosaDisplay from '../../Components/SkpkDetailCards/SkpkDataDiagnosaDisplay';
import SkpkDataJenazahDisplay from '../../Components/SkpkDetailCards/SkpkDataJenazahDisplay';
import SkpkDataSuratDisplay from '../../Components/SkpkDetailCards/SkpkDataSuratDisplay';
import { DownloadOutlined } from '@ant-design/icons';
import { exportSkpkDetail } from '../../exporter';

const ExportButton = withStyles(() => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#3990B2',
    '&:hover': {
      backgroundColor: '#5DABCA',
    },
    '&:active': {
      color: '#FFFFFF',
      backgroundColor: '#184C69',
    },
  },
}))(Button);

const ColorButton = withStyles(() => ({
  root: {
    color: '#1B1917',
    backgroundColor: '#F6B931',
    float: 'left',
    '&:hover': {
      backgroundColor: '#FFCA55',
    },
    '&:active': {
      color: '#FFFFFF',
      backgroundColor: '#CB8C2E',
    },
  },
}))(Button);

const SkpkDetailPage = () => {

  const location = useLocation();

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
    nomor_izin_pegawai: nomorIzinPegawai,
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
  } = location.state[0];  

  const renderDataSurat = () => {
    return (
     <SkpkDataSuratDisplay
        namaPembuatSurat = {namaPembuatSurat}
        nomorSurat       = {nomorSurat}
        tanggalSurat     = {tanggalSurat}
        namaPenandatangan= {namaPenandatangan}
        namaRsPkm        = {namaRsPkm       }
        kodeRsPkm        = {kodeRsPkm       }
        nomorUrutSurat   = {nomorUrutSurat  }
        nomorRekamMedis  = {nomorRekamMedis }
        namaPenerima     = {namaPenerima    }
        hubunganPenerima = {hubunganPenerima}
        nomorIzinPegawai = {nomorIzinPegawai}
     /> 
    )
  }

  const renderDataJenazah = () => {
    return (
      <SkpkDataJenazahDisplay
        namaJenazah               ={namaJenazah}              
        tempatLahirJenazah        ={tempatLahirJenazah}         
        umurTahunJenazah          ={umurTahunJenazah}           
        umurBulanJenazah          ={umurBulanJenazah}                   
        tanggalLahirJenazah       ={tanggalLahirJenazah}          
        pekerjaanJenazah          ={pekerjaanJenazah}           
        alamatJalanJenazah        ={alamatJalanJenazah}               
        nomorKtpJenazah           ={nomorKtpJenazah}            
        tanggalMeninggalJenazah   ={tanggalMeninggalJenazah}    
        waktuMeninggalJenazah     ={waktuMeninggalJenazah}        
        tempatMeninggalJenazah    ={tempatMeninggalJenazah}       
        nilaiLamaDirawatJenazah   ={nilaiLamaDirawatJenazah}
        jenisKelaminJenazah       ={jenisKelaminJenazah       }
        statusKependudukanJenazah ={statusKependudukanJenazah }
        statusWanitaJenazah       ={statusWanitaJenazah       }
        dasarDiagnosaJenazah      ={dasarDiagnosaJenazah      }
        waktuPemulasaranJenazah   ={waktuPemulasaranJenazah   }
        rencanaPemulasaranJenazah ={rencanaPemulasaranJenazah }
        pendidikanJenazah         ={pendidikanJenazah         }
        lahirMatiJenazah          ={lahirMatiJenazah          }
      />
    )
  }

  const renderDataDiagnosa = () => {
    return (
      <SkpkDataDiagnosaDisplay
        diagnosaSkpkList={diagnosaSkpkList}
      />
    )
  }

  const handleExportDetail = async () => {
    await exportSkpkDetail(location.state[0]);
  }

  const renderActionButtons = () => {
    return (
      <Row>
        <Col span={12}>
          <ColorButton
            onClick={async () => {
              history.push('/skpk/rekap')
            }}
          >
            KEMBALI
          </ColorButton>
        </Col>
        <Col span={12}>
          <div style={{float: 'right'}}>
            <ExportButton
              onClick={() => handleExportDetail()}
            >
              <Row>
                <Col>
                  <DownloadOutlined style={{
                    color: '#FFFFFF',
                    fontSize: '24px',
                    marginRight: '4px'
                  }}/>
                </Col>
                <Col>
                  SIMPAN & EKSPOR
                </Col>
              </Row>
            </ExportButton>
          </div>
        </Col>
      </Row>
    )
  }

  const history = useHistory();

  return (
    <div style={{margin: '120px 160px'}}>
      <h1>Detail Surat Keterangan Penyebab Kematian (SKPK)</h1>
      <br/>
      {renderDataSurat()}
      <br/><br/>
      {renderDataJenazah()}
      <br/><br/>
      {renderDataDiagnosa()}
      <br/><br/>
      {renderActionButtons()}
      <br/><br/><br/><br/>
    </div>
  )
}

export default SkpkDetailPage;