import { Box, Typography } from '@mui/material';
import React from 'react';
import image from '../../static/background.jpeg';

const Hero = () => {
  return (
    <Box id='main'>
      <Typography
        align="center"
        variant="h1"
        sx={{ fontWeight: 200, marginTop: 4 }}
      >
        Nature <b style={{ color: '#437712' }}>Blog</b>
      </Typography>
      <Typography
        align="center"
        variant="body1"
        sx={{ fontWeight: 100, marginBottom: 3 }}
      >
        Live this Planet Wild
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
              md: '40%'
            },
            padding: { xs: 3, sm: 2, md: 20 }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              background: 'black',
              opacity: '0.7',
              color: 'white',
              borderRadius: 3,
              padding: '35px 0'
            }}
          >
            <Typography variant="h6" color="green" align="center" m={3}>
              Trending Locations
            </Typography>
            <Typography variant="h4" align="center" mb={4}>
              Life is Outside...
            </Typography>
          </Box>
          <Typography variant="h6" align="center" p={4} color='white' fontWeight={100}>
            You know it is your best opportunity!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
