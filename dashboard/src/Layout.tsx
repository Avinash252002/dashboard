
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';


const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box sx={{  maxHeight: '100vh' , height: '100%'  , margin : 0 }}>

      <Box sx={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%'  }}>
        <Navbar />
      </Box>
      

     
        <Box >
          {children}
        </Box>
      </Box>

  );
};

export default Layout;
