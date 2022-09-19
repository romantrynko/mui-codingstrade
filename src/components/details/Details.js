import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import detailsImage from '../../static/forest_1.jpeg';
import postImage from '../../static/forest_4.jpeg';
import Rightbar from '../rightbar/Rightbar';

const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${detailsImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 250
        }}
      >
        <Box
          sx={{
            display: 'flex',
            background: 'black',
            opacity: 0.7,
            alignItems: 'center',
            margin: '0 auto',
            justifyContent: 'center'
          }}
        >
          <Typography
            align="center"
            color="white"
            variant="h3"
            sx={{
              display: 'flex',
              fontWeight: 200,
              padding: 5,
              whiteSpace: 'nowrap'
            }}
          >
            Forest Rains
          </Typography>
        </Box>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: '18px 100px 100px 100px' }}>
            <Typography
              m={4}
              align="center"
              color="gray"
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vulputate rhoncus libero. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Integer ac tellus in justo tempus tempus eu a elit. Maecenas
              dignissim eget eros eget consequat. Nullam sodales turpis vitae
              justo commodo, sed efficitur felis interdum.
            </Typography>
            <CardMedia
              component="img"
              height={300}
              image={postImage}
              alt="Rivers"
            />
            <Typography align="center" cariant="h4" mt={2}>
              Wait For It!
            </Typography>
            <Typography
              m={4}
              color="gray"
              variant="body1"
              sx={{ fontWeight: 900 }}
              align="center"
            >
              Клієнт дуже важливий, за клієнтом піде клієнт. Suspendisse
              vulputate rhoncus libero. Діти живуть із хворобами, старістю та
              дітьми, а також страждають від голоду та злиднів. Ціле число і
              регіон всього за один футбольний сезон від гравця. Меценат
              dignissim eget eros eget consequat. Жоден член старшої школи не
              підходить, але іноді це спрацьовує. Два тайм або гравці з курсу.
              Аж до бродіння простих білків. Але якщо він не захоче йти до
              горла, страх перед дітьми закінчиться в ньому. Як мішень
              домашнього завдання націлений елемент ненависті. Також буде
              супроводжуватися рекламними кампаніями. Чисто з урни. Човен дуже
              вагітна.
            </Typography>
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
