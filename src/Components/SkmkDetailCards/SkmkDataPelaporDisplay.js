import React from 'react';
import { Card, Col, Row } from 'antd';
import moment from 'moment';

const SkpkDataPelapor = (props) => {
  const {
    namaPelapor,              
    tempatLahirPelapor,              
    tanggalLahirPelapor,          
    pekerjaanPelapor,           
    alamatJalanPelapor,                  
    nomorKtpPelapor,
    hubunganPelapor,   
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
          <p>{namaPelapor}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat / Tanggal Lahir</p>
        </Col>
        <Col span={18}>
          <p>{`${tempatLahirPelapor}, ${moment(tanggalLahirPelapor).format('LL')}`}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pekerjaan</p>
        </Col>
        <Col span={18}>
          <p>{pekerjaanPelapor}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Alamat</p>
        </Col>
        <Col span={18}>
          <Row gutter={16}>
            <Col span={24}>
              <p>{alamatJalanPelapor}</p>
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
          <p>{nomorKtpPelapor}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Hubungan dengan Mendiang</p>
        </Col>
        <Col span={8}>
          <p>{hubunganPelapor}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SkpkDataPelapor;