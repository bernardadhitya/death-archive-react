import { Card, Col, DatePicker, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkpkDataSurat = (props) => {
  const {
    namaPembuatSurat,
    nomorSurat,
    tanggalSurat,
    namaPenandatangan,
    setNamaPembuatSurat,
    setNomorSurat,
    setTanggalSurat,
    setNamaPenandatangan,
    namaRsPkm,               
    kodeRsPkm,               
    nomorUrutSurat,          
    nomorRekamMedis,         
    namaPenerima,            
    hubunganPenerima,        
    setNamaRsPkm,       
    setKodeRsPkm,       
    setNomorUrutSurat,  
    setNomorRekamMedis, 
    setNamaPenerima,    
    setHubunganPenerima
  } = props;

  const [nomorUrut, setNomorUrut] = useState(null);
  const [bulanSurat, setBulanSurat] = useState(null);
  const [tahunSurat, setTahunSurat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setNomorSurat(`${nomorUrut}/SKMK-KD/${bulanSurat}/${tahunSurat}`);
    }
    fetchData();
  }, [bulanSurat, tahunSurat, nomorUrut]);

  const renderNomorSuratForm = () => {

    return (
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Surat*</p>
        </Col>
        <Col span={4}>
          <Input
            value={nomorUrut}
            onChange={(e) => setNomorUrut(e.target.value)}
            placeholder='No. Urut'
          />
        </Col>
        <Col span={3}>
          <p> / SKPK-KD / </p>
        </Col>
        <Col span={4}>
          <Input
            value={bulanSurat}
            onChange={(e) => setBulanSurat(e.target.value)}
            placeholder='Bulan'
          />
        </Col>
        <Col span={1}>
          <p>/</p>
        </Col>
        <Col span={4}>
          <Input
            value={tahunSurat}
            onChange={(e) => setTahunSurat(e.target.value)}
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
          <p>Nama RS/PKM*</p>
        </Col>
        <Col span={18}>
          <Input
            value={namaRsPkm}
            onChange={(e) => setNamaRsPkm(e.target.value)}
            placeholder='Nama Rumah Sakit/Puskesmas'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Kode RS/PKM</p>
        </Col>
        <Col span={18}>
          <Input
            value={kodeRsPkm}
            onChange={(e) => setKodeRsPkm(e.target.value)}
            placeholder='Kode Rumah Sakit/Puskesmas'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nomor Rekam Medis</p>
        </Col>
        <Col span={18}>
          <Input
            value={nomorRekamMedis}
            onChange={(e) => setNomorRekamMedis(e.target.value)}
            placeholder='No. Rekam Medis'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Nama Penerima*</p>
        </Col>
        <Col span={18}>
          <Input
            value={namaPenerima}
            onChange={(e) => setNamaPenerima(e.target.value)}
            placeholder='Nama'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Hubungan Dengan Mendiang*</p>
        </Col>
        <Col span={18}>
          <DropdownMenu
            list={['Suami', 'Istri', 'Anak', 'Orang Tua', 'Lainnya']}
            onSelect={(value) => setHubunganPenerima(value)}
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

export default SkpkDataSurat;