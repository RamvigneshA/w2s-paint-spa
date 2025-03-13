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
      
      <Stack
        width="100%"
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems={['center', 'baseline']}
        gap={['24px', '0px']}
        borderBottom={`1px solid #FFFFFF1F`}
        pt={['24px', '0']}
        pb={['24px', '40px']}
      >
        <Typography
          variant="h4"
          fontWeight={600}
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
              height: { xs: '70px', sm: '50px' },
              minWidth: 'max-content',
              padding: '16px 36px',
              gap: 3,
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
          component="a"
          href="#"
          variant="body2"
          sx={{
            color: COLORS.FOOTER_TEXT,
            textDecoration: ['none', 'underline'],
            cursor: ['default', 'pointer'],
          }}
        >
          {t('privacy_terms')}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
