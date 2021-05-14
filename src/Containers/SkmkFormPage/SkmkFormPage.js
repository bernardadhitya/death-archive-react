import React from 'react';
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

  return (
    <div style={{margin: '120px 160px'}}>
      <h1>Input Surat Keterangan Melapor Kematian (SKMK)</h1>
      <br/>
      {renderDataSurat()}
      <br/>
      <br/>
      {renderDataPelapor()}
      <br/>
      <br/>
      {renderDataJenazah()}
    </div>
  )
}

export default SkmkFormPage;