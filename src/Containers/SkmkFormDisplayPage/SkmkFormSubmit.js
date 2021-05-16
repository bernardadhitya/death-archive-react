import moment from 'moment';
import { createSkmkEntry } from '../../supabase';

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
const lamaKematian =             sessionStorage.getItem('lamaKematian');  

export const handleSubmitData = async () => {
  //diagnosa umum
  const diagnosaPenyebabLangsung = {
    penyebab      : namaPenyebabLangsung,
    selang_waktu  : `${hariPenyebabLangsung} Hari ${bulanPenyebabLangsung} Bulan ${tahunPenyebabLangsung} Tahun ${jamPenyebabLangsung} Jam ${menitPenyebabLangsung} Menit`,
    icdx          : icdxPenyebabLangsung,
    keterangan    : null
  }
  const diagnosaPenyebabAntara1 = {
    penyebab      : namaPenyebabAntara1,
    selang_waktu  : `${hariPenyebabAntara1} Hari ${bulanPenyebabAntara1} Bulan ${tahunPenyebabAntara1} Tahun ${jamPenyebabAntara1} Jam ${menitPenyebabAntara1} Menit`,
    icdx          : icdxPenyebabAntara1,
    keterangan    : null
  }
  const diagnosaPenyebabAntara2 = {
    penyebab      : namaPenyebabAntara2,
    selang_waktu  : `${hariPenyebabAntara2} Hari ${bulanPenyebabAntara2} Bulan ${tahunPenyebabAntara2} Tahun ${jamPenyebabAntara2} Jam ${menitPenyebabAntara2} Menit`,
    icdx          : icdxPenyebabAntara2,
    keterangan    : null
  }
  const diagnosaPenyebabDasar = {
    penyebab      : namaPenyebabDasar,
    selang_waktu  : `${hariPenyebabDasar} Hari ${bulanPenyebabDasar} Bulan ${tahunPenyebabDasar} Tahun ${jamPenyebabDasar} Jam ${menitPenyebabDasar} Menit`,
    icdx          : icdxPenyebabDasar,
    keterangan    : null
  }
  //diagnosa ibu bayi
  const diagnosaPenyebabUtamaBayi = {
    penyebab      : namaPenyebabUtamaBayi,
    selang_waktu  : `${hariPenyebabUtamaBayi} Hari ${bulanPenyebabUtamaBayi} Bulan ${tahunPenyebabUtamaBayi} Tahun ${jamPenyebabUtamaBayi} Jam ${menitPenyebabUtamaBayi} Menit`,
    icdx          : icdxPenyebabUtamaBayi,
    keterangan    : null
  }
  const diagnosaPenyebabLainnyaBayi = {
    penyebab      : namaPenyebabLainnyaBayi,
    selang_waktu  : `${hariPenyebabLainnyaBayi} Hari ${bulanPenyebabLainnyaBayi} Bulan ${tahunPenyebabLainnyaBayi} Tahun ${jamPenyebabLainnyaBayi} Jam ${menitPenyebabLainnyaBayi} Menit`,
    icdx          : icdxPenyebabLainnyaBayi,
    keterangan    : null
  }
  const diagnosaPenyebabUtamaIbu = {
    penyebab      : namaPenyebabUtamaIbu,
    selang_waktu  : `${hariPenyebabUtamaIbu} Hari ${bulanPenyebabUtamaIbu} Bulan ${tahunPenyebabUtamaIbu} Tahun ${jamPenyebabUtamaIbu} Jam ${menitPenyebabUtamaIbu} Menit`,
    icdx          : icdxPenyebabUtamaIbu,
    keterangan    : null
  }
  const diagnosaPenyebabLainnyaIbu = {
    penyebab      : namaPenyebabLainnyaIbu,
    selang_waktu  : `${hariPenyebabLainnyaIbu} Hari ${bulanPenyebabLainnyaIbu} Bulan ${tahunPenyebabLainnyaIbu} Tahun ${jamPenyebabLainnyaIbu} Jam ${menitPenyebabLainnyaIbu} Menit`,
    icdx          : icdxPenyebabLainnyaIbu,
    keterangan    : null
  }

  const diagnosaUmumData = [
    diagnosaPenyebabLangsung,
    diagnosaPenyebabAntara1,
    diagnosaPenyebabAntara2,
    diagnosaPenyebabDasar
  ].map(diagnosa => diagnosa.icdx !== '' ? diagnosa : null);

  const diagnosaIbuAnakData = [
    diagnosaPenyebabUtamaBayi,
    diagnosaPenyebabLainnyaBayi,
    diagnosaPenyebabUtamaIbu,
    diagnosaPenyebabLainnyaIbu
  ].map(diagnosa => diagnosa.icdx !== '' ? diagnosa : null);

  const jenazahData = {
    nama_jenazah: namaJenazah,
    ktp: nomorKtpJenazah,
    jenis_kelamin: '',
    tempat_lahir: tempatLahirJenazah,
    tanggal_lahir: moment(tanggalLahirJenazah).format('YYYY-MM-DD'),
    umur_tahun: umurTahunJenazah,
    umur_bulan: umurBulanJenazah,
    pekerjaan: pekerjaanJenazah,
    alamat: `${alamatJalanJenazah} no ${alamatNomorJenazah}, RT/RW ${alamatRtRwJenazah}, ${alamatKelurahanJenazah}, ${alamatKecamatanJenazah}, ${alamatKotaJenazah}, ${alamatKodePosJenazah} - ${nomorTeleponJenazah}`,
    alamat_kecamatan: alamatKecamatanJenazah,
    alamat_kelurahan: alamatKelurahanJenazah,
    tanggal_meninggal: moment(tanggalMeninggalJenazah).format('YYYY-MM-DD'),
    waktu_meninggal: moment(waktuMeninggalJenazah).format('HH:mm'),
    tempat_meninggal: tempatMeninggalJenazah,
    lama_dirawat:
      !!nilaiLamaDirawatJenazah ?
      `${nilaiLamaDirawatJenazah} ${satuanLamaDirawatJenazah}` : null
  }

  const pelaporData = {
    nama_pelapor: namaPelapor,
    ktp: nomorKtpPelapor,
    tempat_lahir: tempatLahirPelapor,
    tanggal_lahir: moment(tanggalLahirPelapor).format('YYYY-MM-DD'),
    pekerjaan: pekerjaanPelapor,
    alamat: `${alamatJalanPelapor} no ${alamatNomorPelapor}, RT/RW ${alamatRtRwPelapor}, ${alamatKelurahanPelapor}, ${alamatKecamatanPelapor}, ${alamatKotaPelapor}, ${alamatKodePosPelapor} - ${nomorTeleponPelapor}`,
    alamat_kelurahan: alamatKelurahanPelapor,
    alamat_kecamatan: alamatKecamatanPelapor, 
    hubungan: hubunganPelapor
  }

  const suratSkmkData = {
    nama_pembuat_surat: namaPembuatSurat,
    nomor_surat: nomorSurat,
    tanggal_surat: moment(tanggalSurat).format('YYYY-MM-DD'),
    nama_penandatangan: namaPenandatangan,
  }

  const result = await createSkmkEntry(
    suratSkmkData,
    pelaporData,
    jenazahData,
    diagnosaUmumData,
    diagnosaIbuAnakData,
    lamaKematian,
  );

  console.log('skmk entry:', result);
  return result;
}