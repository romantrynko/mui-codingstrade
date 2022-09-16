import { Box, Typography } from '@mui/material';
import React from 'react';
import image from '../../static/background.jpeg';

const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Nature <b style={{ color: 'green' }}>Blog</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We make you look the better of you
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
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
          <Box sx={{ background: 'white', opacity: '0.7' }}>
            <Typography variant="h6" color="green" align="center" pt={8}>
              Trending Locations
            </Typography>
            <Typography variant="h4" align="center">
              Life is boring inside...
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              You know it is your best opportunity!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
