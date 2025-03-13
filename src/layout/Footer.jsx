import { Box, Stack, Typography, Button } from '@mui/material';
import ArrowRight from '../icons/ArrowRight';
import { useTranslation } from 'react-i18next';
import { STYLES, COLORS } from '../constants';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <Stack
      mt="72px"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      gap={['20px', '40px']}
      sx={STYLES.FOOTER}
    >
      {/* Header Section */}
      <Stack
        width="100%"
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'baseline']}
        gap={['24px', '0px']}
        borderBottom={`1px solid #FFFFFF1F`}
        padding={'40px'}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign={['center', 'left']}
          flexGrow={2}
        >
          {t('ready_transform')}
        </Typography>
        <Stack flexGrow={1} flexDirection={"row"} justifyContent={['center', 'flex-end']} width={"100%"}>
          <Button
            variant="contained"
            endIcon={<ArrowRight color={COLORS.BLACK} size={20} />}
            sx={{
              bgcolor: { xs: 'primary.main', md: 'white' },
              maxWidth: ['100%', '60%'],
              minWidth: 'max-content',
              flexGrow: [1, 'unset']
            }}
          >
            {t('color_consultation')}
          </Button>
        </Stack>
      </Stack>

      {/* Footer Section */}
      <Stack
        width="100%"
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
        gap="12px"
      >
        <Typography
          variant="body2"
          sx={{
            color: COLORS.FOOTER_TEXT
          }}
        >
          {t('copyright')}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: COLORS.FOOTER_TEXT,
           
          }}
        >
          {t('privacy_terms')}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
