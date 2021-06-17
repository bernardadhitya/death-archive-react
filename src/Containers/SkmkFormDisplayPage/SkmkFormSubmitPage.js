import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { handleSubmitData } from './SkmkFormSubmit';
import { Modal } from 'antd';

const SkmkFormSubmitPage = () => {
  
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await handleSubmitData();
      if(result === null){
        Modal.error({
          content: 
          <>
            <h3>Data Gagal Dimasukkan</h3>
            <p>
              Data gagal dimasukkan. Mohon memastikan data terisi dengan lengkap dan memastikan tidak memasukkan NIK jenazah yang sudah pernah dimasukkan
            </p>
          </>,
          onOk: history.push('/skmk/form/'),
          onCancel: history.push('/skmk/form/')
        });
      } else {
        Modal.success({
          content: 
          <>
            <h3>Data Berhasil Dimasukkan</h3>
            <p>
              Anda dapat melihat data barau anda di halaman rekap
            </p>
          </>,
          onOk: history.push('/skmk/rekap/'),
          onCancel: history.push('/skmk/rekap/')
        });
      }
    }
    fetchData();
  }, []);

  return (
    <></>
  )
}

export default SkmkFormSubmitPage;