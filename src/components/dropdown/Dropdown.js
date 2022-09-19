import { Box, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { menuItems } from '../../constants';

const Dropdown = ({ props }) => {
  const { open, setOpen } = props;

  return (
    <>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Box
          sx={{
            width: 250,
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            // padding: '30px 0'
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              sx={{
                cursor: 'pointer',
                fontSize: '20px',
                // width: '100%',
                '&:hover': {
                  color: 'green'
                }
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </>
  );
};

export default Dropdown;
