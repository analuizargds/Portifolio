import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import info from './assets/images/info.png';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import projects from './constants/Projects';
import profile from './assets/images/profile.jpeg';

function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 40;
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container sx={{ backgroundColor: '#0c0c0c'}}>
      <Header scrollToSection={scrollToSection} />
      <Box sx={{minHeight:'100vh', alignItems: 'center'}}>
        <Box component="section" sx={{display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10}}>
          <Box component="section" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 10, maxWidth: '45%'}}>
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
      <About perfil={profile} />
      <Box component="section" id="experiencias" sx={{minHeight:'100vh', width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Box 
          sx={{
            position: 'absolute', 
            height: '80%', 
            width: '4px', 
            backgroundColor: '#A000C8', 
            left: '10%'
          }}
        />
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            width: '80%'
          }}
        >
          <Box sx={{ width: '50%', paddingRight: 3, marginLeft: 10 }}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>
              Estagiária de TI - SDNA
            </Typography>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'fantasy' }}>
              AGO 2024 - FEV 2024
            </Typography>
          </Box>
          <Box 
            sx={{
              width: '20px', 
              height: '20px', 
              backgroundColor: '#A000C8', 
              borderRadius: '50%', 
              border: '4px solid #F5F2D0',
              position: 'absolute',
              left: '9%',
            }}
          />
          <Box sx={{ width: '60%', textAlign: 'left', paddingLeft: 3 }}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginBottom: 2 }}>
            Realizei o desenvolvimento e manutenção de sistema de conciliação financeira utilizando Python e PySpark para processamento de
            grandes volumes de dados.
            </Typography>
          </Box>
        </Box>
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            width: '80%'
          }}
        >
          <Box sx={{ width: '50%', paddingRight: 3, marginLeft: 10 }}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>
              Desenvolvedora Mobile - Cria Incubator
            </Typography>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'fantasy' }}>
              MAR 2024 - AGO 2024
            </Typography>
          </Box>
          <Box 
            sx={{
              width: '20px', 
              height: '20px', 
              backgroundColor: '#A000C8', 
              borderRadius: '50%', 
              border: '4px solid #F5F2D0',
              position: 'absolute',
              left: '9%',
            }}
          />
          <Box sx={{ width: '60%', textAlign: 'left', paddingLeft: 3 }}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginBottom: 2 }}>
            Participei do ciclo completo de desenvolvimento de softwares, com foco em projetos de
            Inteligência Artificial, atuando no Back-end e Front-end.
            </Typography>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginBottom: 2 }}>
            Realizei revisões de código e refatorações para garantir qualidade e eficiência nos projetos.
            </Typography>
          </Box>
        </Box>
        <Box 
          sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            width: '80%'
          }}
        >
          <Box sx={{ width: '50%', paddingRight: 3, marginLeft: 10 }}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy' }}>
              Gerente de Projeto - EngNet Consultoria (Empresa Júnior)
            </Typography>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'fantasy' }}>
              FEV 2024 - JAN 2025
            </Typography>
          </Box>
          <Box 
            sx={{
              width: '20px', 
              height: '20px', 
              backgroundColor: '#A000C8', 
              borderRadius: '50%', 
              border: '4px solid #F5F2D0',
              position: 'absolute',
              left: '9%',
            }}
          />
          <Box sx={{ width: '60%', textAlign: 'left', paddingLeft: 3 }}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginBottom: 2 }}>
            Liderei uma consultoria completa desenvolvendo protótipos de alta fidelidade, realizando entrevistas de usabilidade e
            elaborando documentação técnica.
            </Typography>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginBottom: 2 }}>
            Gerenciei o desenvolvimento do aplicativo resultante, incluindo gestão da equipe, code reviews e administração do
            repositório e deploy na Play Store.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Project projects={projects} />
      <Box id='contato' sx={{borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#F5F2D0', width: '100%', marginBottom: 10}}>
        <Typography sx={{color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy', marginTop: 3, textAlign: 'center'}}>
          Contato
        </Typography>
      </Box>
    </Container> 
  );
}

export default App;
