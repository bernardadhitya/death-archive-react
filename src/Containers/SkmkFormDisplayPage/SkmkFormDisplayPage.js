import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import SkmkDataDiagnosaDisplay from '../../Components/SkmkFormDisplayCards/SkmkDataDiagnosaDisplay';
import SkmkDataJenazahDisplay from '../../Components/SkmkFormDisplayCards/SkmkDataJenazahDisplay';
import SkmkDataPelaporDisplay from '../../Components/SkmkFormDisplayCards/SkmkDataPelaporDisplay';
import SkmkDataSuratDisplay from '../../Components/SkmkFormDisplayCards/SkmkDataSuratDisplay';

const SkmkFormDisplayPage = () => {
  const namaPembuatSurat =         sessionStorage.getItem('namaPembuatSurat');          
  const nomorSurat =               sessionStorage.getItem('nomorSurat');                
  const tanggalSurat =             sessionStorage.getItem('tanggalSurat');              
  const namaPenandatangan =        sessionStorage.getItem('namaPenandatangan');         
  const namaPelapor =              sessionStorage.getItem('namaPelapor');               
  const tempatLahirPelapor =       sessionStorage.getItem('tempatLahirPelapor');        
  const tanggalLahirPelapor =      sessionStorage.getItem('tanggalLahirPelapor');       
  const pekerjaanPelapor =         sessionStorage.getItem('pekerjaanPelapor');          
  const alamatJalanPelapor =       sessionStorage.getItem('alamatJalanPelapor');        
  const alamatNomorPelapor =       sessionStorage.getItem('alamatNomorPelapor');        
  const alamatRtRwPelapor =        sessionStorage.getItem('alamatRtRwPelapor');         
  const alamatKelurahanPelapor =   sessionStorage.getItem('alamatKelurahanPelapor');    
  const alamatKecamatanPelapor =   sessionStorage.getItem('alamatKecamatanPelapor');    
  const alamatKotaPelapor =        sessionStorage.getItem('alamatKotaPelapor');         
  const alamatKodePosPelapor =     sessionStorage.getItem('alamatKodePosPelapor');      
  const nomorTeleponPelapor =      sessionStorage.getItem('nomorTeleponPelapor');       
  const nomorKtpPelapor =          sessionStorage.getItem('nomorKtpPelapor');           
  const hubunganPelapor =          sessionStorage.getItem('hubunganPelapor');           
  const namaJenazah =              sessionStorage.getItem('namaJenazah');               
  const tempatLahirJenazah =       sessionStorage.getItem('tempatLahirJenazah');        
  const umurTahunJenazah =         sessionStorage.getItem('umurTahunJenazah');          
  const umurBulanJenazah =         sessionStorage.getItem('umurBulanJenazah');          
  const umurHariJenazah =          sessionStorage.getItem('umurHariJenazah');           
  const tanggalLahirJenazah =      sessionStorage.getItem('tanggalLahirJenazah');       
  const pekerjaanJenazah =         sessionStorage.getItem('pekerjaanJenazah');          
  const alamatJalanJenazah =       sessionStorage.getItem('alamatJalanJenazah');        
  const alamatNomorJenazah =       sessionStorage.getItem('alamatNomorJenazah');        
  const alamatRtRwJenazah =        sessionStorage.getItem('alamatRtRwJenazah');         
  const alamatKelurahanJenazah =   sessionStorage.getItem('alamatKelurahanJenazah');    
  const alamatKecamatanJenazah =   sessionStorage.getItem('alamatKecamatanJenazah');    
  const alamatKotaJenazah =        sessionStorage.getItem('alamatKotaJenazah');         
  const alamatKodePosJenazah =     sessionStorage.getItem('alamatKodePosJenazah');      
  const nomorTeleponJenazah =      sessionStorage.getItem('nomorTeleponJenazah');       
  const nomorKtpJenazah =          sessionStorage.getItem('nomorKtpJenazah');           
  const tanggalMeninggalJenazah =  sessionStorage.getItem('tanggalMeninggalJenazah');   
  const waktuMeninggalJenazah =    sessionStorage.getItem('waktuMeninggalJenazah');     
  const tempatMeninggalJenazah =   sessionStorage.getItem('tempatMeninggalJenazah');    
  const nilaiLamaDirawatJenazah =  sessionStorage.getItem('nilaiLamaDirawatJenazah');   
  const satuanLamaDirawatJenazah = sessionStorage.getItem('satuanLamaDirawatJenazah');  
  const namaPenyebabUtamaBayi =    sessionStorage.getItem('namaPenyebabUtamaBayi');     
  const hariPenyebabUtamaBayi =    sessionStorage.getItem('hariPenyebabUtamaBayi');     
  const bulanPenyebabUtamaBayi =   sessionStorage.getItem('bulanPenyebabUtamaBayi');    
  const tahunPenyebabUtamaBayi =   sessionStorage.getItem('tahunPenyebabUtamaBayi');    
  const jamPenyebabUtamaBayi =     sessionStorage.getItem('jamPenyebabUtamaBayi');      
  const menitPenyebabUtamaBayi =   sessionStorage.getItem('menitPenyebabUtamaBayi');    
  const icdxPenyebabUtamaBayi =    sessionStorage.getItem('icdxPenyebabUtamaBayi');     
  const namaPenyebabLainnyaBayi =  sessionStorage.getItem('namaPenyebabLainnyaBayi');   
  const hariPenyebabLainnyaBayi =  sessionStorage.getItem('hariPenyebabLainnyaBayi');   
  const bulanPenyebabLainnyaBayi = sessionStorage.getItem('bulanPenyebabLainnyaBayi');  
  const tahunPenyebabLainnyaBayi = sessionStorage.getItem('tahunPenyebabLainnyaBayi');  
  const jamPenyebabLainnyaBayi =   sessionStorage.getItem('jamPenyebabLainnyaBayi');    
  const menitPenyebabLainnyaBayi = sessionStorage.getItem('menitPenyebabLainnyaBayi');  
  const icdxPenyebabLainnyaBayi =  sessionStorage.getItem('icdxPenyebabLainnyaBayi');   
  const namaPenyebabUtamaIbu =     sessionStorage.getItem('namaPenyebabUtamaIbu');      
  const hariPenyebabUtamaIbu =     sessionStorage.getItem('hariPenyebabUtamaIbu');      
  const bulanPenyebabUtamaIbu =    sessionStorage.getItem('bulanPenyebabUtamaIbu');     
  const tahunPenyebabUtamaIbu =    sessionStorage.getItem('tahunPenyebabUtamaIbu');     
  const jamPenyebabUtamaIbu =      sessionStorage.getItem('jamPenyebabUtamaIbu');       
  const menitPenyebabUtamaIbu =    sessionStorage.getItem('menitPenyebabUtamaIbu');     
  const icdxPenyebabUtamaIbu =     sessionStorage.getItem('icdxPenyebabUtamaIbu');      
  const namaPenyebabLainnyaIbu =   sessionStorage.getItem('namaPenyebabLainnyaIbu');    
  const hariPenyebabLainnyaIbu =   sessionStorage.getItem('hariPenyebabLainnyaIbu');    
  const bulanPenyebabLainnyaIbu =  sessionStorage.getItem('bulanPenyebabLainnyaIbu');   
  const tahunPenyebabLainnyaIbu =  sessionStorage.getItem('tahunPenyebabLainnyaIbu');   
  const jamPenyebabLainnyaIbu =    sessionStorage.getItem('jamPenyebabLainnyaIbu');     
  const menitPenyebabLainnyaIbu =  sessionStorage.getItem('menitPenyebabLainnyaIbu');   
  const icdxPenyebabLainnyaIbu =   sessionStorage.getItem('icdxPenyebabLainnyaIbu');    
  const namaPenyebabLangsung =     sessionStorage.getItem('namaPenyebabLangsung');      
  const hariPenyebabLangsung =     sessionStorage.getItem('hariPenyebabLangsung');      
  const bulanPenyebabLangsung =    sessionStorage.getItem('bulanPenyebabLangsung');     
  const tahunPenyebabLangsung =    sessionStorage.getItem('tahunPenyebabLangsung');     
  const jamPenyebabLangsung =      sessionStorage.getItem('jamPenyebabLangsung');       
  const menitPenyebabLangsung =    sessionStorage.getItem('menitPenyebabLangsung');     
  const icdxPenyebabLangsung =     sessionStorage.getItem('icdxPenyebabLangsung');      
  const namaPenyebabAntara1 =      sessionStorage.getItem('namaPenyebabAntara1');       
  const hariPenyebabAntara1 =      sessionStorage.getItem('hariPenyebabAntara1');       
  const bulanPenyebabAntara1 =     sessionStorage.getItem('bulanPenyebabAntara1');      
  const tahunPenyebabAntara1 =     sessionStorage.getItem('tahunPenyebabAntara1');      
  const jamPenyebabAntara1 =       sessionStorage.getItem('jamPenyebabAntara1');        
  const menitPenyebabAntara1 =     sessionStorage.getItem('menitPenyebabAntara1');      
  const icdxPenyebabAntara1 =      sessionStorage.getItem('icdxPenyebabAntara1');       
  const namaPenyebabAntara2 =      sessionStorage.getItem('namaPenyebabAntara2');       
  const hariPenyebabAntara2 =      sessionStorage.getItem('hariPenyebabAntara2');       
  const bulanPenyebabAntara2 =     sessionStorage.getItem('bulanPenyebabAntara2');      
  const tahunPenyebabAntara2 =     sessionStorage.getItem('tahunPenyebabAntara2');      
  const jamPenyebabAntara2 =       sessionStorage.getItem('jamPenyebabAntara2');        
  const menitPenyebabAntara2 =     sessionStorage.getItem('menitPenyebabAntara2');      
  const icdxPenyebabAntara2 =      sessionStorage.getItem('icdxPenyebabAntara2');       
  const namaPenyebabDasar =        sessionStorage.getItem('namaPenyebabDasar');         
  const hariPenyebabDasar =        sessionStorage.getItem('hariPenyebabDasar');         
  const bulanPenyebabDasar =       sessionStorage.getItem('bulanPenyebabDasar');        
  const tahunPenyebabDasar =       sessionStorage.getItem('tahunPenyebabDasar');        
  const jamPenyebabDasar =         sessionStorage.getItem('jamPenyebabDasar');          
  const menitPenyebabDasar =       sessionStorage.getItem('menitPenyebabDasar');        
  const icdxPenyebabDasar =        sessionStorage.getItem('icdxPenyebabDasar');       

  const renderDataSurat = () => {
    return (
     <SkmkDataSuratDisplay
        namaPembuatSurat={namaPembuatSurat}
        nomorSurat={nomorSurat}
        tanggalSurat={tanggalSurat}
        namaPenandatangan={namaPenandatangan}
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
        alamatNomorPelapor={alamatNomorPelapor}           
        alamatRtRwPelapor={alamatRtRwPelapor}            
        alamatKelurahanPelapor={alamatKelurahanPelapor}     
        alamatKecamatanPelapor={alamatKecamatanPelapor}     
        alamatKotaPelapor={alamatKotaPelapor}        
        alamatKodePosPelapor={alamatKodePosPelapor}       
        nomorTeleponPelapor={nomorTeleponPelapor}        
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
      />
    )
  }

  const renderDataDiagnosa = () => {
    return (
      <SkmkDataDiagnosaDisplay
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
        onClick={() => console.log({
          namaPenyebabAntara2, 
          hariPenyebabAntara2, 
          bulanPenyebabAntara2,
          tahunPenyebabAntara2,
          jamPenyebabAntara2,  
          menitPenyebabAntara2,
          icdxPenyebabAntara2
        })}
      >
        Berikutnya
      </Button>
      <br/><br/><br/><br/>
    </div>
  )
}

export default SkmkFormDisplayPage;