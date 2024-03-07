'use client' // Error components must be Client Components
 
import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
  //const [errorCaused, setErrorCaused] = useState<any>('');
  useEffect(() => {
    // Log the error to an error reporting service
    // setErrorCaused(error);
    // console.log("error caused**" + errorCaused)
    console.error(error)
  }, [error])
 
  return (
    <Box textAlign="center" mt={5} sx={{height:"100vh"}}>
      <Typography variant="h2" gutterBottom>
        Something went wrong!
      </Typography>
      <Button variant="contained" color="primary" onClick={reset}>
        Try again
      </Button>
    </Box>
  )
}