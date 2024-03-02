'use client'

import React, { useContext } from 'react';
import { AppBar,  Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/contexts/AuthContext';
import isAuth from './Auth';
const useStyles ={
  title: {
    flexGrow: 1,
  },
}

const Navbar = () => {
  const {signOut,user}  = useContext(AuthContext)
  const userData = JSON.stringify(user);
  const parsedUserData = JSON.parse(userData)
  
  const router = useRouter()
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={useStyles.title}>
          Info.com
        </Typography>
        <Typography variant="h6" sx={useStyles.title}>
          {parsedUserData.userData.department} : {parsedUserData.userData.username}
        </Typography>
        <Button color="inherit" onClick={() => router.push('/home')}>Home</Button>
        <Button color="inherit" onClick={() => router.push('/personaldetails')}>Add</Button>
        <Button color="inherit" onClick={() => router.push('/showdetails')}>Show</Button>
        <Button color="inherit" onClick={() => router.push('/counter')}>counter</Button>
        <Button color="inherit" onClick={() => router.push('/serverrender')}>server render</Button>
        <Button color="inherit" onClick={signOut}>signout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default isAuth(Navbar);
