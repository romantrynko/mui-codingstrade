import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import island from '../../static/island.jpeg';
import rivers from '../../static/rivers.jpeg';
import mountains from '../../static/mountains.jpeg';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  height: 250,
  width: '100%',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
});

const StyledTypography = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  margin: '50px 50px',
  background: 'white',
  opacity: '0.7',
  minWidth: '50%',
});

const Category = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        spacing={{ xs: 5, sm: 5, md: 3 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(${mountains})` }}>
          <StyledTypography align="center" variant="h4">
            Mountains
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${rivers})` }}>
          <StyledTypography align="center" variant="h4">
            Rivers
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${island})` }}>
          <StyledTypography align="center" variant="h4">
            Islands
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Category;
