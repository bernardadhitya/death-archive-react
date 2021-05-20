import { Card, Col, Row } from 'antd';
import moment from 'moment';
import React from 'react';

const SkpkDataJenazahDisplay = (props) => {
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
    tempatMeninggalJenazah,   
    nilaiLamaDirawatJenazah, 
    jenisKelaminJenazah,      
    statusKependudukanJenazah,
    statusWanitaJenazah,      
    dasarDiagnosaJenazah,     
    waktuPemulasaranJenazah,  
    rencanaPemulasaranJenazah,
    pendidikanJenazah,        
    lahirMatiJenazah             
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
          <p>Nomor Induk Kependudukan</p>
        </Col>
        <Col span={18}>
          <p>{nomorKtpJenazah}</p>
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
          <p>Tempat / Tanggal Lahir</p>
        </Col>
        <Col span={16}>
          <p>{`${tempatLahirJenazah}, ${moment(tanggalLahirJenazah).format('LL')}`}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pendidikan</p>
        </Col>
        <Col span={18}>
          <p>{pendidikanJenazah}</p>
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
      <Row gutter={16}>
        <Col span={6}>
          <p>Status Kependudukan</p>
        </Col>
        <Col span={18}>
          <p>{statusKependudukanJenazah}</p>
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
          <p>Umur</p>
        </Col>
        <Col span={18}>
          <p>{`${umurTahunJenazah} Tahun ${umurBulanJenazah} Bulan`}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Lahir Mati</p>
        </Col>
        <Col span={18}>
          <p>{lahirMatiJenazah ? 'Ya' : 'Tidak'}</p>
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
          <p>{nilaiLamaDirawatJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Dasar Diagnosis</p>
        </Col>
        <Col span={18}>
          <p>{dasarDiagnosaJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Rencan Pemulasaran</p>
        </Col>
        <Col span={18}>
          <p>{rencanaPemulasaranJenazah}</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Waktu Pemulasaran</p>
        </Col>
        <Col span={18}>
          <p>{waktuPemulasaranJenazah}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SkpkDataJenazahDisplay;