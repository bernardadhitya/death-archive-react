import { Card, Col, DatePicker, Input, Row } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

const SkmkDataSurat = (props) => {
  const {
    namaPembuatSurat,
    nomorSurat,
    tanggalSurat,
    namaPenandatangan,
    namaRsPkm,       
    kodeRsPkm,       
    nomorUrutSurat,  
    nomorRekamMedis, 
    namaPenerima,    
    hubunganPenerima,
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
          <p>Nama RS/PKM</p>
        </Col>
        <Col span={18}>
          <p>{namaRsPkm}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Kode RS/PKM</p>
        </Col>
        <Col span={18}>
          <p>{kodeRsPkm}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>No. Urut Pencatatan Kematian Tiap Bulan</p>
        </Col>
        <Col span={18}>
          <p>{nomorSurat}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>No. Rekam Medis</p>
        </Col>
        <Col span={18}>
          <p>{nomorRekamMedis}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Penerima</p>
        </Col>
        <Col span={18}>
          <p>{namaPenerima}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Hubungan dengan Mendiang</p>
        </Col>
        <Col span={18}>
          <p>{hubunganPenerima}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SkmkDataSurat;