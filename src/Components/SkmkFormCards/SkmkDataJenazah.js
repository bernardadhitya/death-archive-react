import { Card, Col, DatePicker, Input, Row, TimePicker } from 'antd';
import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkmkDataJenazah = () => {
  
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
          <Input
            placeholder='Nama'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat / Tanggal Lahir</p>
        </Col>
        <Col span={6}>
          <Input
            placeholder='Kota'
          />
        </Col>
        <Col span={6}>
          <DatePicker/>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Pekerjaan</p>
        </Col>
        <Col span={18}>
          <Input
            placeholder='Pekerjaan'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Alamat</p>
        </Col>
        <Col span={18}>
          <Row gutter={16}>
            <Col span={13}>
              <Input
                placeholder='Nama Jalan'
              />
            </Col>
            <Col span={1}>
              <p>No.</p>
            </Col>
            <Col span={4}>
              <Input
                placeholder='000'
              />
            </Col>
            <Col span={2}>
              <p>RT/RW</p>
            </Col>
            <Col span={4}>
              <Input
                placeholder='000/000'
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                placeholder='Kelurahan/Desa'
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder='Kecamatan'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                placeholder='Kota/Kabupaten'
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder='Kode Pos'
              />
            </Col>
          </Row>
          <div style={{height: '4px'}}></div>
          <Row gutter={16}>
            <Col span={24}>
              <Input
                placeholder='Telp'
              />
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
          <Input
            placeholder='Nomor KTP'
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tanggal Meninggal Dunia</p>
        </Col>
        <Col span={18}>
          <DatePicker/>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Waktu Meninggal</p>
        </Col>
        <Col span={18}>
          <TimePicker/>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Tempat Meninggal</p>
        </Col>
        <Col span={18}>
          <DropdownMenu list={['Rumah Sakit', 'Rumah', 'DoA', 'Lainnya']}/>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <p>Lama dirawat (apabila meninggal di rumah sakit)</p>
        </Col>
        <Col span={6}>
          <Input
            placeholder='Lama Waktu Rawat'
          />
        </Col>
        <Col span={6}>
          <DropdownMenu list={['Jam', 'Hari']}/>
        </Col>
      </Row>
    </Card>
  )
}

export default SkmkDataJenazah;