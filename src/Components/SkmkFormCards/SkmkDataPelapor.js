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
          <p>Nama Pelapor</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Name'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat / Tanggal Lahir</p>
        </Col>
        <Col span={6}>
          <Input
            placeholder='Kota'
          />
        </Col>
        <Col span={6}>
          <DatePicker/>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pekerjaan</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Pekerjaan'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Alamat</p>
        </Col>
        <Col span={18}>
          <Row gutter={16}>
            <Col span={13}>
              <Input
                placeholder='Nama Jalan'
              />
            </Col>
            <Col span={1}>
              <p>No.</p>
            </Col>
            <Col span={4}>
              <Input
                placeholder='000'
              />
            </Col>
            <Col span={2}>
              <p>RT/RW</p>
            </Col>
            <Col span={4}>
              <Input
                placeholder='000/000'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                placeholder='Kelurahan/Desa'
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder='Kecamatan'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                placeholder='Kota/Kabupaten'
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder='Kode Pos'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={24}>
              <Input
                placeholder='Telp'
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{height: '4px'}}></div>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor KTP</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Nomor KTP'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Hubungan dengan Mendiang</p>
        </Col>
        <Col span={8}>
          <DropdownMenu list={['Suami', 'Istri', 'Anak', 'Orang Tua', 'Lainnya']}/>
        </Col>
      </Row>
    </Card>
  )
}

export default SkmkDataPelapor;