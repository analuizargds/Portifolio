import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = ({ perfil }) => {
  return (
    <Box component="section" id="sobre" sx={{
      minHeight: '100vh',
      width: '100%',
      justifyContent: 'space-evenly',
      marginTop: 10,
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Box sx={{ width: '70%' }}>
        <Typography sx={{
          color: '#A000C8',
          fontSize: 40,
          fontFamily: 'fantasy',
          marginBottom: 10
        }}>
          SOBRE MIM
        </Typography>
        <Typography sx={{
          color: '#F5F2D0',
          fontSize: 18,
          fontFamily: 'sans-serif',
          width: '70%'
        }}>
          Sou Desenvolvedora FullStack com experiência em desenvolvimento Web e Mobile. Atualmente estou no 9º semestre de 
          Engenharia de Software na Universidade de Brasília (UnB), onde desde 2021 venho explorando diversas áreas da computação, 
          como desenvolvimento FullStack, gerenciamento de projetos e análise de dados. Tenho paixão por aprender, encarar 
          desafios e buscar constantemente novas oportunidades que impulsionem meu crescimento profissional.
        </Typography>
      </Box>
      <img src={perfil} alt='code' className='Profile' height={300} />
    </Box>
  );
};

export default About;