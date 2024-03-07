import React from 'react';
import { Typography, Link, Container, Box, Stack, Fab } from '@mui/material';
import Image from 'next/image'
import { ErrorOutline } from '@mui/icons-material'; // Import ErrorOutline icon
const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={4} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <Image src="/notfound.jpg" alt="Error background image" width="100" height="64"  />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <ErrorOutline sx={{ fontSize: 100, color: '#4285F4' }} /> {/* Use MUI ErrorOutline icon */}
          <Typography variant="h2" gutterBottom>
            Whoops! Lost in Space
          </Typography>
        </Box>
        <Typography variant="body1" paragraph align="center">
          Looks like the page you're looking for is lost in space. Don't worry, you can always head back to the main page.
        </Typography>
        <Link href="/login" variant="body1">
          <Fab variant="extended">
            Return Home
          </Fab>
        </Link>
      </Stack>
    </Container>
  );
};

export default NotFoundPage;
