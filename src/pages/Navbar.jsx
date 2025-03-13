import { AppBar, Toolbar, Container } from '@mui/material';
import Logo from '../icons/Logo';
import LanguageSelect from '../components/LanguageSel';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ height: 77 }} elevation={0}>
      <Container>
        <Toolbar
          sx={{
            height: 77,
            minHeight: 77,
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #2626261F',
          }}
        >
          <Logo />
          <LanguageSelect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
