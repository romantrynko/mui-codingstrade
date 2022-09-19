import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import island from '../../static/island.jpeg';
import rivers from '../../static/rivers.jpeg';
import mountains from '../../static/mountains.jpeg';
import { StyledBox, StyledTypography } from './StyledCategory';

const Category = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        spacing={{ xs: 5, sm: 5, md: 3 }}
        mt={15} mb={15}
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
