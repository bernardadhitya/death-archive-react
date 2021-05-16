import { SentimentDissatisfiedOutlined } from '@material-ui/icons';
import { Card, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { icdxList } from '../../Constants/icdx';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkmkDataDiagnosa = (props) => {
  const {lamaKematian} = props;
  const renderDiagnosaForm = (diagnosaList = []) => {
    return diagnosaList.map((item, idx) => {
      const {
        judul,
        nama, 
        hari, 
        bulan, 
        tahun, 
        jam, 
        menit, 
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
            <p>{`${hari} Hari ${bulan} Bulan ${tahun} Tahun ${jam} Jam ${menit} Menit`}</p>
          </Col>
        </Row>
      )
    })
  }

  const renderDiagnosaIbuAnak = () => {
    const diagnosaIbuAnakList = [
      {
        judul:      'Penyebab Utama Bayi',
        nama:       props.namaPenyebabUtamaBayi,    
        hari:       props.hariPenyebabUtamaBayi,  
        bulan:      props.bulanPenyebabUtamaBayi, 
        tahun:      props.tahunPenyebabUtamaBayi, 
        jam:        props.jamPenyebabUtamaBayi,   
        menit:      props.menitPenyebabUtamaBayi, 
        icdx:       props.icdxPenyebabUtamaBayi,
      },
      {
        judul:      'Penyebab Lain Bayi',
        nama:       props.namaPenyebabLainnyaBayi,    
        hari:       props.hariPenyebabLainnyaBayi,  
        bulan:      props.bulanPenyebabLainnyaBayi, 
        tahun:      props.tahunPenyebabLainnyaBayi, 
        jam:        props.jamPenyebabLainnyaBayi,   
        menit:      props.menitPenyebabLainnyaBayi, 
        icdx:       props.icdxPenyebabLainnyaBayi, 
      },
      {
        judul:      'Penyebab Utama Ibu',
        nama:       props.namaPenyebabUtamaIbu,    
        hari:       props.hariPenyebabUtamaIbu,  
        bulan:      props.bulanPenyebabUtamaIbu, 
        tahun:      props.tahunPenyebabUtamaIbu, 
        jam:        props.jamPenyebabUtamaIbu,   
        menit:      props.menitPenyebabUtamaIbu, 
        icdx:       props.icdxPenyebabUtamaIbu,  
      },
      {
        judul:      'Penyebab Lain Ibu',
        nama:       props.namaPenyebabLainnyaIbu,    
        hari:       props.hariPenyebabLainnyaIbu,  
        bulan:      props.bulanPenyebabLainnyaIbu, 
        tahun:      props.tahunPenyebabLainnyaIbu, 
        jam:        props.jamPenyebabLainnyaIbu,   
        menit:      props.menitPenyebabLainnyaIbu, 
        icdx:       props.icdxPenyebabLainnyaIbu,  
      }
    ];
    return renderDiagnosaForm(diagnosaIbuAnakList);
  }

  const renderDiagnosaUmum = () => {
    const diagnosaUmumList = [
      {
        judul:      'Penyebab Langsung',
        nama:       props.namaPenyebabLangsung,    
        hari:       props.hariPenyebabLangsung,  
        bulan:      props.bulanPenyebabLangsung, 
        tahun:      props.tahunPenyebabLangsung, 
        jam:        props.jamPenyebabLangsung,   
        menit:      props.menitPenyebabLangsung, 
        icdx:       props.icdxPenyebabLangsung,  
      },
      {
        judul:      'Penyebab Antara 1',
        nama:       props.namaPenyebabAntara1,    
        hari:       props.hariPenyebabAntara1,  
        bulan:      props.bulanPenyebabAntara1, 
        tahun:      props.tahunPenyebabAntara1, 
        jam:        props.jamPenyebabAntara1,   
        menit:      props.menitPenyebabAntara1, 
        icdx:       props.icdxPenyebabAntara1,  
      },
      {
        judul:      'Penyebab Antara 2',
        nama:       props.namaPenyebabAntara2,    
        hari:       props.hariPenyebabAntara2,  
        bulan:      props.bulanPenyebabAntara2, 
        tahun:      props.tahunPenyebabAntara2, 
        jam:        props.jamPenyebabAntara2,   
        menit:      props.menitPenyebabAntara2, 
        icdx:       props.icdxPenyebabAntara2,  
      },
      {
        judul:      'Penyebab Dasar',
        nama:       props.namaPenyebabDasar,    
        hari:       props.hariPenyebabDasar,  
        bulan:      props.bulanPenyebabDasar, 
        tahun:      props.tahunPenyebabDasar, 
        jam:        props.jamPenyebabDasar,   
        menit:      props.menitPenyebabDasar, 
        icdx:       props.icdxPenyebabDasar,  
      }
      {
        judul:      'Final UCoD',
        nama:       props.namaFinalUcod, 
        hari:       props.hariFinalUcod, 
        bulan:      props.bulanFinalUcod,
        tahun:      props.tahunFinalUcod,
        jam:        props.jamFinalUcod,  
        menit:      props.menitFinalUcod,
        icdx:       props.icdxFinalUcod, 
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

export default SkmkDataDiagnosa;