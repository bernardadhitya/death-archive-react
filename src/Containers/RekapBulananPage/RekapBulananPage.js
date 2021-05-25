import { Col, DatePicker, Input, Row, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { deleteSkmkData, getRekapData, getRekapDataByMonth, getSkmkDetail, getSkmkLogs } from '../../supabase';
import moment from 'moment';
import { useHistory } from 'react-router';
import { PlusOutlined, EyeFilled, DeleteFilled, WarningOutlined, DownloadOutlined } from '@ant-design/icons';
import './RekapBulananPage.css';
import Modal from 'antd/lib/modal/Modal';
import { Button } from '@material-ui/core';
import { exportRekamBulanan, exportSkmkLogByDate } from '../../exporter';

const RekapBulananPage = () => {
  const { Search } = Input;
  const { RangePicker } = DatePicker;

  const [searchText, setSearchText] = useState('');
  const [searchDate, setSearchDate] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [exportMonth, setExportMonth] = useState(null);

  const [allRekapData, setAllRekapData] = useState([]);
  const [rekapData, setRekapData] = useState([]);

  const stringDiff = (a, b) => a.localeCompare(b, 'en', { numeric: true });

  const history = useHistory();

  const handleExportData = async () => {
    const sortedRekapData = await exportRekamBulanan(exportMonth);
    setShowModal(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRekapByMonth = await getRekapDataByMonth();
      console.log(fetchedRekapByMonth);
      setRekapData(fetchedRekapByMonth);
      setAllRekapData(fetchedRekapByMonth);
    }
    fetchData();
  }, [refresh]);

  useEffect(() => {
    const fetchData = async () => {
      const filteredRekap = allRekapData.filter(logs => {
        const { icdx, nama } = logs ;

        const stringify = (value) => {
          if (value === null) return '';
          return value.toString().toLowerCase();
        }

        return stringify(icdx).includes(stringify(searchText)) ||
          stringify(nama).includes(stringify(searchText)) 
      })
      setRekapData(filteredRekap);
      setSearchDate(null);
    }
    fetchData();
  }, [searchText]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchDate === null) {
        setRekapData(allRekapData);
      }
      const rekapFilteredByMonth = await getRekapDataByMonth(searchDate)
      setRekapData(rekapFilteredByMonth);
      setSearchText('')
    }
    fetchData();
  }, [searchDate]);

  const columns = [
    {
      title: 'ICDX',
      dataIndex: 'icdx',
      key: 'icdx',
      width: 100,
    },
    {
      title: 'Penyebab',
      dataIndex: 'nama',
      key: 'nama',
      width: 100,
    },
    {
      title: 'Jenis Kelamin',
      children: [
        {
          title: 'Perempuan',
          dataIndex: 'Perempuan',
          key: 'Perempuan',
          width: 100,
        },
        {
          title: 'Laki-laki',
          dataIndex: 'Laki-laki',
          key: 'Laki-laki',
          width: 100,
        }
      ]
    },
    {
      title: 'Umur',
      children: [
        {
          title: '<1 tahun',
          dataIndex: '<1 tahun',
          key: '<1 tahun',
          width: 100,
        },
        {
          title: '1-14 tahun',
          dataIndex: '1-14 tahun',
          key: '1-14 tahun',
          width: 100,
        },
        {
          title: '15-24 tahun',
          dataIndex: '15-24 tahun',
          key: '15-24 tahun',
          width: 100,
        },
        {
          title: '25-44 tahun',
          dataIndex: '25-44 tahun',
          key: '25-44 tahun',
          width: 100,
        },
        {
          title: '>45 tahun',
          dataIndex: '>45 tahun',
          key: '>45 tahun',
          width: 100,
        }
      ]
    },
    {
      title: 'Total',
      dataIndex: 'Total',
      key: 'Total',
      width: 100,
    }
  ]

  const renderExportModal = () => {
    return (
      <Modal
        title='Export Excel'
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: '#F6B931'}}
            onClick={() => handleExportData()}  
          >
            Export
          </Button>
        ]}
      >
        <p>Tanggal Awal</p>
        <Row>
          <Col span={24}>
            <DatePicker
              onChange={value => setExportMonth(value || null)}
              picker="month"
              style={{width: '100%'}}
            />
          </Col>
        </Row>
        <br/>
        <Row gutter={16}>
          <Col span={2}>
            <WarningOutlined style={{fontSize: '24px', color: '#CD2733'}}/>
          </Col>
          <Col span={20}>
            Harap bersabar menunggu hingga proses download selesai dan jangan menutup browser anda!
          </Col>
        </Row>
      </Modal>
    )
  }

  const renderTableMenu = () => {
    return (
      <Row>
        <Col span={6}>
        <p style={{margin: 0, color: '#9F9F9F'}}>FILTER DATA BY MONTH</p>
          <DatePicker
            onChange={value => setSearchDate(value || null)}
            picker="month"
            style={{width: '100%'}}
          />
        </Col>
        <Col span={3}></Col>
        <Col span={4}>
        </Col>
        <Col span={4}>
          <div style={{
            float: 'right',
            padding: '24px 40px',
            cursor: 'pointer'
          }}
            onClick={() => setShowModal(true)}
          >
            <Row>
              <Col>
                <DownloadOutlined style={{color: '#1D914A', fontSize: '24px', marginRight: '4px'}}/>
              </Col>
              <Col>
                <h3 style={{textDecoration: 'underline'}}>EXPORT DATA</h3>
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
    )
  }

  const renderTableContent = () => {
    return (
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={rekapData}
            bordered
            size="middle"
            pagination={false}
          />
        </Col>
      </Row>
    )
  }

  return (
    <div style={{margin: '120px 20px'}}>
      <h1>Halaman Rekap</h1>
      {renderTableMenu()}
      <br/>
      {renderTableContent()}
      <br/><br/>
      {renderExportModal()}
    </div>
  )
}

export default RekapBulananPage;