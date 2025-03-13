import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <Container
      sx={{
        bgcolor: '#1A1A1A',
        color: 'white',
        borderRadius: '32px',
        py: 6,
        px: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          pb: 4,
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ maxWidth: '500px', fontWeight: 'bold' }}>
          Vulputate et pulvinar ethre Suspendisse tellus consecteur
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: 'white',
            color: 'black',
            borderRadius: '24px',
            px: 3,
            py: 1.5,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          Lorem Ipsum
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Copyright © 2022 Lorem Ipsum.
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Privacy Policy | Terms and Conditions
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
