import { Card, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { icdxList } from '../../Constants/icdx';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkmkDataDiagnosa = (props) => {
  const {
    diagnosaUmum,
    setDiagnosaUmum,
    diagnosaIbuAnak,
    setDiagnosaIbuAnak
  } = props;

  const [lamaKematian, setLamaKematian] = useState(null);

  const renderDiagnosaForm = (diagnosaList = []) => {
    return diagnosaList.map((item, idx) => (
      <Row gutter={16}>
        <Col span={24}>
          <h3>{item}</h3>
        </Col>
        <Col span={6}>
          <p>Nama Penyebab</p>
        </Col>
        <Col span={18}>
          <DropdownMenu list={icdxList.map(icdxItem => icdxItem.penyakit)}/>
        </Col>
        <Col span={6}>
          <p>Selang waktu terjadinya penyakit sampai meninggal</p>
        </Col>
        <Col span={3}>
          <Input
            placeholder='Hari'
          />
        </Col>
        <Col span={3}>
          <Input
            placeholder='Bulan'
          />
        </Col>
        <Col span={3}>
          <Input
            placeholder='Tahun'
          />
        </Col>
        <Col span={3}>
          <Input
            placeholder='Jam'
          />
        </Col>
        <Col span={3}>
          <Input
            placeholder='Menit'
          />
        </Col>
        <Col span={6}>
          <p>Kode ICD-10</p>
        </Col>
        <Col span={18}>
        <DropdownMenu list={icdxList.map(icdxItem => icdxItem.icdx)}/>
        </Col>
      </Row>
    ))
  }

  const renderDiagnosaIbuAnak = () => {
    const diagnosaIbuAnakList = [
      'Penyebab Utama Bayi',
      'Penyebab Lain Bayi',
      'Penyebab Utama Ibu',
      'Penyebab Lain Ibu'
    ];
    return renderDiagnosaForm(diagnosaIbuAnakList);
  }

  const renderDiagnosaUmum = () => {
    const diagnosaUmumList = [
      'Penyebab Langsung',
      'Penyebab Antara 1',
      'Penyebab Antara 2',
      'Penyebab Dasar'
    ];
    return renderDiagnosaForm(diagnosaUmumList);
  }

  const renderDiatasTujuhHari = () => {
    return renderDiagnosaUmum();
  }
  const renderDibawahTujuhHari = () => {

    return (
      <>
        {renderDiagnosaIbuAnak()}
        {renderDiagnosaUmum()}
      </>
    );
  }

  const renderDataDiagnosaForm = () => {
    const dataDiagnosaForms = [renderDibawahTujuhHari(), renderDiatasTujuhHari()];
    return dataDiagnosaForms[lamaKematian];
  }
  
  return (
    <Card
      title='Data Diagnosa'
      headStyle={{backgroundColor: '#1D914A', color: '#FFFFFF'}}
    >
      <Row gutter={16}>
        <Col span={6}>
          <p>Jenjang Umur Jenazah</p>
        </Col>
        <Col span={18}>
          <DropdownMenu 
            list={[
              'Kematian Umur 0-6 Hari Termasuk Lahir Mati',
              'Kematian Umur 7 Hari ke Atas'
            ]}
            onSelect={(item) => setLamaKematian(item)}
          />
        </Col>
      </Row>
      {renderDataDiagnosaForm()}
    </Card>
  )
}

export default SkmkDataDiagnosa;