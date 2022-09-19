import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';

const MyCard = ({ image }) => {
  return (
    <Box>
      <Link
        href="http://localhost:3000/details"
        sx={{ textDecoration: 'none' }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="forest"
          sx={{ borderRadius: 3 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            align="center"
            component="div"
            color="green"
          >
            Forest
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            component="div"
            color="#6c8138"
          >
            You will like the journey
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            Till the end
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default MyCard;
