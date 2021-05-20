import { Card, Col, Row } from 'antd';
import moment from 'moment';
import React from 'react';

const SkpkDataJenazah = (props) => {
  const {
    namaJenazah,
    tempatLahirJenazah,
    umurTahunJenazah,
    umurBulanJenazah,
    tanggalLahirJenazah,
    pekerjaanJenazah,
    alamatJalanJenazah,
    nomorKtpJenazah,
    tanggalMeninggalJenazah,
    waktuMeninggalJenazah,
    nilaiLamaDirawatJenazah
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
          <p>Umur</p>
        </Col>
        <Col span={18}>
          <p>{`${umurTahunJenazah} Tahun ${umurBulanJenazah} Bulan`}</p>
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
              <p>{alamatJalanJenazah}</p>
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
          <p>{`${waktuMeninggalJenazah.split(':')[0]}:${waktuMeninggalJenazah.split(':')[1]}`}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Lama dirawat (apabila meninggal di rumah sakit)</p>
        </Col>
        <Col span={6}>
          <p>{nilaiLamaDirawatJenazah}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SkpkDataJenazah;