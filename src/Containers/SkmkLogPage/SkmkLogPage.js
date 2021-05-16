import { Col, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getSkmkLogs } from '../../supabase';
import moment from 'moment';
//import './SkmkLogPage.css';

const SkmkLogPage = () => {
  
  const stringDiff = (a, b) => a.localeCompare(b, 'en', { numeric: true });

  const columns = [
    {
      title: 'Nama Jenazah',
      dataIndex: 'nama_jenazah',
      key: 'nama_jenazah',
      width: 100,
      sorter: (a, b) => stringDiff(a.nama_jenazah, b.nama_jenazah),
    },
    {
      title: 'Jenis Kelamin',
      dataIndex: 'jenis_kelamin',
      key: 'jenis_kelamin',
      sorter: (a, b) => stringDiff(a.jenis_kelamin, b.jenis_kelamin),
      width: 100,
    },
    {
      title: 'Umur',
      children: [
        {
          title: 'Tahun',
          dataIndex: 'umur_tahun',
          key: 'umur_tahun',
          sorter: (a, b) => parseInt(a.umur_tahun) - parseInt(b.umur_tahun),
          width: 100,
        },
        {
          title: 'Bulan',
          dataIndex: 'umur_bulan',
          key: 'umur_bulan',
          sorter: (a, b) => parseInt(a.umur_bulan) - parseInt(b.umur_bulan),
          width: 100,
        }
      ]
    },
    {
      title: 'Kecamatan',
      dataIndex: 'alamat_kecamatan',
      key: 'alamat_kecamatan',
      sorter: (a, b) => stringDiff(a.alamat_kecamatan, b.alamat_kecamatan),
      width: 100,
    },
    {
      title: 'Kelurahan',
      dataIndex: 'alamat_kelurahan',
      key: 'alamat_kelurahan',
      sorter: (a, b) => stringDiff(a.alamat_kelurahan, b.alamat_kelurahan),
      width: 100,
    },
    {
      title: 'Tgl. Meninggal',
      dataIndex: 'tanggal_meninggal',
      key: 'tanggal_meninggal',
      sorter: (a, b) => {
        const start = moment(a.tanggal_meninggal);
        const end = moment(b.tanggal_meninggal);
        return start.diff(end, 'days');
      },
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
      sorter: (a, b) => stringDiff(a.nama_penandatangan, b.nama_penandatangan),
      
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