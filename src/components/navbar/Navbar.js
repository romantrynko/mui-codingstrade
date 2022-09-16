import React from 'react';
import {
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography
} from '@mui/material';
import { Facebook, Instagram, Menu, Twitter } from '@mui/icons-material';
import { menuItems } from '../../constants';
import Dropdown from '../dropdown/Dropdown';

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  });

  const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10
  });

  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
  });

  const SearchBox = styled(Box)({
    display: 'flex',
    gap: 5
  });

  return (
    <AppBar sx={{ background: 'black' }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex'
            }
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.name}
              sx={{ cursor: 'pointer', fontSize: '14px' }}
            >
              {item.name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search..." sx={{ color: 'white' }} />
          <Menu
            sx={{
              color: 'white',
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none'
              }
            }}
          />
        </SearchBox>
      </StyledToolbar>
      <Dropdown/>
    </AppBar>
  );
};

export default Navbar;
