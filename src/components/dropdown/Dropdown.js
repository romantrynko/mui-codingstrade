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
        <Box sx={{ width: 350, height: '90vh' }}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              sx={{ cursor: 'pointer', fontSize: '14px' }}
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
