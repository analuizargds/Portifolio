import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = ({ scrollToSection }) => {
  return (
    <Box component="section" sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#0c0c0c',
      padding: '10px 20px',
      zIndex: 1000,
      borderBottom: '1px solid #A000C8'
    }}>
      <Typography variant="h4" sx={{
        backgroundImage: 'linear-gradient(90deg, #A000C8, #FF00FF)',
        backgroundClip: 'text',
        color: 'transparent',
        marginTop: 3,
        width: '40%',
        fontFamily: 'fantasy'
      }}
      onClick={() => scrollToSection('inicio')}
      >
        ANA LUÍZA SILVA
      </Typography>
      <Box component="section" sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        marginRight: 10
      }}>
        <Button onClick={() => scrollToSection('sobre')}>
          <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>Sobre</Typography>
        </Button>
        <Button onClick={() => scrollToSection('experiencias')}>
          <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>Experiências</Typography>
        </Button>
        <Button onClick={() => scrollToSection('projetos')}>
          <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>Projetos</Typography>
        </Button>
        <Button onClick={() => scrollToSection('contato')}>
          <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>Contato</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;