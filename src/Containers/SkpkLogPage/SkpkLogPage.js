import { Button, Col, Input, Row, Space, Table, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { getSkpkDetail, getSkpkLogs } from '../../supabase';
import moment from 'moment';
import { useHistory } from 'react-router';
import { PlusOutlined, EyeFilled, DeleteFilled } from '@ant-design/icons';
import './SkpkLogPage.css';

const SkpkLogPage = () => {
  const { Search } = Input;

  const [searchText, setSearchText] = useState('');
  const [searchDate, setSearchDate] = useState(null);

  const stringDiff = (a, b) => a.localeCompare(b, 'en', { numeric: true });

  const [allSkpkData, setAllSkpkData] = useState([]);
  const [skpkData, setSkpkData] = useState([]);

  const history = useHistory();

  const handleRedirect = async (surat_skpk_id) => {
    const fetchedSkpkDetail = await getSkpkDetail(surat_skpk_id);
    console.log(fetchedSkpkDetail);
    history.push(`/skpk/${surat_skpk_id}`, fetchedSkpkDetail);
  }

  const renderActionCell = (surat_skpk_id) => {
    return (
      <Row>
        <Col span={10}>
          <div
            className='action-icon-wrapper'
            style={{backgroundColor: '#3990B2'}}
            onClick={() => handleRedirect(surat_skpk_id)}
          >
            <EyeFilled style={{color: '#FFFFFF', fontSize: '18px'}}/>
          </div>
        </Col>
        <Col span={2}/>
        <Col span={10}>
          <div className='action-icon-wrapper' style={{backgroundColor: '#CD2733'}}>
            <DeleteFilled style={{color: '#FFFFFF', fontSize: '18px'}}/>
          </div>
        </Col>
      </Row>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSkpkLogs = await getSkpkLogs();
      console.log(fetchedSkpkLogs);
      const formattedSkpkLogs = fetchedSkpkLogs.map(log => {
        const {
          surat_skpk_id,
          jenazah_skpk,
          nama_penandatangan,
          diagnosa_skpk_list
        } = log;
        return {
          ...jenazah_skpk,
          nama_penandatangan,
          ...diagnosa_skpk_list,
          aksi: renderActionCell(surat_skpk_id)
        }
      });
      setSkpkData(formattedSkpkLogs);
      setAllSkpkData(formattedSkpkLogs);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const filteredSkpkByNamaJenazah = allSkpkData.filter(logs => {
        const {
          nama_jenazah,
          jenis_kelamin,
          umur_bulan,
          umur_tahun,
          alamat_kecamatan,
          alamat_kelurahan,
          penyebab_dasar_id,
          penyebab_antara_1_id,
          penyebab_antara_2_id,
          penyebab_langsung_id,
          nama_penandatangan
        } = logs ;

        const stringify = (value) => {
          if (value === null) return '';
          return value.toString().toLowerCase();
        }

        return stringify(nama_jenazah).includes(stringify(searchText)) ||
          stringify(jenis_kelamin).includes(stringify(searchText)) ||
          stringify(umur_bulan).includes(stringify(searchText)) ||
          stringify(umur_tahun).includes(stringify(searchText)) ||
          stringify(alamat_kecamatan).includes(stringify(searchText)) ||
          stringify(alamat_kelurahan).includes(stringify(searchText)) ||
          stringify(penyebab_dasar_id).includes(stringify(searchText)) ||
          stringify(penyebab_antara_1_id).includes(stringify(searchText)) ||
          stringify(penyebab_antara_2_id).includes(stringify(searchText)) ||
          stringify(penyebab_langsung_id).includes(stringify(searchText)) ||
          stringify(nama_penandatangan).includes(stringify(searchText))
      })
      setSkpkData(filteredSkpkByNamaJenazah);
      setSearchDate(null);
    }
    fetchData();
  }, [searchText]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchDate === null) {
        setSkpkData(allSkpkData);
      }
      const filteredSkpkByTanggalMeninggal = allSkpkData.filter(logs => {
        return moment(logs.tanggal_meninggal).isSame(moment(searchDate), 'month')
      })
      setSkpkData(filteredSkpkByTanggalMeninggal);
      setSearchText('')
    }
    fetchData();
  }, [searchDate]);

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
    },
    {
      title: 'Aksi',
      dataIndex: 'aksi',
      key: 'aksi',
      width: 100
    }
  ]

  return (
    <div style={{margin: '120px 20px'}}>
      <h1>Detail Surat Keterangan Penyebab Kematian (SKPK)</h1>
      <Row>
        <Col span={6}>
        <p style={{margin: 0, color: '#9F9F9F'}}>FILTER DATA BY MONTH</p>
          <DatePicker
            onChange={value => setSearchDate(value || null)}
            picker="month"
            style={{width: '100%'}}
          />
        </Col>
        <Col span={5}></Col>
        <Col span={6}>
          <div style={{
            float: 'right',
            padding: '24px 40px',
            cursor: 'pointer'
          }}
            onClick={() => history.push('/skpk/form')}
          >
            <Row>
              <Col>
                <PlusOutlined style={{color: '#1D914A', fontSize: '24px', marginRight: '4px'}}/>
              </Col>
              <Col>
                <h3 style={{textDecoration: 'underline'}}>TAMBAH BARU</h3>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={6}>
          <p style={{margin: 0, color: '#9F9F9F'}}>SEARCH</p>
          <Search
            placeholder="Search"
            onSearch={(value) => setSearchText(value || '')}
          />
        </Col>
      </Row>
      <br/>
      <Row>
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