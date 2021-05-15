import React from 'react';
import { Card, Col, DatePicker, Input, Row } from 'antd';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkmkDataPelapor = (props) => {
  const {
    namaPelapor,              
    tempatLahirPelapor,              
    tanggalLahirPelapor,          
    pekerjaanPelapor,           
    alamatJalanPelapor,           
    alamatNomorPelapor,           
    alamatRtRwPelapor,            
    alamatKelurahanPelapor,     
    alamatKecamatanPelapor,     
    alamatKotaPelapor,        
    alamatKodePosPelapor,       
    nomorTeleponPelapor,        
    nomorKtpPelapor,
    hubunganPelapor,            
    setNamaPelapor,
    setTempatLahirPelapor,
    setTanggalLahirPelapor,
    setPekerjaanPelapor,
    setAlamatJalanPelapor,
    setAlamatNomorPelapor,
    setAlamatRtRwPelapor,
    setAlamatKelurahanPelapor,
    setAlamatKecamatanPelapor,
    setAlamatKotaPelapor,
    setAlamatKodePosPelapor,
    setNomorTeleponPelapor,
    setNomorKtpPelapor,
    setHubunganPelapor,
  } = props;

  return (
    <Card
      title='Data Pelapor'
      headStyle={{backgroundColor: '#1D914A', color: '#FFFFFF'}}
    >
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Pelapor*</p>
        </Col>
        <Col span={18}>
          <Input
            value={namaPelapor}
            onChange={(e) => setNamaPelapor(e.target.value)}
            placeholder='Name'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat / Tanggal Lahir*</p>
        </Col>
        <Col span={6}>
          <Input
            value={tempatLahirPelapor}
            onChange={(e) => setTempatLahirPelapor(e.target.value)}
            placeholder='Kota'
          />
        </Col>
        <Col span={6}>
          <DatePicker
            value={tanggalLahirPelapor}
            onChange={(value) => setTanggalLahirPelapor(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pekerjaan*</p>
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
            onSelect={(value) => setPekerjaanPelapor(value)}
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
                value={alamatJalanPelapor}
                onChange={(e) => setAlamatJalanPelapor(e.target.value)}
                placeholder='Nama Jalan'
              />
            </Col>
            <Col span={1}>
              <p>No.</p>
            </Col>
            <Col span={4}>
              <Input
                value={alamatNomorPelapor}
                onChange={(e) => setAlamatNomorPelapor(e.target.value)}
                placeholder='000'
              />
            </Col>
            <Col span={2}>
              <p>RT/RW</p>
            </Col>
            <Col span={4}>
              <Input
                value={alamatRtRwPelapor}
                onChange={(e) => setAlamatRtRwPelapor(e.target.value)}
                placeholder='000/000'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                value={alamatKelurahanPelapor}
                onChange={(e) => setAlamatKelurahanPelapor(e.target.value)}
                placeholder='Kelurahan/Desa'
              />
            </Col>
            <Col span={12}>
              <Input
                value={alamatKecamatanPelapor}
                onChange={(e) => setAlamatKecamatanPelapor(e.target.value)}
                placeholder='Kecamatan'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                value={alamatKotaPelapor}
                onChange={(e) => setAlamatKotaPelapor(e.target.value)}
                placeholder='Kota/Kabupaten'
              />
            </Col>
            <Col span={12}>
              <Input
                value={alamatKodePosPelapor}
                onChange={(e) => setAlamatKodePosPelapor(e.target.value)}
                placeholder='Kode Pos'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={24}>
              <Input
                value={nomorTeleponPelapor}
                onChange={(e) => setNomorTeleponPelapor(e.target.value)}
                placeholder='Telp'
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{height: '4px'}}></div>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor KTP*</p>
        </Col>
        <Col span={18}>
          <Input
            value={nomorKtpPelapor}
            onChange={(e) => setNomorKtpPelapor(e.target.value)}
            placeholder='Nomor KTP'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Hubungan dengan Mendiang*</p>
        </Col>
        <Col span={8}>
          <DropdownMenu
            list={['Suami', 'Istri', 'Anak', 'Orang Tua', 'Lainnya']}
            onSelect={(value) => setHubunganPelapor(value)}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default SkmkDataPelapor;