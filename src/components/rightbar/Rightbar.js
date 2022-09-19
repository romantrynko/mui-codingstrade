import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import React from 'react';
import image from '../../static/forest_3.jpeg';
import image_2 from '../../static/forest_5.jpeg';
import image_3 from '../../static/forest_2.jpeg';
import image_4 from '../../static/forest_6.jpeg';
import MyCard from '../card/MyCard';

const Rightbar = () => {
  return (
    <Box sx={{ position: 'sticky', top: 80 }}>
      <Typography
        align="center"
        bgcolor="black"
        color="white"
        p={1}
        borderRadius={1}
      >
        Most Popular
      </Typography>
      <List
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          marginBottom: 4
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="rounded"
              alt="Remy Sharp"
              src={image}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 1 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="rounded"
              alt="Remy Sharp"
              src={image_2}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 1 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="rounded"
              alt="Remy Sharp"
              src={image_3}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 1 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="rounded"
              alt="Remy Sharp"
              src={image_4}
            />
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 1 }}
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="middle"/>
      </List >
      <Typography
        align="center"
        bgcolor="black"
        color="white"
        mb={3}
        p={1}
        borderRadius={1}
      >
        About Us
      </Typography>
      <MyCard image={image_3} />
    </Box>
  );
};

export default Rightbar;
