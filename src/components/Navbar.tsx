'use client'

import React from 'react';
import { AppBar,  Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation'
 
const useStyles ={
  title: {
    flexGrow: 1,
  },
}

const Navbar = () => {
  const router = useRouter()
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={useStyles.title}>
          Info.com
        </Typography>
        <Button color="inherit" onClick={() => router.push('/home')}>Home</Button>
        <Button color="inherit" onClick={() => router.push('/personaldetails')}>Add</Button>
        <Button color="inherit" onClick={() => router.push('/showdetails')}>Show</Button>
        <Button color="inherit" onClick={() => router.push('/counter')}>counter</Button>
        <Button color="inherit" onClick={() => router.push('/serverrender')}>server render</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
