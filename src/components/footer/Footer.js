import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { SocialBox } from '../navbar/StyledNavbar';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'black',
        height: 300
      }}
    >
      <Stack direction={{ xs: 'row', md: 'row' }} p={7}>
        <Box flxe={1}>
          <Typography color="white" align="center">
            Contact Us
          </Typography>
          <Typography color="white" align="center">
            79000, Lviv, Ukraine
          </Typography>
          <Typography color="white" align="center">
            www.lviv.com.ua
          </Typography>
          <Typography color="white" align="center">
            +380345534356
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Data Policy
          </Typography>
          <Typography color="white" align="center">
            Cookies
          </Typography>
          <Typography color="white" align="center">
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Categories
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Rivers
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Mountains
          </Typography>
          <Typography color="white" variant="body2" align="center">
            Forests
          </Typography>
        </Box>
        <Box>
          <Typography color="white" align="center">
            Follow Us:
          </Typography>
          <SocialBox mt={5}>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
