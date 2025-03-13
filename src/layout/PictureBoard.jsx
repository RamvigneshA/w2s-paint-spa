import { Box, Typography, Stack, styled, Button } from '@mui/material';
import ArrowRight from '../icons/ArrowRight';
import vectorTwo from '../assets/vectorTwo.png';
import { useTranslation } from 'react-i18next';
import { STYLES, COLORS } from '../constants';

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

const PictureBoard = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={['column-reverse', 'row']}
      justifyContent="space-between"
      alignItems="center"
      gap={['0', '40px']}
      sx={STYLES.PICTURE_BOARD}
      bgcolor={COLORS.PRIMARY}
    >
      <Stack
        direction="column"
        gap={{ xs: '8px', sm: '12px' }}
        sx={{ flex: 1, maxWidth: '575px' }}
      >
        <Typography
          variant="h2"
          fontSize={{ xs: '24px', sm: '32px' }}
          paddingBottom={'20px'}
          fontWeight="700"
          sx={{
            color: COLORS.BLACK,
            lineHeight: 1.2,
          }}
        >
          {t('vibrant_colors')}
        </Typography>
        <Stack direction="column" sx={{ mb: { xs: 2, sm: 3 } }}>
          <Typography
            variant="body1"
            sx={{
              textDecoration: 'underline',
              marginBottom: { xs: '15px', sm: '25px' },
            }}
          >
            {t('beautiful_finish')}
          </Typography>
          <Typography variant="body1">{t('experience_coverage')}</Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{
            background: '#262626',
            color: COLORS.WHITE,
            maxWidth: { xs: '100%', sm: '60%' },
            height: { xs: '70px', sm: '50px' },
          }}
          endIcon={<ArrowRight color={COLORS.WHITE} size={20} />}
        >
          {t('view_collection')}
        </Button>
      </Stack>
      <Box sx={{ flex: 1.5 }}>
        <Image src={vectorTwo} alt={t('premium_paint_collection')} />
      </Box>
    </Stack>
  );
};

export default PictureBoard;
