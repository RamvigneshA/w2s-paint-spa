import { Box, Typography, Stack, Chip, Button, useTheme } from '@mui/material';
import OutlinedTick from '../icons/OutlinedTick';
import ArrowRight from '../icons/ArrowRight';
import { useTranslation } from 'react-i18next';
import { STYLES } from '../constants';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  
  const features = [
    t('premium_quality'),
    t('eco_friendly'),
    t('color_retention'),
    t('weather_resistant'),
    t('low_voc'),
    t('fast_drying'),
  ];
  

  
  return (
    <Box component="section" sx={STYLES.HERO_CONTAINER}>
      <Stack alignItems="center" textAlign="center" gap={{ xs: '24px', sm: '32px' }} sx={{ margin: '0 auto' }}>
        <Stack direction="column" alignItems="center" gap={{ xs: '10px', sm: '14px' }}>
          <Typography
            variant="body1"
            color="primary.main"
            fontWeight="bold"
            sx={{ margin: 0 }}
          >
            {t('transform_spaces')}
          </Typography>
          <Typography
            variant="h1"
            color="text.primary"
            sx={{
              margin: { xs: '10px 0 16px 0', sm: '14px 0 24px 0' },
            }}
          >
            <Typewriter
              key={i18n.language}
              words={[t('colors_inspire')]}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              delaySpeed={1000}
            />
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ xs: '10px', sm: '14px' }}
          sx={{ maxWidth: '700px' }}
        >
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              icon={<OutlinedTick color={theme.palette.primary.main} size={24} />}
              sx={STYLES.CHIP}
            />
          ))}
        </Stack>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowRight color={theme.palette.text.primary} size={20} />}
        >
          {t('explore_products')}
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
