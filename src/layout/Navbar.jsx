import Logo from '../icons/Logo';
import LanguageSelect from '../components/LanguageSelect';
import { Stack } from '@mui/material';
import { STYLES } from '../constants';

const Navbar = () => {
  return (
    <Stack 
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
      sx={STYLES.NAVBAR}
    >
      <Logo />
      <LanguageSelect />
    </Stack>
  );
};

export default Navbar;
