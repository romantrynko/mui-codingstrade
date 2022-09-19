import { Box, styled, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  // height: 250,
  width: '100%',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: 7,
  padding: '40px 0'

});

export const StyledTypography = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 40,
  background: 'white',
  opacity: '0.5',
  // minWidth: '50%',
  borderRadius: 3
});
