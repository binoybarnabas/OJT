import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { UserData } from '@/Models';

interface userInfoCardProps{
  userData:UserData
}
  
const UserInfoCard:React.FC<userInfoCardProps>  = ({ userData }) => {
  return (
    <Card sx={{ maxWidth:"70%" , margin:'1rem'}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Photo:</strong>
            </Typography>
            {userData.photo && (
              <CardMedia
                component="img"
                src={URL.createObjectURL(userData.photo)}
                alt="User's Photo"
                sx={{ width: '100%', height: 'auto' }}
              />
            )}
          </Grid> 
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>First Name:</strong> {userData.firstName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Last Name:</strong> {userData.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Gender:</strong> {userData.gender}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Phone Number:</strong> {userData.phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Place:</strong> {userData.place}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Hobbies:</strong> {userData.hobbies.join(', ')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Nationality:</strong> {userData.nationality}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
