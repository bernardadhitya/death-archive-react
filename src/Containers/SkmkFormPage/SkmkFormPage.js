import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SkmkDataDiagnosa from '../../Components/SkmkFormCards/SkmkDataDiagnosa';
import SkmkDataJenazah from '../../Components/SkmkFormCards/SkmkDataJenazah';
import SkmkDataPelapor from '../../Components/SkmkFormCards/SkmkDataPelapor';
import SkmkDataSurat from '../../Components/SkmkFormCards/SkmkDataSurat';

const SkmkFormPage = () => {
  sessionStorage.clear();

  const [namaPembuatSurat,        setNamaPembuatSurat        ] = useState('');
  const [nomorSurat,              setNomorSurat              ] = useState('');
  const [tanggalSurat,            setTanggalSurat            ] = useState(null);
  const [namaPenandatangan,       setNamaPenandatangan       ] = useState('');
  const [nomorIzinPegawai,        setNomorIzinPegawai        ] = useState('');
  
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

  const [namaJenazah,               setNamaJenazah             ] = useState('');
  const [tempatLahirJenazah,        setTempatLahirJenazah      ] = useState('');
  const [umurTahunJenazah,          setUmurTahunJenazah        ] = useState(null);
  const [umurBulanJenazah,          setUmurBulanJenazah        ] = useState(null);
  const [umurHariJenazah,           setUmurHariJenazah         ] = useState(null);
  const [tanggalLahirJenazah,       setTanggalLahirJenazah     ] = useState(null);
  const [pekerjaanJenazah,          setPekerjaanJenazah        ] = useState('');
  const [alamatJalanJenazah,        setAlamatJalanJenazah      ] = useState('');
  const [alamatNomorJenazah,        setAlamatNomorJenazah      ] = useState('');
  const [alamatRtRwJenazah,         setAlamatRtRwJenazah       ] = useState('');
  const [alamatKelurahanJenazah,    setAlamatKelurahanJenazah  ] = useState('');
  const [alamatKecamatanJenazah,    setAlamatKecamatanJenazah  ] = useState('');
  const [alamatKotaJenazah,         setAlamatKotaJenazah       ] = useState('');
  const [alamatKodePosJenazah,      setAlamatKodePosJenazah    ] = useState('');
  const [nomorTeleponJenazah,       setNomorTeleponJenazah     ] = useState('');
  const [nomorKtpJenazah,           setNomorKtpJenazah         ] = useState('');
  const [tanggalMeninggalJenazah,   setTanggalMeninggalJenazah ] = useState(null);
  const [waktuMeninggalJenazah,     setWaktuMeninggalJenazah   ] = useState(null);
  const [tempatMeninggalJenazah,    setTempatMeninggalJenazah  ] = useState('');
  const [nilaiLamaDirawatJenazah,   setNilaiLamaDirawatJenazah ] = useState('');
  const [satuanLamaDirawatJenazah,  setSatuanLamaDirawatJenazah] = useState('');

  const [namaPenyebabUtamaBayi,     setNamaPenyebabUtamaBayi     ] = useState('');
  const [hariPenyebabUtamaBayi,     setHariPenyebabUtamaBayi     ] = useState('');
  const [bulanPenyebabUtamaBayi,    setBulanPenyebabUtamaBayi    ] = useState('');
  const [tahunPenyebabUtamaBayi,    setTahunPenyebabUtamaBayi    ] = useState('');
  const [jamPenyebabUtamaBayi,      setJamPenyebabUtamaBayi      ] = useState('');
  const [menitPenyebabUtamaBayi,    setMenitPenyebabUtamaBayi    ] = useState('');
  const [icdxPenyebabUtamaBayi,     setIcdxPenyebabUtamaBayi     ] = useState('');
  const [namaPenyebabLainnyaBayi,   setNamaPenyebabLainnyaBayi   ] = useState('');
  const [hariPenyebabLainnyaBayi,   setHariPenyebabLainnyaBayi   ] = useState('');
  const [bulanPenyebabLainnyaBayi,  setBulanPenyebabLainnyaBayi  ] = useState('');
  const [tahunPenyebabLainnyaBayi,  setTahunPenyebabLainnyaBayi  ] = useState('');
  const [jamPenyebabLainnyaBayi,    setJamPenyebabLainnyaBayi    ] = useState('');
  const [menitPenyebabLainnyaBayi,  setMenitPenyebabLainnyaBayi  ] = useState('');
  const [icdxPenyebabLainnyaBayi,   setIcdxPenyebabLainnyaBayi   ] = useState('');
  const [namaPenyebabUtamaIbu,      setNamaPenyebabUtamaIbu      ] = useState('');
  const [hariPenyebabUtamaIbu,      setHariPenyebabUtamaIbu      ] = useState('');
  const [bulanPenyebabUtamaIbu,     setBulanPenyebabUtamaIbu     ] = useState('');
  const [tahunPenyebabUtamaIbu,     setTahunPenyebabUtamaIbu     ] = useState('');
  const [jamPenyebabUtamaIbu,       setJamPenyebabUtamaIbu       ] = useState('');
  const [menitPenyebabUtamaIbu,     setMenitPenyebabUtamaIbu     ] = useState('');
  const [icdxPenyebabUtamaIbu,      setIcdxPenyebabUtamaIbu      ] = useState('');
  const [namaPenyebabLainnyaIbu,    setNamaPenyebabLainnyaIbu    ] = useState('');
  const [hariPenyebabLainnyaIbu,    setHariPenyebabLainnyaIbu    ] = useState('');
  const [bulanPenyebabLainnyaIbu,   setBulanPenyebabLainnyaIbu   ] = useState('');
  const [tahunPenyebabLainnyaIbu,   setTahunPenyebabLainnyaIbu   ] = useState('');
  const [jamPenyebabLainnyaIbu,     setJamPenyebabLainnyaIbu     ] = useState('');
  const [menitPenyebabLainnyaIbu,   setMenitPenyebabLainnyaIbu   ] = useState('');
  const [icdxPenyebabLainnyaIbu,    setIcdxPenyebabLainnyaIbu    ] = useState('');
  const [namaPenyebabLangsung,      setNamaPenyebabLangsung      ] = useState('');
  const [hariPenyebabLangsung,      setHariPenyebabLangsung      ] = useState('');
  const [bulanPenyebabLangsung,     setBulanPenyebabLangsung     ] = useState('');
  const [tahunPenyebabLangsung,     setTahunPenyebabLangsung     ] = useState('');
  const [jamPenyebabLangsung,       setJamPenyebabLangsung       ] = useState('');
  const [menitPenyebabLangsung,     setMenitPenyebabLangsung     ] = useState('');
  const [icdxPenyebabLangsung,      setIcdxPenyebabLangsung      ] = useState('');
  const [namaPenyebabAntara1,       setNamaPenyebabAntara1       ] = useState('');
  const [hariPenyebabAntara1,       setHariPenyebabAntara1       ] = useState('');
  const [bulanPenyebabAntara1,      setBulanPenyebabAntara1      ] = useState('');
  const [tahunPenyebabAntara1,      setTahunPenyebabAntara1      ] = useState('');
  const [jamPenyebabAntara1,        setJamPenyebabAntara1        ] = useState('');
  const [menitPenyebabAntara1,      setMenitPenyebabAntara1      ] = useState('');
  const [icdxPenyebabAntara1,       setIcdxPenyebabAntara1       ] = useState('');
  const [namaPenyebabAntara2,       setNamaPenyebabAntara2       ] = useState('');
  const [hariPenyebabAntara2,       setHariPenyebabAntara2       ] = useState('');
  const [bulanPenyebabAntara2,      setBulanPenyebabAntara2      ] = useState('');
  const [tahunPenyebabAntara2,      setTahunPenyebabAntara2      ] = useState('');
  const [jamPenyebabAntara2,        setJamPenyebabAntara2        ] = useState('');
  const [menitPenyebabAntara2,      setMenitPenyebabAntara2      ] = useState('');
  const [icdxPenyebabAntara2,       setIcdxPenyebabAntara2       ] = useState('');
  const [namaPenyebabDasar,         setNamaPenyebabDasar         ] = useState('');
  const [hariPenyebabDasar,         setHariPenyebabDasar         ] = useState('');
  const [bulanPenyebabDasar,        setBulanPenyebabDasar        ] = useState('');
  const [tahunPenyebabDasar,        setTahunPenyebabDasar        ] = useState('');
  const [jamPenyebabDasar,          setJamPenyebabDasar          ] = useState('');
  const [menitPenyebabDasar,        setMenitPenyebabDasar        ] = useState('');
  const [icdxPenyebabDasar,         setIcdxPenyebabDasar         ] = useState('');
  const [lamaKematian,              setLamaKematian              ] = useState(null);


  const renderDataSurat = () => {
    return (
     <SkmkDataSurat
        namaPembuatSurat={namaPembuatSurat}
        nomorSurat={nomorSurat}
        tanggalSurat={tanggalSurat}
        namaPenandatangan={namaPenandatangan}
        nomorIzinPegawai={nomorIzinPegawai}
        setNamaPembuatSurat={setNamaPembuatSurat}
        setNomorSurat={setNomorSurat}
        setTanggalSurat={setTanggalSurat}
        setNamaPenandatangan={setNamaPenandatangan}
        setNomorIzinPegawai={setNomorIzinPegawai}
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
        nilaiLamaDirawatJenazah={nilaiLamaDirawatJenazah}
        satuanLamaDirawatJenazah={satuanLamaDirawatJenazah}
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
        setNilaiLamaDirawatJenazah={setNilaiLamaDirawatJenazah}
        setSatuanLamaDirawatJenazah={setSatuanLamaDirawatJenazah}
      />
    )
  }

  const renderDataDiagnosa = () => {
    return (
      <SkmkDataDiagnosa
        namaPenyebabUtamaBayi={namaPenyebabUtamaBayi}   
        hariPenyebabUtamaBayi={hariPenyebabUtamaBayi}   
        bulanPenyebabUtamaBayi={bulanPenyebabUtamaBayi}  
        tahunPenyebabUtamaBayi={tahunPenyebabUtamaBayi}  
        jamPenyebabUtamaBayi={jamPenyebabUtamaBayi}    
        menitPenyebabUtamaBayi={menitPenyebabUtamaBayi}  
        icdxPenyebabUtamaBayi={icdxPenyebabUtamaBayi}   
        namaPenyebabLainnyaBayi={namaPenyebabLainnyaBayi} 
        hariPenyebabLainnyaBayi={hariPenyebabLainnyaBayi} 
        bulanPenyebabLainnyaBayi={bulanPenyebabLainnyaBayi}
        tahunPenyebabLainnyaBayi={tahunPenyebabLainnyaBayi}
        jamPenyebabLainnyaBayi={jamPenyebabLainnyaBayi}  
        menitPenyebabLainnyaBayi={menitPenyebabLainnyaBayi}
        icdxPenyebabLainnyaBayi={icdxPenyebabLainnyaBayi} 
        namaPenyebabUtamaIbu={namaPenyebabUtamaIbu}    
        hariPenyebabUtamaIbu={hariPenyebabUtamaIbu}    
        bulanPenyebabUtamaIbu={bulanPenyebabUtamaIbu}   
        tahunPenyebabUtamaIbu={tahunPenyebabUtamaIbu}   
        jamPenyebabUtamaIbu={jamPenyebabUtamaIbu}     
        menitPenyebabUtamaIbu={menitPenyebabUtamaIbu}   
        icdxPenyebabUtamaIbu={icdxPenyebabUtamaIbu}    
        namaPenyebabLainnyaIbu={namaPenyebabLainnyaIbu}  
        hariPenyebabLainnyaIbu={hariPenyebabLainnyaIbu}  
        bulanPenyebabLainnyaIbu={bulanPenyebabLainnyaIbu} 
        tahunPenyebabLainnyaIbu={tahunPenyebabLainnyaIbu} 
        jamPenyebabLainnyaIbu={jamPenyebabLainnyaIbu}   
        menitPenyebabLainnyaIbu={menitPenyebabLainnyaIbu} 
        icdxPenyebabLainnyaIbu={icdxPenyebabLainnyaIbu}  
        namaPenyebabLangsung={namaPenyebabLangsung}    
        hariPenyebabLangsung={hariPenyebabLangsung}    
        bulanPenyebabLangsung={bulanPenyebabLangsung}   
        tahunPenyebabLangsung={tahunPenyebabLangsung}   
        jamPenyebabLangsung={jamPenyebabLangsung}     
        menitPenyebabLangsung={menitPenyebabLangsung}   
        icdxPenyebabLangsung={icdxPenyebabLangsung}    
        namaPenyebabAntara1={namaPenyebabAntara1}     
        hariPenyebabAntara1={hariPenyebabAntara1}     
        bulanPenyebabAntara1={bulanPenyebabAntara1}    
        tahunPenyebabAntara1={tahunPenyebabAntara1}    
        jamPenyebabAntara1={jamPenyebabAntara1}      
        menitPenyebabAntara1={menitPenyebabAntara1}    
        icdxPenyebabAntara1={icdxPenyebabAntara1}     
        namaPenyebabAntara2={namaPenyebabAntara2}     
        hariPenyebabAntara2={hariPenyebabAntara2}     
        bulanPenyebabAntara2={bulanPenyebabAntara2}    
        tahunPenyebabAntara2={tahunPenyebabAntara2}    
        jamPenyebabAntara2={jamPenyebabAntara2}      
        menitPenyebabAntara2={menitPenyebabAntara2}    
        icdxPenyebabAntara2={icdxPenyebabAntara2}     
        namaPenyebabDasar={namaPenyebabDasar}       
        hariPenyebabDasar={hariPenyebabDasar}       
        bulanPenyebabDasar={bulanPenyebabDasar}      
        tahunPenyebabDasar={tahunPenyebabDasar}      
        jamPenyebabDasar={jamPenyebabDasar}        
        menitPenyebabDasar={menitPenyebabDasar}      
        icdxPenyebabDasar={icdxPenyebabDasar}       
        lamaKematian={lamaKematian}
        setNamaPenyebabUtamaBayi     ={setNamaPenyebabUtamaBayi   }
        setHariPenyebabUtamaBayi     ={setHariPenyebabUtamaBayi   }
        setBulanPenyebabUtamaBayi    ={setBulanPenyebabUtamaBayi  }
        setTahunPenyebabUtamaBayi    ={setTahunPenyebabUtamaBayi  }
        setJamPenyebabUtamaBayi      ={setJamPenyebabUtamaBayi    }
        setMenitPenyebabUtamaBayi    ={setMenitPenyebabUtamaBayi  }
        setIcdxPenyebabUtamaBayi     ={setIcdxPenyebabUtamaBayi   }
        setNamaPenyebabLainnyaBayi   ={setNamaPenyebabLainnyaBayi }
        setHariPenyebabLainnyaBayi   ={setHariPenyebabLainnyaBayi }
        setBulanPenyebabLainnyaBayi  ={setBulanPenyebabLainnyaBayi}
        setTahunPenyebabLainnyaBayi  ={setTahunPenyebabLainnyaBayi}
        setJamPenyebabLainnyaBayi    ={setJamPenyebabLainnyaBayi  }
        setMenitPenyebabLainnyaBayi  ={setMenitPenyebabLainnyaBayi}
        setIcdxPenyebabLainnyaBayi   ={setIcdxPenyebabLainnyaBayi }
        setNamaPenyebabUtamaIbu      ={setNamaPenyebabUtamaIbu    }
        setHariPenyebabUtamaIbu      ={setHariPenyebabUtamaIbu    }
        setBulanPenyebabUtamaIbu     ={setBulanPenyebabUtamaIbu   }
        setTahunPenyebabUtamaIbu     ={setTahunPenyebabUtamaIbu   }
        setJamPenyebabUtamaIbu       ={setJamPenyebabUtamaIbu     }
        setMenitPenyebabUtamaIbu     ={setMenitPenyebabUtamaIbu   }
        setIcdxPenyebabUtamaIbu      ={setIcdxPenyebabUtamaIbu    }
        setNamaPenyebabLainnyaIbu    ={setNamaPenyebabLainnyaIbu  }
        setHariPenyebabLainnyaIbu    ={setHariPenyebabLainnyaIbu  }
        setBulanPenyebabLainnyaIbu   ={setBulanPenyebabLainnyaIbu }
        setTahunPenyebabLainnyaIbu   ={setTahunPenyebabLainnyaIbu }
        setJamPenyebabLainnyaIbu     ={setJamPenyebabLainnyaIbu   }
        setMenitPenyebabLainnyaIbu   ={setMenitPenyebabLainnyaIbu }
        setIcdxPenyebabLainnyaIbu    ={setIcdxPenyebabLainnyaIbu  }
        setNamaPenyebabLangsung      ={setNamaPenyebabLangsung    }
        setHariPenyebabLangsung      ={setHariPenyebabLangsung    }
        setBulanPenyebabLangsung     ={setBulanPenyebabLangsung   }
        setTahunPenyebabLangsung     ={setTahunPenyebabLangsung   }
        setJamPenyebabLangsung       ={setJamPenyebabLangsung     }
        setMenitPenyebabLangsung     ={setMenitPenyebabLangsung   }
        setIcdxPenyebabLangsung      ={setIcdxPenyebabLangsung    }
        setNamaPenyebabAntara1       ={setNamaPenyebabAntara1     }
        setHariPenyebabAntara1       ={setHariPenyebabAntara1     }
        setBulanPenyebabAntara1      ={setBulanPenyebabAntara1    }
        setTahunPenyebabAntara1      ={setTahunPenyebabAntara1    }
        setJamPenyebabAntara1        ={setJamPenyebabAntara1      }
        setMenitPenyebabAntara1      ={setMenitPenyebabAntara1    }
        setIcdxPenyebabAntara1       ={setIcdxPenyebabAntara1     }
        setNamaPenyebabAntara2       ={setNamaPenyebabAntara2     }
        setHariPenyebabAntara2       ={setHariPenyebabAntara2     }
        setBulanPenyebabAntara2      ={setBulanPenyebabAntara2    }
        setTahunPenyebabAntara2      ={setTahunPenyebabAntara2    }
        setJamPenyebabAntara2        ={setJamPenyebabAntara2      }
        setMenitPenyebabAntara2      ={setMenitPenyebabAntara2    }
        setIcdxPenyebabAntara2       ={setIcdxPenyebabAntara2     }
        setNamaPenyebabDasar         ={setNamaPenyebabDasar       }
        setHariPenyebabDasar         ={setHariPenyebabDasar       }
        setBulanPenyebabDasar        ={setBulanPenyebabDasar      }
        setTahunPenyebabDasar        ={setTahunPenyebabDasar      }
        setJamPenyebabDasar          ={setJamPenyebabDasar        }
        setMenitPenyebabDasar        ={setMenitPenyebabDasar      }
        setIcdxPenyebabDasar         ={setIcdxPenyebabDasar       }
        setLamaKematian              ={setLamaKematian            }
      />
    )
  }

  const history = useHistory();

  const handleSubmit = () => {
    sessionStorage.setItem('namaPembuatSurat',          namaPembuatSurat);          
    sessionStorage.setItem('nomorSurat',                nomorSurat);                
    sessionStorage.setItem('tanggalSurat',              tanggalSurat);              
    sessionStorage.setItem('namaPenandatangan',         namaPenandatangan);         
    sessionStorage.setItem('nomorIzinPegawai',          nomorIzinPegawai);
    sessionStorage.setItem('namaPelapor',               namaPelapor);               
    sessionStorage.setItem('tempatLahirPelapor',        tempatLahirPelapor);        
    sessionStorage.setItem('tanggalLahirPelapor',       tanggalLahirPelapor);
    sessionStorage.setItem('pekerjaanPelapor',          pekerjaanPelapor);          
    sessionStorage.setItem('alamatJalanPelapor',        alamatJalanPelapor);        
    sessionStorage.setItem('alamatNomorPelapor',        alamatNomorPelapor);        
    sessionStorage.setItem('alamatRtRwPelapor',         alamatRtRwPelapor);         
    sessionStorage.setItem('alamatKelurahanPelapor',    alamatKelurahanPelapor);    
    sessionStorage.setItem('alamatKecamatanPelapor',    alamatKecamatanPelapor);    
    sessionStorage.setItem('alamatKotaPelapor',         alamatKotaPelapor);         
    sessionStorage.setItem('alamatKodePosPelapor',      alamatKodePosPelapor);      
    sessionStorage.setItem('nomorTeleponPelapor',       nomorTeleponPelapor);       
    sessionStorage.setItem('nomorKtpPelapor',           nomorKtpPelapor);           
    sessionStorage.setItem('hubunganPelapor',           hubunganPelapor);           
    sessionStorage.setItem('namaJenazah',               namaJenazah);               
    sessionStorage.setItem('tempatLahirJenazah',        tempatLahirJenazah);        
    sessionStorage.setItem('umurTahunJenazah',          umurTahunJenazah);          
    sessionStorage.setItem('umurBulanJenazah',          umurBulanJenazah);          
    sessionStorage.setItem('umurHariJenazah',           umurHariJenazah);           
    sessionStorage.setItem('tanggalLahirJenazah',       tanggalLahirJenazah);       
    sessionStorage.setItem('pekerjaanJenazah',          pekerjaanJenazah);          
    sessionStorage.setItem('alamatJalanJenazah',        alamatJalanJenazah);        
    sessionStorage.setItem('alamatNomorJenazah',        alamatNomorJenazah);        
    sessionStorage.setItem('alamatRtRwJenazah',         alamatRtRwJenazah);         
    sessionStorage.setItem('alamatKelurahanJenazah',    alamatKelurahanJenazah);    
    sessionStorage.setItem('alamatKecamatanJenazah',    alamatKecamatanJenazah);    
    sessionStorage.setItem('alamatKotaJenazah',         alamatKotaJenazah);         
    sessionStorage.setItem('alamatKodePosJenazah',      alamatKodePosJenazah);      
    sessionStorage.setItem('nomorTeleponJenazah',       nomorTeleponJenazah);       
    sessionStorage.setItem('nomorKtpJenazah',           nomorKtpJenazah);           
    sessionStorage.setItem('tanggalMeninggalJenazah',   tanggalMeninggalJenazah);   
    sessionStorage.setItem('waktuMeninggalJenazah',     waktuMeninggalJenazah);     
    sessionStorage.setItem('tempatMeninggalJenazah',    tempatMeninggalJenazah);    
    sessionStorage.setItem('nilaiLamaDirawatJenazah',   nilaiLamaDirawatJenazah);   
    sessionStorage.setItem('satuanLamaDirawatJenazah',  satuanLamaDirawatJenazah);  
    sessionStorage.setItem('namaPenyebabUtamaBayi',     namaPenyebabUtamaBayi);     
    sessionStorage.setItem('hariPenyebabUtamaBayi',     hariPenyebabUtamaBayi);     
    sessionStorage.setItem('bulanPenyebabUtamaBayi',    bulanPenyebabUtamaBayi);    
    sessionStorage.setItem('tahunPenyebabUtamaBayi',    tahunPenyebabUtamaBayi);    
    sessionStorage.setItem('jamPenyebabUtamaBayi',      jamPenyebabUtamaBayi);      
    sessionStorage.setItem('menitPenyebabUtamaBayi',    menitPenyebabUtamaBayi);    
    sessionStorage.setItem('icdxPenyebabUtamaBayi',     icdxPenyebabUtamaBayi);     
    sessionStorage.setItem('namaPenyebabLainnyaBayi',   namaPenyebabLainnyaBayi);   
    sessionStorage.setItem('hariPenyebabLainnyaBayi',   hariPenyebabLainnyaBayi);   
    sessionStorage.setItem('bulanPenyebabLainnyaBayi',  bulanPenyebabLainnyaBayi);  
    sessionStorage.setItem('tahunPenyebabLainnyaBayi',  tahunPenyebabLainnyaBayi);  
    sessionStorage.setItem('jamPenyebabLainnyaBayi',    jamPenyebabLainnyaBayi);    
    sessionStorage.setItem('menitPenyebabLainnyaBayi',  menitPenyebabLainnyaBayi);  
    sessionStorage.setItem('icdxPenyebabLainnyaBayi',   icdxPenyebabLainnyaBayi);   
    sessionStorage.setItem('namaPenyebabUtamaIbu',      namaPenyebabUtamaIbu);      
    sessionStorage.setItem('hariPenyebabUtamaIbu',      hariPenyebabUtamaIbu);      
    sessionStorage.setItem('bulanPenyebabUtamaIbu',     bulanPenyebabUtamaIbu);     
    sessionStorage.setItem('tahunPenyebabUtamaIbu',     tahunPenyebabUtamaIbu);     
    sessionStorage.setItem('jamPenyebabUtamaIbu',       jamPenyebabUtamaIbu);       
    sessionStorage.setItem('menitPenyebabUtamaIbu',     menitPenyebabUtamaIbu);     
    sessionStorage.setItem('icdxPenyebabUtamaIbu',      icdxPenyebabUtamaIbu);      
    sessionStorage.setItem('namaPenyebabLainnyaIbu',    namaPenyebabLainnyaIbu);    
    sessionStorage.setItem('hariPenyebabLainnyaIbu',    hariPenyebabLainnyaIbu);    
    sessionStorage.setItem('bulanPenyebabLainnyaIbu',   bulanPenyebabLainnyaIbu);   
    sessionStorage.setItem('tahunPenyebabLainnyaIbu',   tahunPenyebabLainnyaIbu);   
    sessionStorage.setItem('jamPenyebabLainnyaIbu',     jamPenyebabLainnyaIbu);     
    sessionStorage.setItem('menitPenyebabLainnyaIbu',   menitPenyebabLainnyaIbu);   
    sessionStorage.setItem('icdxPenyebabLainnyaIbu',    icdxPenyebabLainnyaIbu);    
    sessionStorage.setItem('namaPenyebabLangsung',      namaPenyebabLangsung);      
    sessionStorage.setItem('hariPenyebabLangsung',      hariPenyebabLangsung);      
    sessionStorage.setItem('bulanPenyebabLangsung',     bulanPenyebabLangsung);     
    sessionStorage.setItem('tahunPenyebabLangsung',     tahunPenyebabLangsung);     
    sessionStorage.setItem('jamPenyebabLangsung',       jamPenyebabLangsung);       
    sessionStorage.setItem('menitPenyebabLangsung',     menitPenyebabLangsung);     
    sessionStorage.setItem('icdxPenyebabLangsung',      icdxPenyebabLangsung);      
    sessionStorage.setItem('namaPenyebabAntara1',       namaPenyebabAntara1);       
    sessionStorage.setItem('hariPenyebabAntara1',       hariPenyebabAntara1);       
    sessionStorage.setItem('bulanPenyebabAntara1',      bulanPenyebabAntara1);      
    sessionStorage.setItem('tahunPenyebabAntara1',      tahunPenyebabAntara1);      
    sessionStorage.setItem('jamPenyebabAntara1',        jamPenyebabAntara1);        
    sessionStorage.setItem('menitPenyebabAntara1',      menitPenyebabAntara1);      
    sessionStorage.setItem('icdxPenyebabAntara1',       icdxPenyebabAntara1);       
    sessionStorage.setItem('namaPenyebabAntara2',       namaPenyebabAntara2);       
    sessionStorage.setItem('hariPenyebabAntara2',       hariPenyebabAntara2);       
    sessionStorage.setItem('bulanPenyebabAntara2',      bulanPenyebabAntara2);      
    sessionStorage.setItem('tahunPenyebabAntara2',      tahunPenyebabAntara2);      
    sessionStorage.setItem('jamPenyebabAntara2',        jamPenyebabAntara2);        
    sessionStorage.setItem('menitPenyebabAntara2',      menitPenyebabAntara2);      
    sessionStorage.setItem('icdxPenyebabAntara2',       icdxPenyebabAntara2);       
    sessionStorage.setItem('namaPenyebabDasar',         namaPenyebabDasar);         
    sessionStorage.setItem('hariPenyebabDasar',         hariPenyebabDasar);         
    sessionStorage.setItem('bulanPenyebabDasar',        bulanPenyebabDasar);        
    sessionStorage.setItem('tahunPenyebabDasar',        tahunPenyebabDasar);        
    sessionStorage.setItem('jamPenyebabDasar',          jamPenyebabDasar);          
    sessionStorage.setItem('menitPenyebabDasar',        menitPenyebabDasar);        
    sessionStorage.setItem('icdxPenyebabDasar',         icdxPenyebabDasar);
    sessionStorage.setItem('lamaKematian',              lamaKematian);

    history.push('/skmk/form/display');
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
        onClick={() => handleSubmit()}
      >
        Berikutnya
      </Button>
      <br/><br/><br/><br/>
    </div>
  )
}

export default SkmkFormPage;