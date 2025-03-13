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
import Image from '../components/Image';

const CustomNavigation = ({ onPrev, onNext }) => {
  const theme = useTheme();

  return (
    <Stack
      gap={2}
      direction="row"
      justifyContent={['center', 'flex-end']}
      sx={{
        left: { md: '40%' },
        bottom: { md: '20%' },
        position: { md: "absolute" }
      }}
    >
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
        gap={{ xs: 1, sm: 3 }}
        position={'relative'}
        justifyContent={'center'}
      >
        <Stack
          direction={['column', 'row']}
          gap={{ xs: 2 }}
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: { xs: '20px', sm: '40px' },
          }}
        >

          <Image
            src={TESTIMONIAL_IMAGES[TESTIMONIALS[index].image]}
            alt={t('customer_testimonial')}
            sx={{
              flex: 1,
              width: '280px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />


          <Box
            sx={{
              display: 'flex',
              flex: 2,
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
                  <Stack sx={{ marginLeft: { xs: '0px', sm: '40px' } }} gap={[2, 1]}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: 'text.primary',
                        textAlign: { xs: 'center', sm: 'left' },
                        fontSize: { xs: '24px', sm: '40px' },
                        fontWeight: 700,
                        lineHeight: { xs: '32px', sm: '48px' },
                        mb: { md: 2 }
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
                        fontWeight: [700, 600],
                        fontSize: ['20px', '18px'],
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
        <CustomNavigation onPrev={handlePrevious} onNext={handleNext} />
      </Stack>
    </Stack>
  );
};

export default Testimonials;
