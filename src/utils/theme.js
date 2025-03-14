import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Segoe UI", sans-serif',
    },
    palette: {
        primary: {
            main: '#F9B800',
        },
        secondary: {
            main: '#262626',
        },
        text: {
            primary: '#262626',
            secondary: 'rgba(0, 0, 0, 0.7)',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
        grey: {
            900: '#1A1A1A',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F9B800',
                    color: '#262626',
                    borderRadius: '999px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '16px',
                    padding: '16px 36px',
                    gap: 4,
                    '&:hover': {
                        backgroundColor: '#e0a500',
                        transition: 'background-color 0.3s ease',
                    },
                },
            },
        },
    },
});

export default theme;