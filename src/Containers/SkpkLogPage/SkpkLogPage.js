import { Col, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getSkpkLogs } from '../../supabase';
import './SkpkLogPage.css';

const SkpkLogPage = () => {
  
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

  const [skpkData, setSkpkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSkpkLogs = await getSkpkLogs();
      console.log(fetchedSkpkLogs);
      const formattedSkpkLogs = fetchedSkpkLogs.map(log => {
        const {jenazah_skpk, nama_penandatangan, diagnosa_skpk_list} = log;
        return {
          ...jenazah_skpk,
          nama_penandatangan,
          ...diagnosa_skpk_list
        }
      });
      console.log(formattedSkpkLogs);
      setSkpkData(formattedSkpkLogs);
    }
    fetchData();
  }, []);

  return (
    <div style={{margin: '120px 20px'}}>
      <Row>
        <Col span={24}>
          <h1>Detail Surat Keterangan Penyebab Kematian (SKPK)</h1>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={skpkData}
            bordered
            size="middle"
            scroll={{ x: 'calc(700px + 50%)', y: 240 }}
            
          />
        </Col>
      </Row>
    </div>
  )
}

export default SkpkLogPage;