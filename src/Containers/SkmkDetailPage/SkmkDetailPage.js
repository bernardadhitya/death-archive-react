import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import SkmkDataDiagnosaDisplay from '../../Components/SkmkDetailCards/SkmkDataDiagnosaDisplay';
import SkmkDataJenazahDisplay from '../../Components/SkmkDetailCards/SkmkDataJenazahDisplay';
import SkmkDataPelaporDisplay from '../../Components/SkmkDetailCards/SkmkDataPelaporDisplay';
import SkmkDataSuratDisplay from '../../Components/SkmkDetailCards/SkmkDataSuratDisplay';

const SkmkDetailPage = () => {

  const location = useLocation();
  const history = useHistory();

  const {
    nama_pembuat_surat: namaPembuatSurat,
    nomor_surat: nomorSurat,
    tanggal_surat: tanggalSurat,
    nama_penandatangan: namaPenandatangan,
    nomor_izin_pegawai: nomorIzinPegawai,
    jenazah_skmk: {
      nama_jenazah: namaJenazah,
      tempat_lahir: tempatLahirJenazah,
      tanggal_lahir: tanggalLahirJenazah,
      umur_tahun: umurTahunJenazah,
      umur_bulan: umurBulanJenazah,
      pekerjaan: pekerjaanJenazah,
      alamat: alamatJalanJenazah,
      tanggal_meninggal: tanggalMeninggalJenazah,
      waktu_meninggal: waktuMeninggalJenazah,
      lama_dirawat: nilaiLamaDirawatJenazah,
      ktp: nomorKtpJenazah
    },
    pelapor_skmk: {
      nama_pelapor: namaPelapor,
      tempat_lahir: tempatLahirPelapor,
      tanggal_lahir: tanggalLahirPelapor,
      pekerjaan: pekerjaanPelapor,
      alamat: alamatJalanPelapor,
      hubungan: hubunganPelapor,
      ktp: nomorKtpPelapor
    },
    diagnosa_skmk_list: diagnosaSkmkList
  } = location.state[0];

  const renderDataSurat = () => {
    return (
     <SkmkDataSuratDisplay
      namaPembuatSurat={namaPembuatSurat}
      nomorSurat={nomorSurat}
      tanggalSurat={tanggalSurat}
      namaPenandatangan={namaPenandatangan}
      nomorIzinPegawai={nomorIzinPegawai}
     /> 
    )
  }
  
  const renderDataPelapor = () => {
    return (
      <SkmkDataPelaporDisplay
        namaPelapor={namaPelapor}              
        tempatLahirPelapor={tempatLahirPelapor}              
        tanggalLahirPelapor={tanggalLahirPelapor}          
        pekerjaanPelapor={pekerjaanPelapor}           
        alamatJalanPelapor={alamatJalanPelapor}                  
        nomorKtpPelapor={nomorKtpPelapor}
        hubunganPelapor={hubunganPelapor}                
      />
    )
  }

  const renderDataJenazah = () => {
    return (
      <SkmkDataJenazahDisplay
        namaJenazah={namaJenazah}              
        tempatLahirJenazah={tempatLahirJenazah}         
        umurTahunJenazah={umurTahunJenazah}           
        umurBulanJenazah={umurBulanJenazah}           
        tanggalLahirJenazah={tanggalLahirJenazah}          
        pekerjaanJenazah={pekerjaanJenazah}           
        alamatJalanJenazah={alamatJalanJenazah}             
        nomorKtpJenazah={nomorKtpJenazah}            
        tanggalMeninggalJenazah={tanggalMeninggalJenazah}    
        waktuMeninggalJenazah={waktuMeninggalJenazah}        
        nilaiLamaDirawatJenazah={nilaiLamaDirawatJenazah}
      />
    )
  }

  const renderDataDiagnosa = () => {
    return (
      <SkmkDataDiagnosaDisplay
        diagnosaSkmkList={diagnosaSkmkList}      
      />
    )
  }

  return (
    <div style={{margin: '120px 160px'}}>
      <h1>Pratinjau Surat Keterangan Melapor Kematian (SKMK)</h1>
      <br/>
      {renderDataSurat()}
      <br/><br/>
      {renderDataPelapor()}
      <br/><br/>
      {renderDataJenazah()}
      <br/><br/>
      {renderDataDiagnosa()}
      <br/><br/>
      <Button
        size='large'
        style={{backgroundColor: '#3990B2', float: 'left', color: '#FFFFFF'}}
        onClick={async () => {
          history.push('/skmk/rekap')
        }}
      >
        Kembali
      </Button>
      <br/><br/><br/><br/>
    </div>
  )
}

export default SkmkDetailPage;