import { Box, Container, Typography } from '@mui/material';
import manImage from '../assets/man.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CustomerThought = () => {
  return (
    <Container
      sx={{
        width: '1700px',
        height: '672px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: '100px',
        alignSelf: 'center',
      }}
    >
      <Box
        sx={{
          width: '1380px',
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '472px',
            height: '472px',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={manImage}
            alt="Customer testimonial"
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <Typography
            sx={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#000',
            }}
          >
            What our customers thought?
          </Typography>

          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: '#000',
              lineHeight: '1.5',
              maxWidth: '700px',
            }}
          >
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.
          </Typography>

          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#000',
              mt: 2,
            }}
          >
            Holly Davidson
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mt: 2,
            }}
          >
            <ArrowBackIcon
              sx={{
                width: '39.55px',
                height: '16.6px',
                color: '#262626',
                cursor: 'pointer',
              }}
            />
            <ArrowForwardIcon
              sx={{
                width: '39.55px',
                height: '16.6px',
                color: '#8A4FFF',
                cursor: 'pointer',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CustomerThought;
