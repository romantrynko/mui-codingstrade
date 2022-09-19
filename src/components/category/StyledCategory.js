import { Box, styled, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: 7,
  padding: '40px 0',
  boxShadow: '0px 5px 10px 0px rgba(0,0,0, 0.5)',
  '&:hover': {
    transform: 'scale(1.08)',
    transitionDuration: '300ms'
  },
  '&:not(:hover)': {
    transitionDuration: '200ms'
  }
});

export const StyledTypography = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 40,
  background: 'white',
  opacity: '0.5',
  borderRadius: 10
});
