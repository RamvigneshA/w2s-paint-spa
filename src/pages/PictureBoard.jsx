import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import girlImage from '../assets/girlImage.png';

const PictureBoard = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#F9B800',
        borderRadius: '32px',
        padding: '64px',
        maxWidth: '1200px',
        gap: '40px',
      }}
    >
      <Box sx={{ flex: 1, maxWidth: '575px' }}>
        <Typography
          sx={{
            fontSize: '50px',
            fontWeight: '700',
            color: '#000',
            lineHeight: '1.2',
            marginBottom: '24px',
          }}
        >
          Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <Typography
            sx={{ fontSize: '20px', fontWeight: '600', color: '#000' }}
          >
            Vulputate et vulputate suspendisse natoque!
          </Typography>
          <Typography
            sx={{ fontSize: '20px', fontWeight: '400', color: '#000' }}
          >
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis
            vulputate et vulputate suspendisse natoque id tellus consectetur
            pulvinar et.{' '}
          </Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#000',
            borderRadius: '100px',
            padding: '16px 32px',
            '&:hover': {
              backgroundColor: '#222',
            },
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>
            Lorem Ipsum
          </Typography>
          <ArrowForwardIcon
            sx={{ width: '24px', height: '18px', color: '#fff' }}
          />
        </Button>
      </Box>
      <Box
        component="img"
        src={girlImage}
        alt="PictureBoard"
        sx={{
          width: '450px',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </Container>
  );
};

export default PictureBoard;
