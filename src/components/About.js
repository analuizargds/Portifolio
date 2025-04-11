import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiReact, SiPython, SiPostman } from "react-icons/si";
import { FaNode, FaGitAlt, FaFigma } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

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
          marginBottom: 5
        }}>
          SOBRE MIM
        </Typography>
        <Typography sx={{
          color: '#F5F2D0',
          fontSize: 18,
          fontFamily: 'sans-serif',
          width: '70%',
          marginBottom: 5
        }}>
          Sou Desenvolvedora FullStack com experiência em desenvolvimento Web e Mobile. Atualmente estou no 9º semestre de 
          Engenharia de Software na Universidade de Brasília (UnB), onde desde 2021 venho explorando diversas áreas da computação, 
          como desenvolvimento FullStack, gerenciamento de projetos e análise de dados. Tenho paixão por aprender, encarar 
          desafios e buscar constantemente novas oportunidades que impulsionem meu crescimento profissional.
        </Typography>
        <Typography sx={{
          color: '#A000C8',
          fontSize: 25,
          fontFamily: 'fantasy'
        }}>
          HABILIDADES
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', width: '70%'}}>
          <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2}}>
            <Typography 
              sx={{color: '#F5F2D0',
              fontSize: 20,
              fontFamily: 'fantasy'}}
            >
              LINGUAGENS
            </Typography>
            <SiHtml5 color='#E34F26' size={30}/>
            <SiCss3 color='#1572B6' size={30}/>
            <SiJavascript color='#F7DF1E' size={30}/>
            <SiTypescript color='#007ACC' size={30}/>
            <SiPython color='#3776AB' size={30}/>
          </Box>
          <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 2}}>
          <Typography 
              sx={{color: '#F5F2D0',
              fontSize: 20,
              fontFamily: 'fantasy'}}
            >
              FERRAMENTAS
            </Typography>
            <SiReact color='#61DAFB' size={30}/>
            <FaNode color='#8CC84B' size={30}/>
            <DiMysql color='#4479A1' size={30}/>
            <FaGitAlt color='#F05032' size={30}/>
            <FaFigma color='#F24E1E' size={30}/>
            <SiPostman color='#FF6C37' size={30}/>
          </Box>
        </Box>
      </Box>
      <img src={perfil} alt='code' className='Profile' height={300} />
    </Box>
  );
};

export default About;