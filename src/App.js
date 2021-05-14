import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeNavigation from './Components/Navigation/HomeNavigation';
import './App.css';
import 'antd/dist/antd.css';

const App = () => (
  <Router>
    <HomeNavigation />
  </Router>
);

export default App;
