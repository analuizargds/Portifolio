import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

const ProjectCard = ({ project }) => {
  return (
    <Box sx={{
      borderRadius: 6,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: '#1a1a1c',
      paddingBottom: 3,
      maxWidth: '410px',
      minWidth: '350px',
      marginX: 5,
    }}>
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: 200,
        '&:hover .overlay': {
          opacity: 1,
        },
      }}>
        <img src={project.imagem} alt={project.titulo} style={{ width: '100%', height: '100%' }} />
        <Box className="overlay" sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button href={project.links.github} target="_blank" sx={{ color: '#F5F2D0', marginBottom: 1 }}>
            <GitHubIcon sx={{ color: '#F5F2D0', fontSize: 20, marginRight: 1 }} />
            GitHub
          </Button>
          <Button href={project.links.vercel} target="_blank" sx={{ color: '#F5F2D0' }}>
            <PublicIcon sx={{ color: '#F5F2D0', fontSize: 20, marginRight: 1 }} />
            Vercel
          </Button>
        </Box>
      </Box>
      <Typography sx={{ color: '#F5F2D0', fontSize: 24, fontFamily: 'fantasy', marginLeft: 3, marginY: 3 }}>
        {project.titulo}
      </Typography>
      <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginX: 3 }}>
        {project.descricao}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {project.tecnologias.map((tecnologia, index) => (
          <Box key={index} sx={{
            width: '30%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            marginTop: 1,
            paddingY: 1,
            backgroundColor: '#2A2A2C',
            marginRight: 1,
          }}>
            {tecnologia.icone}
            <Typography sx={{ color: '#F5F2D0', fontSize: 14, fontFamily: 'sans-serif', marginLeft: 1 }}>
              {tecnologia.nome}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCard;