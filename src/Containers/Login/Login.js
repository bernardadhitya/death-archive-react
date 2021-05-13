import React, { useState } from 'react';
import './Login.css';
import { Grid, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = async () => {
    if(username === 'admin' && password === 'admin'){
      history.push('/home');
    } else {
      window.alert('Username/password salah! Silahkan mencoba kembali.')
    }
  }

  return (
    <div className='login-page'>
      <div className='login-card'>
        <h3>Masuk ke PasarKerja</h3>
        <div className="form-item">
          <TextField
            id="username"
            label="text"
            variant="outlined"
            fullWidth="true"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
          />
        </div>
        <div className="form-item">
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth="true"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
          <div className="login-btn" onClick={() => handleLogin()}>
            Masuk
          </div>
        </div>
      </div>
  )
};

export default Login;