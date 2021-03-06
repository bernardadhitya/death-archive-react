import { Card, Col, DatePicker, Input, Row, TimePicker } from 'antd';
import React, { useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkpkDataJenazah = (props) => {
  const {
    namaJenazah,              
    tempatLahirJenazah,         
    umurTahunJenazah,           
    umurBulanJenazah,           
    umurHariJenazah,          
    tanggalLahirJenazah,          
    pekerjaanJenazah,           
    alamatJalanJenazah,           
    alamatNomorJenazah,           
    alamatRtRwJenazah,            
    alamatKelurahanJenazah,     
    alamatKecamatanJenazah,     
    alamatKotaJenazah,        
    alamatKodePosJenazah,       
    nomorTeleponJenazah,        
    nomorKtpJenazah,            
    tanggalMeninggalJenazah,    
    waktuMeninggalJenazah,        
    tempatMeninggalJenazah,       
    lamaDirawatJenazah,
    nilaiLamaDirawatJenazah,
    satuanLamaDirawatJenazah,
    setNamaJenazah,              
    setTempatLahirJenazah,         
    setUmurTahunJenazah,           
    setUmurBulanJenazah,           
    setUmurHariJenazah,          
    setTanggalLahirJenazah,          
    setPekerjaanJenazah,           
    setAlamatJalanJenazah,           
    setAlamatNomorJenazah,           
    setAlamatRtRwJenazah,            
    setAlamatKelurahanJenazah,     
    setAlamatKecamatanJenazah,     
    setAlamatKotaJenazah,        
    setAlamatKodePosJenazah,       
    setNomorTeleponJenazah,        
    setNomorKtpJenazah,            
    setTanggalMeninggalJenazah,    
    setWaktuMeninggalJenazah,        
    setTempatMeninggalJenazah,       
    setNilaiLamaDirawatJenazah,
    setSatuanLamaDirawatJenazah,
    statusKependudukanJenazah,
    statusWanitaJenazah,      
    dasarDiagnosaJenazah,     
    waktuPemulasaranJenazah,  
    rencanaPemulasaranJenazah,
    pendidikanJenazah,        
    lahirMatiJenazah,         
    setStatusKependudukanJenazah,
    setStatusWanitaJenazah,
    setDasarDiagnosaJenazah,
    setWaktuPemulasaranJenazah,
    setRencanaPemulasaranJenazah,
    setPendidikanJenazah,
    setLahirMatiJenazah,
    setJenisKelaminJenazah
  } = props;

  return (
    <Card
      title='Data Jenazah'
      headStyle={{backgroundColor: '#1D914A', color: '#FFFFFF'}}
    >
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Jenazah*</p>
        </Col>
        <Col span={18}>
          <Input
            value={namaJenazah}
            onChange={(e) => setNamaJenazah(e.target.value)}
            placeholder='Nama'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Induk Kependudukan*</p>
        </Col>
        <Col span={18}>
          <Input
            value={nomorKtpJenazah}
            onChange={(e) => setNomorKtpJenazah(e.target.value)}
            placeholder='Nomor KTP'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Jenis Kelamin*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={['Laki-laki', 'Perempuan']}
            onSelect={(value) => setJenisKelaminJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat / Tanggal Lahir*</p>
        </Col>
        <Col span={6}>
          <Input
            value={tempatLahirJenazah}
            onChange={(e) => setTempatLahirJenazah(e.target.value)}
            placeholder='Kota'
          />
        </Col>
        <Col span={6}>
          <DatePicker
            value={tanggalLahirJenazah}
            onChange={(value) => setTanggalLahirJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pendidikan Almarhum/ah*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={[
              'Tidak Sekolah/Tdk Tamat SD',
              'SD',
              'SLTP',
              'SLTA',
              'Akademi/Diploma',
              'Sarjana'
            ]}
            onSelect={(value) => setPendidikanJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pekerjaan Almarhum/ah*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={[
              'Belum/Tidak Bekerja',
              'Sekolah',
              'TNI/POLRI',
              'PNS',
              'Petani',
              'Wiraswasta/jasa',
              'Nelayan',
              'Buruh',
              'Lainnya'
            ]}
            onSelect={(value) => setPekerjaanJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Alamat*</p>
        </Col>
        <Col span={18}>
          <Row gutter={16}>
            <Col span={13}>
              <Input
                value={alamatJalanJenazah}
                onChange={(e) => setAlamatJalanJenazah(e.target.value)}
                placeholder='Nama Jalan'
              />
            </Col>
            <Col span={1}>
              <p>No.</p>
            </Col>
            <Col span={4}>
              <Input
                value={alamatNomorJenazah}
                onChange={(e) => setAlamatNomorJenazah(e.target.value)}
                placeholder='000'
              />
            </Col>
            <Col span={2}>
              <p>RT/RW</p>
            </Col>
            <Col span={4}>
              <Input
                value={alamatRtRwJenazah}
                onChange={(e) => setAlamatRtRwJenazah(e.target.value)}
                placeholder='000/000'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                value={alamatKelurahanJenazah}
                onChange={(e) => setAlamatKelurahanJenazah(e.target.value)}
                placeholder='Kelurahan/Desa'
              />
            </Col>
            <Col span={12}>
              <Input
                value={alamatKecamatanJenazah}
                onChange={(e) => setAlamatKecamatanJenazah(e.target.value)}
                placeholder='Kecamatan'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                value={alamatKotaJenazah}
                onChange={(e) => setAlamatKotaJenazah(e.target.value)}
                placeholder='Kota/Kabupaten'
              />
            </Col>
            <Col span={12}>
              <Input
                value={alamatKodePosJenazah}
                onChange={(e) => setAlamatKodePosJenazah(e.target.value)}
                placeholder='Kode Pos'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={24}>
              <Input
                value={nomorTeleponJenazah}
                onChange={(e) => setNomorTeleponJenazah(e.target.value)}
                placeholder='Telp'
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Status Kependudukan*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={[
              'Penduduk Tetap',
              'Bukan Penduduk Tetap'
            ]}
            onSelect={(value) => setStatusKependudukanJenazah(value)}
          />
        </Col>
      </Row>
      <div style={{height: '4px'}}></div>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tanggal Meninggal Dunia*</p>
        </Col>
        <Col span={18}>
          <DatePicker
            value={tanggalMeninggalJenazah}
            onChange={(value) => setTanggalMeninggalJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Waktu Meninggal*</p>
        </Col>
        <Col span={18}>
          <TimePicker
            value={waktuMeninggalJenazah}
            onChange={(value) => setWaktuMeninggalJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Umur Saat Meninggal*</p>
        </Col>
        <Col span={4}>
          <Input
            value={umurTahunJenazah}
            onChange={(e) => setUmurTahunJenazah(e.target.value)}
            placeholder='Tahun'
          />
        </Col>
        <Col span={4}>
          <Input
            value={umurBulanJenazah}
            onChange={(e) => setUmurBulanJenazah(e.target.value)}
            placeholder='Bulan'
          />
        </Col>
        <Col span={4}>
          <Input
            value={umurHariJenazah}
            onChange={(e) => setUmurHariJenazah(e.target.value)}
            placeholder='Hari'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Lahir Mati*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            byIndex
            list={[
              'Ya',
              'Tidak'
            ]}
            onSelect={(value) => value === '0'}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <p>Bila yang meninggal wanita umur 10-54 tahun, Almarhumah dalam keadaan :</p>
        </Col>
        <Col span={12}>
          <DropdownMenu
            list={[
              'Hamil',
              'Bersalin',
              'Nifas',
              'Lainnya'
            ]}
            onSelect={(value) => setStatusWanitaJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat Meninggal*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={[
              'Rumah Sakit',
              'Rumah',
              'DoA',
              'Lainnya'
            ]}
            onSelect={(value) => setTempatMeninggalJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Lama dirawat (apabila meninggal di rumah sakit)</p>
        </Col>
        <Col span={6}>
          <Input
            value={nilaiLamaDirawatJenazah}
            onChange={(e) => setNilaiLamaDirawatJenazah(e.target.value)}
            placeholder='Lama Waktu Rawat'
          />
        </Col>
        <Col span={6}>
          <DropdownMenu
            list={['Jam', 'Hari']}
            onSelect={(value) => setSatuanLamaDirawatJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Dasar Diagnosis*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={[
              'Rekam Medis',
              'Autopsi Verbal',
              'Autopsi Forensik'
            ]}
            onSelect={(value) => setDasarDiagnosaJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Rencana Pemulasaran*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={[
              'Dikubur',
              'Dikremasi',
              'Transportasi Luar Kota',
              'Transportasi Luar Negri'
            ]}
            onSelect={(value) => setRencanaPemulasaranJenazah(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Waktu Pemulasaran*</p>
        </Col>
        <Col span={6}>
          <DatePicker
            value={waktuPemulasaranJenazah}
            onChange={(value) => setWaktuPemulasaranJenazah(value)}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default SkpkDataJenazah;