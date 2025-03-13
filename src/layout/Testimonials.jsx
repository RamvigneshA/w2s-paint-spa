import { Box, Typography, Stack, useTheme } from '@mui/material';
import Arrow from '../icons/ArrowRight';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TESTIMONIALS, CAROUSEL_SETTINGS, STYLES, TESTIMONIAL_IMAGES } from '../constants';

const CustomNavigation = ({ onPrev, onNext }) => {
  const theme = useTheme();
  
  return (
    <Stack gap={2} direction='row'>
      <Box sx={{ cursor: 'pointer' }} onClick={onPrev}>
        <Arrow position='left' />
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={onNext}>
        <Arrow position='right' color={theme.palette.primary.main} />
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
              <Stack direction={['column', 'row']} spacing={3}>
                <Box>
                  <img 
                    src={TESTIMONIAL_IMAGES[testimonial.image]} 
                    alt={t('customer_testimonial')}
                    style={{ display: 'block', maxWidth: '100%' }}
                  />
                </Box>
                <Stack spacing={2}>
                  <Typography variant="h2" sx={{ color: 'text.primary' }}>
                    {t('customer_one_thought')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {t('customer_one_praise')}
                  </Typography>
                  <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {testimonial.name}
                  </Typography>
                </Stack>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
        
        <Box display="flex" justifyContent="flex-start" width="100%">
          <CustomNavigation onPrev={handlePrevious} onNext={handleNext} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
