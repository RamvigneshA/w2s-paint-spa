import Box from '@mui/material/Box';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function LanguageSelect() {
  const [language, setLanguage] = useState('English');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Select
      value={language}
      onChange={handleChange}
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        '& .MuiSelect-select': {
          padding: '8px 32px 8px 8px !important',
          display: 'flex',
          alignItems: 'center',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
    >
      <MenuItem value="English">
        <img
          src="/flags/gb.svg"
          alt="UK flag"
          style={{ width: '24px', height: '18px' }}
        />
      </MenuItem>
      <MenuItem value="Spanish">
        <img
          src="/flags/es.svg"
          alt="Spanish flag"
          style={{ width: '24px', height: '18px' }}
        />
      </MenuItem>
      <MenuItem value="French">
        <img
          src="/flags/fr.svg"
          alt="French flag"
          style={{ width: '24px', height: '18px' }}
        />
      </MenuItem>
    </Select>
  );
} 