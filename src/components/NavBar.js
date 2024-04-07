import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            My App
          </Link>
        </Typography>
        <Typography>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
            Login
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
