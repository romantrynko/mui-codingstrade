import { Box, Grid } from '@mui/material';
import React from 'react';
import MyCard from '../card/MyCard';
import forest_1 from '../../static/forest_1.jpeg';
import forest_2 from '../../static/forest_2.jpeg';
import forest_3 from '../../static/forest_3.jpeg';
import forest_4 from '../../static/forest_4.jpeg';
import forest_5 from '../../static/forest_5.jpeg';
import forest_6 from '../../static/forest_6.jpeg';

const Recents = () => {
  return (
    <Box id='recent'>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={12} xs={12}>
          <MyCard image={forest_1} />
        </Grid>
        <Grid item md={6} xs={12}>
          <MyCard image={forest_2} />
        </Grid>
        <Grid item md={6} xs={12}>
          <MyCard image={forest_3} />
        </Grid>
        <Grid item md={6} xs={12}>
          <MyCard image={forest_4} />
        </Grid>
        <Grid item md={6} xs={12}>
          <MyCard image={forest_5} />
        </Grid>
        <Grid item md={6} xs={12}>
          <MyCard image={forest_6} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
