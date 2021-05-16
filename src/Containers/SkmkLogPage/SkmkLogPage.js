import { Col, Row, Table } from 'antd';
import React from 'react';
import './SkmkLogPage.css';

const SkmkLogPage = () => {
  
  const columns = [
    {
      title: 'No',
      dataIndex: 'nomor',
      key: 'nomor',
      width: 100,
    },
    {
      title: 'Nama Jenazah',
      dataIndex: 'nama_jenazah',
      key: 'nama_jenazah',
      width: 100,
    },
    {
      title: 'Jenis Kelamin',
      dataIndex: 'jenis_kelamin',
      key: 'jenis_kelamin',
      width: 100,
    },
    {
      title: 'Umur',
      children: [
        {
          title: 'Tahun',
          dataIndex: 'umur_tahun',
          key: 'umur_tahun',
          width: 100,
        },
        {
          title: 'Bulan',
          dataIndex: 'umur_bulan',
          key: 'umur_bulan',
          width: 100,
        }
      ]
    },
    {
      title: 'Kecamatan',
      dataIndex: 'alamat_kecamatan',
      key: 'alamat_kecamatan',
      width: 100,
    },
    {
      title: 'Kelurahan',
      dataIndex: 'alamat_kelurahan',
      key: 'alamat_kelurahan',
      width: 100,
    },
    {
      title: 'Tgl. Meninggal',
      dataIndex: 'tanggal_meninggal',
      key: 'tanggal_meninggal',
      width: 100,
    },
    {
      title: 'Diagnosa',
      children: [
        {
          title: 'Dasar',
          dataIndex: 'diagnosa_umum_dasat',
          key: 'diagnosa_umum_dasat',
          width: 100,
        },
        {
          title: 'Antara',
          dataIndex: 'diagnosa_umum_antara_1',
          key: 'diagnosa_umum_antara_1',
          width: 100,
        },
        {
          title: 'Antara',
          dataIndex: 'diagnosa_umum_antara_2',
          key: 'diagnosa_umum_antara_2',
          width: 100,
        },
        {
          title: 'Langsung',
          dataIndex: 'diagnosa_langsung',
          key: 'diagnosa_langsung',
          width: 100,
        }
      ]
    },
    {
      title: 'Penandatangan',
      dataIndex: 'nama_penandatangan',
      key: 'nama_penandatangan',
      width: 150,
    }
  ]

  const data = [];

  return (
    <div style={{margin: '120px 20px'}}>
      <Row>
        <Col span={24}>
          <h1>Database Surat Keterangan Melapor Kematian (SKMK)</h1>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            scroll={{ x: 'calc(700px + 50%)', y: 240 }}
            
          />
        </Col>
      </Row>
    </div>
  )
}

export default SkmkLogPage;