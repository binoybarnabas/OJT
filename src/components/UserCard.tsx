import React, { PropsWithChildren } from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import { User } from '@/Models';

interface UserCardProp{
    user:User
}

const UserCard:React.FC<UserCardProp> = ({ user }) => {
  return (
    <Card variant="outlined" sx={{margin:'3rem'}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>
        <Divider />
        <Typography variant="body1">
          <strong>Username:</strong> {user.username}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> {user.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Website:</strong> {user.website}
        </Typography>
        <Typography variant="body1">
          <strong>Company:</strong> {user.company.name} - {user.company.catchPhrase}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
