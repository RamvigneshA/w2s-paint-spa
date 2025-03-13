// Color constants
export const COLORS = {
  PRIMARY: '#F9B800',
  BLACK: '#000',
  WHITE: '#fff',
  DARK_GRAY: '#262626',
  LIGHT_GRAY: '#2626261F',
  FOOTER_BG: '#1A1A1A',
  FOOTER_TEXT: 'rgba(255, 255, 255, 0.7)',
};

// Import testimonial images
import testimonialOne from './assets/testimonialOne.png';
import trump from './assets/trump.png';

// Testimonial images mapping
export const TESTIMONIAL_IMAGES = {
  testimonialOne,
  trump
};

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    image: 'testimonialOne',
    name: 'John Doe',
  },
  {
    id: 2,
    image: 'trump',
    name: 'Trump',
  },
];

// Carousel settings
export const CAROUSEL_SETTINGS = {
  interval: 3000,
  indicators: false,
  controls: false,
  wrap: true,
};

// Define available languages
export const LANGUAGES = [
  { code: 'en', flag: '/flags/gb.svg', label: 'English' },
  { code: 'es', flag: '/flags/es.svg', label: 'Español' },
];

// Language select component styles
export const SELECT_STYLES = {
  '& .MuiSelect-select': {
    padding: '8px 32px 8px 8px !important',
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};

// Component styles
export const STYLES = {
  CHIP: {
    fontWeight: 600,
    padding: '14px 40px 14px 20px',
    color: 'text.primary',
    bgcolor: 'background.paper',
    gap: '7px',
    '& .MuiChip-label': {
      padding: 0,
    },
    '& .MuiChip-icon': {
      margin: '0 !important',
    },
  },
  NAVBAR: {
    height: 72,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  HERO_CONTAINER: {
    py: { xs: 4, sm: 6, md: 8 },
  },
  PICTURE_BOARD: {
    background: 'primary.main',
    borderRadius: { xs: '50px', sm: '100px' },
    alignItems: 'center',
    justifyContent: 'center',
    padding: { xs: '30px 30px 30px 30px', sm: '20px 20px 20px 80px' },
    maxWidth: '1200px',
    mt: { xs: 4, sm: 6, md: 8 },
  },
  TESTIMONIALS_CONTAINER: {
    bgcolor: 'background.paper',
    borderRadius: { xs: '24px', sm: '32px' },
    padding: { xs: '20px', sm: '40px', md: '64px' },
    maxWidth: '1200px',
  },
  FOOTER: {
    bgcolor: 'grey.900',
    color: 'common.white',
    borderRadius: '32px',
    padding: ['24px', '64px'],
    width: '100%',
    marginBottom: '72px',
  },
};
