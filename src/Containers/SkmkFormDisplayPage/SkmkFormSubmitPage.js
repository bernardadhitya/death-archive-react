import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { handleSubmitData } from './SkmkFormSubmit';

const SkmkFormSubmitPage = () => {
  
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await handleSubmitData();
      if(result === null){
        window.alert('Data gagal dimasukkan. Mohon memastikan data terisi dengan lengkap dan memastikan tidak memasukkan NIK jenazah yang sudah pernah dimasukkan');
        history.push('/skmk/form/');
      } else {
        window.alert('Data berhasil disimpan!');
        history.push('/skmk/rekap');
      }
    }
    fetchData();
  }, []);

  return (
    <></>
  )
}

export default SkmkFormSubmitPage;