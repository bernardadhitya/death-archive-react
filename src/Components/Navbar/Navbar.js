import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Navbar.css';
import logo from '../../Assets/images/logo.png'
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { AccountCircleTwoTone } from '@material-ui/icons';
import { getDateStringFormatted } from '../../Constants/date';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import clsx from 'clsx';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: '300px'
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const handleLogout = async () => {
    history.push('/login');
  }

  const list = () => {
    return (
      <div
        className={clsx(classes.list, classes.fullList)}
        role="presentation"
      >
        <div style={{textAlign: 'center', padding: '30px 0 30px 0'}}>
          <img src={logo} style={{width: '150px', height: '150px'}} alt=''/>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>SKPK</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon/>
            <ListItemText>Input SKPK</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon/>
            <ListItemText>Database SKPK</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>SKMK</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon/>
            <ListItemText>Input SKMK</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon/>
            <ListItemText>Database SKMK</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><DateRangeIcon /></ListItemIcon>
            <ListItemText>Rekap Data Bulanan</ListItemText>
          </ListItem>
        </List>
      </div>
    )
  };

  const renderNavbarMenu = () => {
    return (
      <div className='navbar-menu'>
        <div className='item'>
          <h5>{getDateStringFormatted(new Date())}</h5>
        </div>
        <div>
          <div
            className='item'
            onClick={handleProfileClick}
          >
            <h5>Hi, Admin</h5>
          </div>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <div style={{margin: '0 20px 0 20px'}}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <div style={{marginTop: '20px'}}>
                    <AccountCircleTwoTone fontSize='large'/>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className='text-no-margin'>
                    <h5>Admin</h5>
                    <h6>Admin</h6>
                  </div>
                </Grid>
              </Grid>
            </div>
            <StyledMenuItem onClick={() => handleLogout()}>
              <ListItemText primary="Keluar" />
              <ListItemIcon/>
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
    )
  }

  return (
    <>
      <div class="navbar-wrapper">
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <div
              style={{padding: '10px', textAlign: 'center', cursor: 'pointer'}}
              onClick={() => setOpenDrawer(true)}>
              <MenuIcon fontSize='large' style={{color: '#ffffff'}}/>
            </div>
          </Grid>
          <Grid item lg={8} md={7} sm={6} xs={5}></Grid>
          <Grid item lg={3} md={4} sm={5} xs={6}>
            {renderNavbarMenu()}
          </Grid>
        </Grid>
      </div>
      <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default Navbar;