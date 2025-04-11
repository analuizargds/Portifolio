import '../App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import info from '../assets/images/info.png';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Main = () => {
    return (
        <Box id='inicio'>
        <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10}}>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 10, maxWidth: '45%'}}>
            <Typography variant="h2" sx={{color: '#F5F2D0', marginTop: 3, fontFamily: 'fantasy'}}>Olá! Me chamo Ana Luíza e sou</Typography>
            <Typography variant="h2" sx={{backgroundImage: 'linear-gradient(90deg, #A000C8, #FF00FF)', backgroundClip: 'text', color: 'transparent', fontFamily: 'fantasy'}}>DESENVOLVEDORA FULLSTACK</Typography>
          </Box>
          <Box sx={{minWidth: '30%', marginTop: 10}}>
          <img src={info} alt='code' className='App-logo' height={300}/>
          </Box>
        </Box>
        <Box component="section" sx={{display: 'flex', flexDirection: 'row', width: '50%', flexWrap: 'wrap'}}>
          <Button href='https://github.com/analuizargds' target='_blank' sx={{marginRight: 1, transition: "transform 0.3s, background-color 0.3s", "&:hover": {backgroundColor: 'rgba(160, 0, 200, 0.4)', transform: "scale(1.1)"}}}>
            <GitHubIcon sx={{color: '#F5F2D0', fontSize: 50}}/>
          </Button>
          <Button href='https://www.linkedin.com/in/analuizargds' target='_blank' sx={{marginRight: 1, transition: "transform 0.3s, background-color 0.3s", "&:hover": {backgroundColor: 'rgba(160, 0, 200, 0.4)', transform: "scale(1.1)"}}}>
            <LinkedInIcon sx={{color: '#F5F2D0', fontSize: 50}}/>
          </Button>
          <Button href='/AnaLuizaSilva_CV.pdf' download="Curriculo_AnaLuiza.pdf" sx={{backgroundColor: '#2C2C2A',transition: "transform 0.3s, background-color 0.3s", "&:hover": {backgroundColor: 'rgba(160, 0, 200, 0.4)', transform: "scale(1.1)"}}}>
            <FileDownloadIcon sx={{color: '#F5F2D0', fontSize: 30}}/>
            <Typography sx={{color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy', marginLeft: 1}}>Download CV</Typography>
          </Button>
        </Box>
      </Box>
    )
}

export default Main;