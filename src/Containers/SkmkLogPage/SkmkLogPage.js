import { Col, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getSkmkLogs } from '../../supabase';
import './SkmkLogPage.css';

const SkmkLogPage = () => {
  
  const columns = [
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
          dataIndex: 'penyebab_dasar_id',
          key: 'penyebab_dasar_id',
          width: 100,
        },
        {
          title: 'Antara',
          dataIndex: 'penyebab_antara_1_id',
          key: 'penyebab_antara_1_id',
          width: 100,
        },
        {
          title: 'Antara',
          dataIndex: 'penyebab_antara_2_id',
          key: 'penyebab_antara_2_id',
          width: 100,
        },
        {
          title: 'Langsung',
          dataIndex: 'penyebab_langsung_id',
          key: 'penyebab_langsung_id',
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

  const [skmkData, setSkmkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSkmkLogs = await getSkmkLogs();
      console.log(fetchedSkmkLogs);
      const formattedSkmkLogs = fetchedSkmkLogs.map(log => {
        const {jenazah_skmk, nama_penandatangan, diagnosa_skmk_list} = log;
        return {
          ...jenazah_skmk,
          nama_penandatangan,
          ...diagnosa_skmk_list
        }
      });
      console.log(formattedSkmkLogs);
      setSkmkData(formattedSkmkLogs);
    }
    fetchData();
  }, []);

  return (
    <div style={{margin: '120px 20px'}}>
      <Row>
        <Col span={24}>
          <h1>Database Surat Keterangan Melapor Kematian (SKMK)</h1>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={skmkData}
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