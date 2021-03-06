import { Card, Col, DatePicker, Input, Row, TimePicker } from 'antd';
import moment from 'moment';
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
    jenisKelaminJenazah,
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
  } = props;

  return (
    <Card
      title='Data Jenazah'
      headStyle={{backgroundColor: '#1D914A', color: '#FFFFFF'}}
    >
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Jenazah</p>
        </Col>
        <Col span={18}>
          <p>{namaJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat / Tanggal Lahir</p>
        </Col>
        <Col span={16}>
          <p>{`${tempatLahirJenazah}, ${moment(tanggalLahirJenazah).format('LL')}`}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Jenis Kelamin</p>
        </Col>
        <Col span={18}>
          <p>{jenisKelaminJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Umur</p>
        </Col>
        <Col span={18}>
          <p>{`${umurTahunJenazah} Tahun ${umurBulanJenazah} Bulan ${umurHariJenazah} Hari`}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pekerjaan</p>
        </Col>
        <Col span={18}>
          <p>{pekerjaanJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Alamat</p>
        </Col>
        <Col span={18}>
          <Row gutter={16}>
            <Col span={24}>
              <p>{`${alamatJalanJenazah} no ${alamatNomorJenazah}, RT/RW ${alamatRtRwJenazah}, ${alamatKelurahanJenazah}, ${alamatKecamatanJenazah}, ${alamatKotaJenazah}, ${alamatKodePosJenazah} - ${nomorTeleponJenazah}`}</p>
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
          <p>{nomorKtpJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tanggal Meninggal Dunia</p>
        </Col>
        <Col span={18}>
          <p>{moment(tanggalMeninggalJenazah).format('LL')}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Waktu Meninggal</p>
        </Col>
        <Col span={18}>
          <p>{moment(waktuMeninggalJenazah).format('HH:mm')}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat Meninggal</p>
        </Col>
        <Col span={18}>
          <p>{tempatMeninggalJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Lama dirawat (apabila meninggal di rumah sakit)</p>
        </Col>
        <Col span={6}>
          <p>{`${nilaiLamaDirawatJenazah} ${satuanLamaDirawatJenazah}`}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SkpkDataJenazah;