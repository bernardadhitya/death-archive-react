import { Card, Col, Row } from 'antd';
import React from 'react';

const SkpkDataDiagnosa = (props) => {
  const { diagnosaSkmkList } = props;
  const lamaKematian = Object.keys(diagnosaSkmkList).length === 8 ? 0 : 1;

  console.log('lamaKematian:',lamaKematian)

  const renderDiagnosaForm = (diagnosaList = []) => {
    return diagnosaList.map((item, idx) => {
      const {
        judul,
        nama, 
        waktu,
        icdx, 
      } = item;
      return (
        <Row gutter={16}>
          <Col span={24}>
            <h3>{judul}</h3>
          </Col>
          <Col span={6}>
            <p>Nama Penyebab</p>
          </Col>
          <Col span={18}>
            <p>{`${icdx} - ${nama}`}</p>
          </Col>
          <Col span={6}>
            <p>Selang waktu terjadinya penyakit sampai meninggal</p>
          </Col>
          <Col span={18}>
            <p>{waktu}</p>
          </Col>
        </Row>
      )
    })
  }

  const renderDiagnosaIbuAnak = () => {
    if (lamaKematian === 1) return;

    const {
      penyebab_utama_bayi_id,
      penyebab_lain_bayi_id,
      penyebab_utama_ibu_id,
      penyebab_lain_ibu_id
    } = diagnosaSkmkList;

    const diagnosaIbuAnakList = [
      {
        judul:      'Penyebab Utama Bayi',
        nama:       penyebab_utama_bayi_id !== null ? penyebab_utama_bayi_id.penyebab : '-',           
        waktu:      penyebab_utama_bayi_id !== null ? penyebab_utama_bayi_id.selang_waktu: '-',   
        icdx:       penyebab_utama_bayi_id !== null ? penyebab_utama_bayi_id.icdx: '-',           
      },
      {
        judul:      'Penyebab Lain Bayi',
        nama:       penyebab_lain_bayi_id !== null ? penyebab_lain_bayi_id.penyebab : '',    
        waktu:      penyebab_lain_bayi_id !== null ? penyebab_lain_bayi_id.selang_waktu : '-',
        icdx:       penyebab_lain_bayi_id !== null ? penyebab_lain_bayi_id.icdx: '',        
      },
      {
        judul:      'Penyebab Utama Ibu',
        nama:       penyebab_utama_ibu_id !== null ? penyebab_utama_ibu_id.penyebab : '',    
        waktu:      penyebab_utama_ibu_id !== null ? penyebab_utama_ibu_id.selang_waktu : '-',
        icdx:       penyebab_utama_ibu_id !== null ? penyebab_utama_ibu_id.icdx : '',        
      },
      {
        judul:      'Penyebab Lain Ibu',
        nama:       penyebab_lain_ibu_id !== null ? penyebab_lain_ibu_id.penyebab : '',    
        waktu:      penyebab_lain_ibu_id !== null ? penyebab_lain_ibu_id.selang_waktu : '-',
        icdx:       penyebab_lain_ibu_id !== null ? penyebab_lain_ibu_id.icdx : '',          
      }
    ];
    return renderDiagnosaForm(diagnosaIbuAnakList);
  }

  const renderDiagnosaUmum = () => {

    const {
      penyebab_langsung_id,
      penyebab_antara_1_id,
      penyebab_antara_2_id,
      penyebab_dasar_id
    } = diagnosaSkmkList;

    const diagnosaUmumList = [
      {
        judul:      'Penyebab Langsung',
        nama:       penyebab_langsung_id !== null ? penyebab_langsung_id.penyebab : '',    
        waktu:      penyebab_langsung_id !== null ? penyebab_langsung_id.selang_waktu : '-',
        icdx:       penyebab_langsung_id !== null ? penyebab_langsung_id.icdx : '',  
      },
      {
        judul:      'Penyebab Antara 1',
        nama:       penyebab_antara_1_id !== null ? penyebab_antara_1_id.penyebab : '',    
        waktu:      penyebab_antara_1_id !== null ? penyebab_antara_1_id.selang_waktu : '-',
        icdx:       penyebab_antara_1_id !== null ? penyebab_antara_1_id.icdx : '',  
      },
      {
        judul:      'Penyebab Antara 2',
        nama:       penyebab_antara_2_id !== null ? penyebab_antara_2_id.penyebab : '',    
        waktu:      penyebab_antara_2_id !== null ? penyebab_antara_2_id.selang_waktu : '-', 
        icdx:       penyebab_antara_2_id !== null ? penyebab_antara_2_id.icdx : '', 
      },
      {
        judul:      'Penyebab Dasar',
        nama:       penyebab_dasar_id !== null ? penyebab_dasar_id.penyebab : '-',    
        waktu:      penyebab_dasar_id !== null ? penyebab_dasar_id.selang_waktu : '-', 
        icdx:       penyebab_dasar_id !== null ? penyebab_dasar_id.icdx : '-',  
      }
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
          <p>
            {
              lamaKematian === 0 ? 
                'Kematian Umur 0-6 Hari Termasuk Lahir Mati' :
                'Kematian Umur 7 Hari ke Atas'
            }
          </p>
        </Col>
      </Row>
      {renderDataDiagnosaForm()}
    </Card>
  )
}

export default SkpkDataDiagnosa;