import { Box, Typography, Button, Container, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const features = [
    'Cursus Integer',
    'Integer Consequat',
    'Tellus Euismod Pellentesque',
    'Aliquot Tristique',
    'Pellentesque Tempus',
    'Mauris Fermentum Praesent',
  ];

  return (
    <Box
      sx={{ py: 8, background: 'linear-gradient(to bottom, #fff9e6, #ffffff)' }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="subtitle1"
            color="#F9B800"
            fontWeight="bold"
          >
            RISUS PRAESENT VULPUTATE.
          </Typography>

          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{ mb: 4 }}
          >
            Cursus Consequat Tristique.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 2,
              width: '100%',
              mb: 4,
            }}
          >
            {features.map((feature) => (
              <Stack
                key={feature}
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 2,
                  p: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                <CheckCircleOutlineIcon sx={{ color: '#F9B800' }} />
                <Typography>{feature}</Typography>
              </Stack>
            ))}
          </Box>

          <Button
            variant="contained"
            color="warning"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 28,
              px: 4,
              py: 1.5,
            }}
          >
            Lorem Ipsum
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
