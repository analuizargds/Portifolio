import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import image from './image.png';
import perfil from './perfil.jpeg';
import calendar from './calendar.png';
import { FaNode, FaReact, FaAngular, FaJava } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

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
    <Container sx={{ backgroundColor: '#0c0c0c'}}>Zustand
      <Box component="section" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', position: 'fixed', top: 0, left: 0, backgroundColor: '#0c0c0c', padding: '10px 20px', zIndex: 1000, borderBottom: '1px solid #A000C8'}}>
        <Typography variant="h4" sx={{backgroundImage: 'linear-gradient(90deg, #A000C8, #FF00FF)', backgroundClip: 'text', color: 'transparent', marginTop: 3,width: '40%', fontFamily: 'fantasy'}}>ANA LUÍZA SILVA</Typography>
        <Box component="section" sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flexWrap: 'wrap', marginRight: 10}}>
          <Button onClick={() => scrollToSection('sobre')}>
            <Typography sx={{color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy'}}>Sobre</Typography>
          </Button>
          <Button onClick={() => scrollToSection('experiencias')}>
            <Typography sx={{color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy'}}>Experiências</Typography>
          </Button>
          <Button onClick={() => scrollToSection('projetos')}>
            <Typography sx={{color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy'}}>Projetos</Typography>
          </Button>
          <Button>
            <Typography sx={{color: '#F5F2D0', fontSize: 20, fontFamily: 'fantasy'}}>Contato</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{minHeight:'100vh', alignItems: 'center'}}>
        <Box component="section" sx={{display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10}}>
          <Box component="section" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 10, maxWidth: '45%'}}>
            <Typography variant="h2" sx={{color: '#F5F2D0', marginTop: 3, fontFamily: 'fantasy'}}>Olá! Me chamo Ana Luíza e sou</Typography>
            <Typography variant="h2" sx={{backgroundImage: 'linear-gradient(90deg, #A000C8, #FF00FF)', backgroundClip: 'text', color: 'transparent', fontFamily: 'fantasy'}}>DESENVOLVEDORA FULLSTACK</Typography>
          </Box>
          <Box sx={{minWidth: '30%', marginTop: 10}}>
          <img src={image} alt='code' className='App-logo' height={300}/>
          </Box>
        </Box>
        <Box component="section" sx={{display: 'flex', flexDirection: 'row', width: '50%', flexWrap: 'wrap'}}>
        <Button href='https://github.com/analuizargds' target='_blank'>
          <GitHubIcon sx={{color: '#F5F2D0', fontSize: 50, transition: "0.3s", "&:hover": {fontSize: 55}}}/>
        </Button>
        <Button href='https://www.linkedin.com/in/analuizargds' target='_blank'>
          <LinkedInIcon sx={{color: '#F5F2D0', fontSize: 50, transition: "0.3s", "&:hover": {fontSize: 55}}}/>
        </Button>
      </Box>
      </Box>
      <Box component="section" id="sobre" sx={{minHeight:'100vh', width: '100%', justifyContent: 'space-evenly', marginTop: 10, flexWrap: 'wrap', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Box sx={{width: '70%'}}>
          <Typography sx={{color: '#A000C8', fontSize: 40, fontFamily: 'fantasy', marginBottom: 10}}>SOBRE MIM</Typography>
          <Typography sx={{color: '#F5F2D0', fontSize: 18, fontFamily: 'sans-serif', width: '70%'}}>
            Sou Desenvolvedora FullStack com experiência em desenvolvimento Web e Mobile. Atualmente estou no 9º semestre de 
            Engenharia de Software na Universidade de Brasília (UnB), onde desde 2021 venho explorando diversas áreas da computação, 
            como desenvolvimento FullStack, gerenciamento de projetos e análise de dados. Tenho paixão por aprender, encarar 
            desafios e buscar constantemente novas oportunidades que impulsionem meu crescimento profissional.
          </Typography>
        </Box>
        <img src={perfil} alt='code' className='Profile' height={300}/>
      </Box>
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
      <Box id='projetos' sx={{minHeight:'100vh', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, flexWrap: 'wrap'}}>
        <Box sx={{borderRadius: 6, marginBottom: 5, overflow: 'hidden', backgroundColor: '#1a1a1c', paddingBottom: 3, maxWidth: '410px', marginX: 5}}>
          <Box 
            sx={{
              position: 'relative',
              width: '100%',
              height: 200,
              '&:hover .overlay': {
                opacity: 1,
              },
            }}
          >
            <img src={calendar} alt="code" style={{ width: '100%', height: '100%' }} />
            <Box 
              className="overlay"
              sx={{
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
              }}
            >
              <Button 
                href="https://github.com/analuizargds/desafio-frontend-jr" 
                target="_blank" 
                sx={{ color: '#F5F2D0', marginBottom: 1 }}
              >
                <GitHubIcon sx={{color: '#F5F2D0', fontSize: 20, marginRight: 1}}/>
                <Typography sx={{color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', fontWeight: 600}}>GitHub</Typography>
              </Button>
              <Button 
                href="https://desafio-frontend-jr-five.vercel.app/" 
                target="_blank" 
                sx={{ color: '#F5F2D0' }}
              >
                <PublicIcon sx={{color: '#F5F2D0', fontSize: 20, marginRight: 1}}/>
                <Typography sx={{color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', fontWeight: 600}}>Vercel</Typography>
              </Button>
            </Box>
          </Box>
          <Typography sx={{ color: '#F5F2D0', fontSize: 24, fontFamily: 'fantasy', marginLeft: 3, marginY: 3 }}>Calendário Interativo</Typography>
          <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif', marginX: 3 }}>Calendário para visualizar tarefas e eventos. Podendo navergar entre meses e anos</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Box sx={{width: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginTop: 1, paddingY: 1, backgroundColor: '#2A2A2C', marginRight: 1}}>
              <SiJavascript color='#FFFF00' size={15} />
              <Typography sx={{ color: '#F5F2D0', fontSize: 14, fontFamily: 'sans-serif', marginLeft: 1 }}>JavaScript</Typography>
            </Box>
            <Box sx={{width: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginTop: 1, paddingY: 1, backgroundColor: '#2A2A2C', marginRight: 1}}>
              <SiHtml5 color='#FF8C00' size={15} />
              <Typography sx={{ color: '#F5F2D0', fontSize: 14, fontFamily: 'sans-serif', marginLeft: 1 }}>HTML</Typography>
            </Box>
            <Box sx={{width: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 6, marginTop: 1, paddingY: 1, backgroundColor: '#2A2A2C', marginRight: 1}}>
              <SiCss3 color='#00BFFF' size={15} />
              <Typography sx={{ color: '#F5F2D0', fontSize: 14, fontFamily: 'sans-serif', marginLeft: 1 }}>CSS</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container> 
  );
}

export default App;
