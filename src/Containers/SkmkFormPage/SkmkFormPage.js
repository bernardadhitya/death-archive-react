import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import SkmkDataDiagnosa from '../../Components/SkmkFormCards/SkmkDataDiagnosa';
import SkmkDataJenazah from '../../Components/SkmkFormCards/SkmkDataJenazah';
import SkmkDataPelapor from '../../Components/SkmkFormCards/SkmkDataPelapor';
import SkmkDataSurat from '../../Components/SkmkFormCards/SkmkDataSurat';

const SkmkFormPage = () => {
  const [namaPembuatSurat,        setNamaPembuatSurat        ] = useState('');
  const [nomorSurat,              setNomorSurat              ] = useState('');
  const [tanggalSurat,            setTanggalSurat            ] = useState(null);
  const [namaPenandatangan,       setNamaPenandatangan       ] = useState('');
  
  const [namaPelapor,             setNamaPelapor             ] = useState('');
  const [tempatLahirPelapor,      setTempatLahirPelapor      ] = useState('');
  const [tanggalLahirPelapor,     setTanggalLahirPelapor     ] = useState(null);
  const [pekerjaanPelapor,        setPekerjaanPelapor        ] = useState('');
  const [alamatJalanPelapor,      setAlamatJalanPelapor      ] = useState('');
  const [alamatNomorPelapor,      setAlamatNomorPelapor      ] = useState('');
  const [alamatRtRwPelapor,       setAlamatRtRwPelapor       ] = useState('');
  const [alamatKelurahanPelapor,  setAlamatKelurahanPelapor  ] = useState('');
  const [alamatKecamatanPelapor,  setAlamatKecamatanPelapor  ] = useState('');
  const [alamatKotaPelapor,       setAlamatKotaPelapor       ] = useState('');
  const [alamatKodePosPelapor,    setAlamatKodePosPelapor    ] = useState('');
  const [nomorTeleponPelapor,     setNomorTeleponPelapor     ] = useState('');
  const [nomorKtpPelapor,         setNomorKtpPelapor         ] = useState('');
  const [hubunganPelapor,         setHubunganPelapor         ] = useState('');

  const [namaJenazah,             setNamaJenazah             ] = useState('');
  const [tempatLahirJenazah,      setTempatLahirJenazah      ] = useState('');
  const [umurTahunJenazah,        setUmurTahunJenazah        ] = useState(0);
  const [umurBulanJenazah,        setUmurBulanJenazah        ] = useState(0);
  const [umurHariJenazah,         setUmurHariJenazah         ] = useState(0);
  const [tanggalLahirJenazah,     setTanggalLahirJenazah     ] = useState(null);
  const [pekerjaanJenazah,        setPekerjaanJenazah        ] = useState('');
  const [alamatJalanJenazah,      setAlamatJalanJenazah      ] = useState('');
  const [alamatNomorJenazah,      setAlamatNomorJenazah      ] = useState('');
  const [alamatRtRwJenazah,       setAlamatRtRwJenazah       ] = useState('');
  const [alamatKelurahanJenazah,  setAlamatKelurahanJenazah  ] = useState('');
  const [alamatKecamatanJenazah,  setAlamatKecamatanJenazah  ] = useState('');
  const [alamatKotaJenazah,       setAlamatKotaJenazah       ] = useState('');
  const [alamatKodePosJenazah,    setAlamatKodePosJenazah    ] = useState('');
  const [nomorTeleponJenazah,     setNomorTeleponJenazah     ] = useState('');
  const [nomorKtpJenazah,         setNomorKtpJenazah         ] = useState('');
  const [tanggalMeninggalJenazah, setTanggalMeninggalJenazah ] = useState(null);
  const [waktuMeninggalJenazah,   setWaktuMeninggalJenazah   ] = useState(null);
  const [tempatMeninggalJenazah,  setTempatMeninggalJenazah  ] = useState('');
  const [lamaDirawatJenazah,      setLamaDirawatJenazah      ] = useState('');

  const [diagnosaUmum,            setDiagnosaUmum            ] = useState([]);
  const [diagnosaIbuAnak,         setDiagnosaIbuAnak         ] = useState([]);


  const renderDataSurat = () => {
    return (
     <SkmkDataSurat
        namaPembuatSurat={namaPembuatSurat}
        nomorSurat={nomorSurat}
        tanggalSurat={tanggalSurat}
        namaPenandatangan={namaPenandatangan}
        setNamaPembuatSurat={setNamaPembuatSurat}
        setNomorSurat={setNomorSurat}
        setTanggalSurat={setTanggalSurat}
        setNamaPenandatangan={setNamaPenandatangan}
     /> 
    )
  }
  
  const renderDataPelapor = () => {
    return (
      <SkmkDataPelapor
        namaPelapor={namaPelapor}              
        tempatLahirPelapor={tempatLahirPelapor}              
        tanggalLahirPelapor={tanggalLahirPelapor}          
        pekerjaanPelapor={pekerjaanPelapor}           
        alamatJalanPelapor={alamatJalanPelapor}           
        alamatNomorPelapor={alamatNomorPelapor}           
        alamatRtRwPelapor={alamatRtRwPelapor}            
        alamatKelurahanPelapor={alamatKelurahanPelapor}     
        alamatKecamatanPelapor={alamatKecamatanPelapor}     
        alamatKotaPelapor={alamatKotaPelapor}        
        alamatKodePosPelapor={alamatKodePosPelapor}       
        nomorTeleponPelapor={nomorTeleponPelapor}        
        nomorKtpPelapor={nomorKtpPelapor}
        hubunganPelapor={hubunganPelapor}            
        setNamaPelapor={setNamaPelapor}
        setTempatLahirPelapor={setTempatLahirPelapor}
        setTanggalLahirPelapor={setTanggalLahirPelapor}
        setPekerjaanPelapor={setPekerjaanPelapor}
        setAlamatJalanPelapor={setAlamatJalanPelapor}
        setAlamatNomorPelapor={setAlamatNomorPelapor}
        setAlamatRtRwPelapor={setAlamatRtRwPelapor}
        setAlamatKelurahanPelapor={setAlamatKelurahanPelapor}
        setAlamatKecamatanPelapor={setAlamatKecamatanPelapor}
        setAlamatKotaPelapor={setAlamatKotaPelapor}
        setAlamatKodePosPelapor={setAlamatKodePosPelapor}
        setNomorTeleponPelapor={setNomorTeleponPelapor}
        setNomorKtpPelapor={setNomorKtpPelapor}
        setHubunganPelapor={setHubunganPelapor}       
      />
    )
  }

  const renderDataJenazah = () => {
    return (
      <SkmkDataJenazah
        namaJenazah={namaJenazah}              
        tempatLahirJenazah={tempatLahirJenazah}         
        umurTahunJenazah={umurTahunJenazah}           
        umurBulanJenazah={umurBulanJenazah}           
        umurHariJenazah={umurHariJenazah}          
        tanggalLahirJenazah={tanggalLahirJenazah}          
        pekerjaanJenazah={pekerjaanJenazah}           
        alamatJalanJenazah={alamatJalanJenazah}           
        alamatNomorJenazah={alamatNomorJenazah}           
        alamatRtRwJenazah={alamatRtRwJenazah}            
        alamatKelurahanJenazah={alamatKelurahanJenazah}     
        alamatKecamatanJenazah={alamatKecamatanJenazah}     
        alamatKotaJenazah={alamatKotaJenazah}        
        alamatKodePosJenazah={alamatKodePosJenazah}       
        nomorTeleponJenazah={nomorTeleponJenazah}        
        nomorKtpJenazah={nomorKtpJenazah}            
        tanggalMeninggalJenazah={tanggalMeninggalJenazah}    
        waktuMeninggalJenazah={waktuMeninggalJenazah}        
        tempatMeninggalJenazah={tempatMeninggalJenazah}       
        lamaDirawatJenazah={lamaDirawatJenazah}
        setNamaJenazah={setNamaJenazah}              
        setTempatLahirJenazah={setTempatLahirJenazah}         
        setUmurTahunJenazah={setUmurTahunJenazah}           
        setUmurBulanJenazah={setUmurBulanJenazah}           
        setUmurHariJenazah={setUmurHariJenazah}          
        setTanggalLahirJenazah={setTanggalLahirJenazah}          
        setPekerjaanJenazah={setPekerjaanJenazah}           
        setAlamatJalanJenazah={setAlamatJalanJenazah}           
        setAlamatNomorJenazah={setAlamatNomorJenazah}           
        setAlamatRtRwJenazah={setAlamatRtRwJenazah}            
        setAlamatKelurahanJenazah={setAlamatKelurahanJenazah}     
        setAlamatKecamatanJenazah={setAlamatKecamatanJenazah}     
        setAlamatKotaJenazah={setAlamatKotaJenazah}        
        setAlamatKodePosJenazah={setAlamatKodePosJenazah}       
        setNomorTeleponJenazah={setNomorTeleponJenazah}        
        setNomorKtpJenazah={setNomorKtpJenazah}            
        setTanggalMeninggalJenazah={setTanggalMeninggalJenazah}    
        setWaktuMeninggalJenazah={setWaktuMeninggalJenazah}        
        setTempatMeninggalJenazah={setTempatMeninggalJenazah}       
        setLamaDirawatJenazah={setLamaDirawatJenazah}
      />
    )
  }

  const renderDataDiagnosa = () => {
    return (
      <SkmkDataDiagnosa
        diagnosaUmum={diagnosaUmum}
        setDiagnosaUmum={setDiagnosaUmum}
        diagnosaIbuAnak={diagnosaIbuAnak}
        setDiagnosaIbuAnak={setDiagnosaIbuAnak}
      />
    )
  }

  return (
    <div style={{margin: '120px 160px'}}>
      <h1>Input Surat Keterangan Melapor Kematian (SKMK)</h1>
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
        style={{backgroundColor: '#F6B931', float: 'right'}}
      >
        Berikutnya
      </Button>
      <br/><br/><br/><br/>
    </div>
  )
}

export default SkmkFormPage;