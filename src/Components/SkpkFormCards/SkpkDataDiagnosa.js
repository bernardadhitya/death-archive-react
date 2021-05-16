import { SentimentDissatisfiedOutlined } from '@material-ui/icons';
import { Card, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { icdxList } from '../../Constants/icdx';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const SkpkDataDiagnosa = (props) => {
  const {lamaKematian, setLamaKematian} = props;

  const renderDiagnosaForm = (diagnosaList = []) => {
    return diagnosaList.map((item, idx) => {
      const {
        judul,
        nama, setNama,
        hari, setHari,
        bulan, setBulan,
        tahun, setTahun,
        jam, setJam,
        menit, setMenit,
        icdx, setIcdx
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
            <DropdownMenu
              byIndex
              list={icdxList.map(icdxItem => `${icdxItem.icdx} - ${icdxItem.penyakit}`)}
              onSelect={(value) => {
                setNama(icdxList[value].penyakit);
                setIcdx(icdxList[value].icdx)
              }}
            />
          </Col>
          <Col span={6}>
            <p>Selang waktu terjadinya penyakit sampai meninggal</p>
          </Col>
          <Col span={3}>
            <Input
              placeholder='Hari'
              value={hari}
              onChange={(e) => setHari(e.target.value)}
            />
          </Col>
          <Col span={3}>
            <Input
              placeholder='Bulan'
              value={bulan}
              onChange={(e) => setBulan(e.target.value)}
            />
          </Col>
          <Col span={3}>
            <Input
              placeholder='Tahun'
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
            />
          </Col>
          <Col span={3}>
            <Input
              placeholder='Jam'
              value={jam}
              onChange={(e) => setJam(e.target.value)}
            />
          </Col>
          <Col span={3}>
            <Input
              placeholder='Menit'
              value={menit}
              onChange={(e) => setMenit(e.target.value)}
            />
          </Col>
        </Row>
      )
    })
  }

  const renderDiagnosaIbuAnak = () => {
    const diagnosaIbuAnakList = [
      {
        judul:      'Penyebab Utama Bayi*',
        nama:       props.namaPenyebabUtamaBayi,    
        hari:       props.hariPenyebabUtamaBayi,  
        bulan:      props.bulanPenyebabUtamaBayi, 
        tahun:      props.tahunPenyebabUtamaBayi, 
        jam:        props.jamPenyebabUtamaBayi,   
        menit:      props.menitPenyebabUtamaBayi, 
        icdx:       props.icdxPenyebabUtamaBayi,  
        setNama:    props.setNamaPenyebabUtamaBayi, 
        setHari:    props.setHariPenyebabUtamaBayi, 
        setBulan:   props.setBulanPenyebabUtamaBayi,
        setTahun:   props.setTahunPenyebabUtamaBayi,
        setJam:     props.setJamPenyebabUtamaBayi,  
        setMenit:   props.setMenitPenyebabUtamaBayi,
        setIcdx:    props.setIcdxPenyebabUtamaBayi, 

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
        setNama:    props.setNamaPenyebabLainnyaBayi, 
        setHari:    props.setHariPenyebabLainnyaBayi, 
        setBulan:   props.setBulanPenyebabLainnyaBayi,
        setTahun:   props.setTahunPenyebabLainnyaBayi,
        setJam:     props.setJamPenyebabLainnyaBayi,  
        setMenit:   props.setMenitPenyebabLainnyaBayi,
        setIcdx:    props.setIcdxPenyebabLainnyaBayi, 

      },
      {
        judul:      'Penyebab Utama Ibu*',
        nama:       props.namaPenyebabUtamaIbu,    
        hari:       props.hariPenyebabUtamaIbu,  
        bulan:      props.bulanPenyebabUtamaIbu, 
        tahun:      props.tahunPenyebabUtamaIbu, 
        jam:        props.jamPenyebabUtamaIbu,   
        menit:      props.menitPenyebabUtamaIbu, 
        icdx:       props.icdxPenyebabUtamaIbu,  
        setNama:    props.setNamaPenyebabUtamaIbu, 
        setHari:    props.setHariPenyebabUtamaIbu, 
        setBulan:   props.setBulanPenyebabUtamaIbu,
        setTahun:   props.setTahunPenyebabUtamaIbu,
        setJam:     props.setJamPenyebabUtamaIbu,  
        setMenit:   props.setMenitPenyebabUtamaIbu,
        setIcdx:    props.setIcdxPenyebabUtamaIbu, 

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
        setNama:    props.setNamaPenyebabLainnyaIbu, 
        setHari:    props.setHariPenyebabLainnyaIbu, 
        setBulan:   props.setBulanPenyebabLainnyaIbu,
        setTahun:   props.setTahunPenyebabLainnyaIbu,
        setJam:     props.setJamPenyebabLainnyaIbu,  
        setMenit:   props.setMenitPenyebabLainnyaIbu,
        setIcdx:    props.setIcdxPenyebabLainnyaIbu, 

      }
    ];
    return renderDiagnosaForm(diagnosaIbuAnakList);
  }

  const renderDiagnosaUmum = () => {
    const diagnosaUmumList = [
      {
        judul:      'Penyebab Langsung*',
        nama:       props.namaPenyebabLangsung,    
        hari:       props.hariPenyebabLangsung,  
        bulan:      props.bulanPenyebabLangsung, 
        tahun:      props.tahunPenyebabLangsung, 
        jam:        props.jamPenyebabLangsung,   
        menit:      props.menitPenyebabLangsung, 
        icdx:       props.icdxPenyebabLangsung,  
        setNama:    props.setNamaPenyebabLangsung, 
        setHari:    props.setHariPenyebabLangsung, 
        setBulan:   props.setBulanPenyebabLangsung,
        setTahun:   props.setTahunPenyebabLangsung,
        setJam:     props.setJamPenyebabLangsung,  
        setMenit:   props.setMenitPenyebabLangsung,
        setIcdx:    props.setIcdxPenyebabLangsung, 

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
        setNama:    props.setNamaPenyebabAntara1, 
        setHari:    props.setHariPenyebabAntara1, 
        setBulan:   props.setBulanPenyebabAntara1,
        setTahun:   props.setTahunPenyebabAntara1,
        setJam:     props.setJamPenyebabAntara1,  
        setMenit:   props.setMenitPenyebabAntara1,
        setIcdx:    props.setIcdxPenyebabAntara1, 

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
        setNama:    props.setNamaPenyebabAntara2, 
        setHari:    props.setHariPenyebabAntara2, 
        setBulan:   props.setBulanPenyebabAntara2,
        setTahun:   props.setTahunPenyebabAntara2,
        setJam:     props.setJamPenyebabAntara2,  
        setMenit:   props.setMenitPenyebabAntara2,
        setIcdx:    props.setIcdxPenyebabAntara2, 

      },
      {
        judul:      'Penyebab Dasar*',
        nama:       props.namaPenyebabDasar,    
        hari:       props.hariPenyebabDasar,  
        bulan:      props.bulanPenyebabDasar, 
        tahun:      props.tahunPenyebabDasar, 
        jam:        props.jamPenyebabDasar,   
        menit:      props.menitPenyebabDasar, 
        icdx:       props.icdxPenyebabDasar,  
        setNama:    props.setNamaPenyebabDasar, 
        setHari:    props.setHariPenyebabDasar, 
        setBulan:   props.setBulanPenyebabDasar,
        setTahun:   props.setTahunPenyebabDasar,
        setJam:     props.setJamPenyebabDasar,  
        setMenit:   props.setMenitPenyebabDasar,
        setIcdx:    props.setIcdxPenyebabDasar, 
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
          <DropdownMenu
            byIndex 
            list={[
              'Kematian Umur 0-6 Hari Termasuk Lahir Mati',
              'Kematian Umur 7 Hari ke Atas'
            ]}
            onSelect={(item) => setLamaKematian(item)}
          />
        </Col>
      </Row>
      {renderDataDiagnosaForm()}
    </Card>
  )
}

export default SkpkDataDiagnosa;