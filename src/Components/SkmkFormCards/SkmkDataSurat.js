import { Card, Col, DatePicker, Input, Row } from 'antd';
import React from 'react';

const SkmkDataSurat = () => {
  
  return (
    <Card
      title='Data Surat'
      headStyle={{backgroundColor: '#1D914A', color: '#FFFFFF'}}
    >
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Pembuat Surat</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Nama'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Surat</p>
        </Col>
        <Col span={4}>
          <Input
            placeholder='No. Urut'
          />
        </Col>
        <Col span={3}>
          <p> / SKMK-KD / </p>
        </Col>
        <Col span={4}>
          <Input
            placeholder='Bulan'
          />
        </Col>
        <Col span={1}>
          <p>/</p>
        </Col>
        <Col span={4}>
          <Input
            placeholder='Tahun Surat'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tanggal Surat</p>
        </Col>
        <Col span={6}>
          <DatePicker/>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Petugas yang Menandatangani Surat</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Nama'
          />
        </Col>
      </Row>
    </Card>
  )
}

export default SkmkDataSurat;