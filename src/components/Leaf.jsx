import leafImage from '../assets/vectorOne.png'
import { Box } from '@mui/material'

const Leaf = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '5%',
        left: '-33%',
        width: '70%',
        height: '70%',
        backgroundImage: `url(${leafImage})`,
        backgroundRepeat: 'repeat-y', // Repeat vertically
        backgroundSize: 'contain', // Keep original size
        zIndex: -1
      }}
    />);
};

export default Leaf;
