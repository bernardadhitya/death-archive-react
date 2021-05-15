import { Card, Col, DatePicker, Input, Row } from 'antd';
import React, { useState } from 'react';

const SkmkDataSurat = (props) => {
  const {
    namaPembuatSurat,
    nomorSurat,
    tanggalSurat,
    namaPenandatangan,
    setNamaPembuatSurat,
    setNomorSurat,
    setTanggalSurat,
    setNamaPenandatangan
  } = props;

  const [nomorUrut, setNomorUrut] = useState(null);
  const [bulanSurat, setBulanSurat] = useState(null);
  const [tahunSurat, setTahunSurat] = useState(null);

  const renderNomorSuratForm = () => {
    
    const handleNomorSurat = () => {
      setNomorSurat(`${nomorUrut}/SKMK-KD/${bulanSurat}/${tahunSurat}`)
    };

    return (
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Surat*</p>
        </Col>
        <Col span={4}>
          <Input
            value={nomorUrut}
            onChange={(e) => {setNomorUrut(e.target.value); handleNomorSurat()}}
            placeholder='No. Urut'
          />
        </Col>
        <Col span={3}>
          <p> / SKMK-KD / </p>
        </Col>
        <Col span={4}>
          <Input
            value={bulanSurat}
            onChange={(e) => {setBulanSurat(e.target.value); handleNomorSurat();}}
            placeholder='Bulan'
          />
        </Col>
        <Col span={1}>
          <p>/</p>
        </Col>
        <Col span={4}>
          <Input
            value={tahunSurat}
            onChange={(e) => {setTahunSurat(e.target.value); handleNomorSurat();}}
            placeholder='Tahun Surat'
          />
        </Col>
      </Row>
    )
  }
  
  return (
    <Card
      title='Data Surat'
      headStyle={{backgroundColor: '#1D914A', color: '#FFFFFF'}}
    >
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Pembuat Surat*</p>
        </Col>
        <Col span={18}>
          <Input
            value={namaPembuatSurat}
            onChange={(e) => setNamaPembuatSurat(e.target.value)}
            placeholder='Nama'
          />
        </Col>
      </Row>
      {renderNomorSuratForm()}
      <Row gutter={16}>
        <Col span={6}>
          <p>Tanggal Surat*</p>
        </Col>
        <Col span={6}>
          <DatePicker
            value={tanggalSurat}
            onChange={(value) => setTanggalSurat(value)}
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Petugas yang Menandatangani Surat*</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Nama'
            value={namaPenandatangan}
            onChange={(e) => setNamaPenandatangan(e.target.value)}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default SkmkDataSurat;