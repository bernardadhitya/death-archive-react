import { Card, Col, DatePicker, Input, Row } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

const SkpkDataSurat = (props) => {
  const {
    namaPembuatSurat,
    nomorSurat,
    tanggalSurat,
    namaPenandatangan,
    nomorIzinPegawai
  } = props;
  
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
          <p>{namaPembuatSurat}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Surat</p>
        </Col>
        <Col span={18}>
          <p>{nomorSurat}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tanggal Surat</p>
        </Col>
        <Col span={6}>
          <p>{moment(tanggalSurat).format('LL')}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Petugas yang Menandatangani Surat</p>
        </Col>
        <Col span={18}>
          <p>{namaPenandatangan}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Izin Pegawai</p>
        </Col>
        <Col span={18}>
          <p>{nomorIzinPegawai}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SkpkDataSurat;