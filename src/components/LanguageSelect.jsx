import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLanguageStore } from '../utils/languageStore';
import { SELECT_STYLES } from '../constants';

const LanguageSelect = () => {
  const { language, setLanguage, languages } = useLanguageStore();
  
  // Handle language change
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };
  
  return (
    <Select
      value={language}
      onChange={handleLanguageChange}
      IconComponent={KeyboardArrowDownIcon}
      sx={SELECT_STYLES}
      renderValue={(selected) => {
        const selectedLang = languages.find((lang) => lang.code === selected);
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={selectedLang.flag}
              alt={`${selected} flag`}
              style={{ width: '24px', height: '18px' }}
            />
          </Box>
        );
      }}
    >
      {languages.map(({ code, flag, label }) => (
        <MenuItem key={code} value={code}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img
              src={flag}
              alt={`${code} flag`}
              style={{ width: '24px', height: '18px' }}
            />
            {label}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}

export default LanguageSelect;