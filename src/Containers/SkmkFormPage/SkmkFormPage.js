import { Button } from '@material-ui/core';
import React from 'react';
import SkmkDataDiagnosa from '../../Components/SkmkFormCards/SkmkDataDiagnosa';
import SkmkDataJenazah from '../../Components/SkmkFormCards/SkmkDataJenazah';
import SkmkDataPelapor from '../../Components/SkmkFormCards/SkmkDataPelapor';
import SkmkDataSurat from '../../Components/SkmkFormCards/SkmkDataSurat';

const SkmkFormPage = () => {

  const renderDataSurat = () => {
    return (
     <SkmkDataSurat /> 
    )
  }
  
  const renderDataPelapor = () => {
    return (
      <SkmkDataPelapor />
    )
  }

  const renderDataJenazah = () => {
    return (
      <SkmkDataJenazah />
    )
  }

  const renderDataDiagnosa = () => {
    return (
      <SkmkDataDiagnosa />
    )
  }

  return (
    <div style={{margin: '120px 160px'}}>
      <h1>Input Surat Keterangan Melapor Kematian (SKMK)</h1>
      <br/>
      {renderDataSurat()}
      <br/><br/>
      {renderDataPelapor()}
      <br/><br/>
      {renderDataJenazah()}
      <br/><br/>
      {renderDataDiagnosa()}
      <br/><br/>
      <Button
        size='large'
        style={{backgroundColor: '#F6B931', float: 'right'}}
      >
        Berikutnya
      </Button>
      <br/><br/><br/><br/>
    </div>
  )
}

export default SkmkFormPage;