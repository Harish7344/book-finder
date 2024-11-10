import React from 'react';
import { Typography, AppBar, Toolbar, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="center" width="100%">
          <Typography variant="h6">Book Finder</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
