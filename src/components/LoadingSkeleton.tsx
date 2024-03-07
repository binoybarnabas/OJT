import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Container, Grid } from '@mui/material';
const LoadingSkeleton = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoadingSkeleton;
