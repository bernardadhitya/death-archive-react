import React, { useState } from 'react';
import './Login.css';
import { Grid, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import hospital from '../../Assets/images/hospital.png';
import logo from '../../Assets/images/logo.png';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = async () => {
    if((username === 'admin' && password === 'admin') ||
      (username === 'P3174080101' && password === 'admin')){
      history.push('/home');
    } else {
      window.alert('Username/password salah! Silahkan mencoba kembali.')
    }
  }

  return (
    <Grid container>
      <Grid item xs={7}>
        <div style={{width: '100%'}}>
          <img src={hospital} alt='' className='hospital-img'/>
        </div>
      </Grid>
      <Grid item xs={5}>
        <div className='form-container'>
          <img src={logo} alt='' style={{width: '150px', height: '150px'}}/>
          <div style={{height: '60px'}}></div>
          <Grid container alignItems="flex-end">
            <Grid item xs={2}>
              <PersonIcon fontSize='large' style={{color: '#818181'}}/>
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="username"
                label="Username"
                variant="standard"
                fullWidth="true"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </Grid>
          </Grid>
          <div style={{height: '30px'}}></div>
          <Grid container alignItems="flex-end">
            <Grid item xs={2}>
              <LockIcon fontSize='large' style={{color: '#818181'}}/>
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                fullWidth="true"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} alignItems='center'>
              <div className="login-btn" onClick={() => handleLogin()}>
                Login
              </div>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
};

export default Login;