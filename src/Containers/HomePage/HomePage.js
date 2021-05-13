import { Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './HomePage.css';

const HomePage = () => {

  const history = useHistory();
  
  return (
    <div style={{margin: '120px 100px'}}>
      <Grid container>
        <Grid item xs={12}>
          <h1>Dashboard</h1>
        </Grid>
        <Grid item xs={12}>
          <div className='box-container'>
            <h2>Selamat datang, Admin.</h2>
            <p>Aplikasi manajemen surat keterangan kematian Puskesmas Kecamatan Kalideres.</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className='dashboard-menu-box-container'
            style={{backgroundColor: '#53B6ED'}}
            onClick={() => history.push('/skpk/form')}
          >
            <h1 style={{color: '#FFFFFF'}}>
              Input Surat Keterangan Penyebab Kematian (SKPK)
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className='dashboard-menu-box-container'
            style={{backgroundColor: '#2DAC5F'}}
            onClick={() => history.push('/skmk/form')}
          >
            <h1 style={{color: '#FFFFFF'}}>
            Input Surat Keterangan Melapor Kematian (SKMK)
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className='dashboard-menu-box-container'
            style={{backgroundColor: '#F6B931'}}
            onClick={() => history.push('/skpk/rekap')}
          >
            <h1 style={{color: '#FFFFFF'}}>
              Database Surat Keterangan Penyebab Kematian (SKPK)
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            className='dashboard-menu-box-container'
            style={{backgroundColor: '#DF5660'}}
            onClick={() => history.push('/skmk/rekap')}
          >
            <h1 style={{color: '#FFFFFF'}}>
            Database Surat Keterangan Melapor Kematian (SKMK)
            </h1>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage;