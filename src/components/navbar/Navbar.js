import React, { useState } from 'react';
import { AppBar, InputBase, Link, Typography } from '@mui/material';
import { Facebook, Instagram, Menu, Twitter } from '@mui/icons-material';
import { menuItems } from '../../constants';
import Dropdown from '../dropdown/Dropdown';
import { MenuBox, SearchBox, SocialBox, StyledToolbar } from './StyledNavbar';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledToolbar />
      <AppBar sx={{ background: 'black', position: 'fixed' }}>
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
              <Link
                href={item.link}
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  '&:hover': {
                    color: 'green'
                  }
                }}
              >
                <Typography
                  key={item.name}
                  sx={{
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </MenuBox>
          <SearchBox>
            <InputBase placeholder="Search..." sx={{ color: 'white' }} />
            <Menu
              onClick={() => setOpen(!open)}
              sx={{
                color: 'white',
                display: {
                  xs: 'block',
                  sm: 'block',
                  md: 'none'
                },
                cursor: 'pointer'
              }}
            />
          </SearchBox>
        </StyledToolbar>
        <Dropdown props={{ open, setOpen }} />
      </AppBar>
    </>
  );
};

export default Navbar;
