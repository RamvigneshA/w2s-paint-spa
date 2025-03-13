import { Box, Typography, Stack, useTheme } from '@mui/material';
import Arrow from '../icons/ArrowRight';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  TESTIMONIALS,
  CAROUSEL_SETTINGS,
  STYLES,
  TESTIMONIAL_IMAGES,
} from '../constants';

const CustomNavigation = ({ onPrev, onNext }) => {
  const theme = useTheme();

  return (
    <Stack gap={2} direction="row">
      <Box sx={{ cursor: 'pointer' }} onClick={onPrev}>
        <Arrow position="left" />
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={onNext}>
        <Arrow position="right" color={theme.palette.primary.main} />
      </Box>
    </Stack>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Stack>
      <Stack
        mt={{ xs: '40px', sm: '56px', md: '72px' }}
        sx={STYLES.TESTIMONIALS_CONTAINER}
        gap={4}
        position={'relative'}
        justifyContent={'center'}
      >
        <Stack
          direction={['column', 'row']}
          spacing={3}
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: { xs: '20px', sm: '40px' },
          }}
        >
          <Box
            sx={{
              flex: '0 0 auto',
              width: { xs: '100%', sm: '400px' },
              minWidth: { xs: '100%', sm: '400px' },
            }}
          >
            <img
              src={TESTIMONIAL_IMAGES[TESTIMONIALS[0].image]}
              alt={t('customer_testimonial')}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '50%',
                marginBottom: '30px',
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={CAROUSEL_SETTINGS.interval}
              indicators={CAROUSEL_SETTINGS.indicators}
              controls={CAROUSEL_SETTINGS.controls}
              wrap={CAROUSEL_SETTINGS.wrap}
              ref={carouselRef}
              className="testimonial-carousel"
            >
              {TESTIMONIALS.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <Stack spacing={3}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: 'text.primary',
                        textAlign: { xs: 'center', sm: 'left' },
                        fontSize: { xs: '24px', sm: '40px' },
                        fontWeight: 700,
                        lineHeight: { xs: '32px', sm: '48px' },
                      }}
                    >
                      {t('customer_one_thought')}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        textAlign: { xs: 'center', sm: 'left' },
                        fontSize: { xs: '16px', sm: '18px' },
                      }}
                    >
                      {t('customer_one_praise')}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        textAlign: { xs: 'center', sm: 'left' },
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                  </Stack>
                </Carousel.Item>
              ))}
            </Carousel>
          </Box>
        </Stack>

        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          sx={{
            md: {
              position: 'absolute',
              bottom: '0',
              left: '50%',
            },
          }}
        >
          <CustomNavigation onPrev={handlePrevious} onNext={handleNext} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
