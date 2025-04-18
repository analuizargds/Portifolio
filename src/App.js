import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import projects from './constants/Projects';
import profile from './assets/images/profile.jpeg';
import { MdEmail } from "react-icons/md";
import Main from './components/Main';

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
      <Main />
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
      <Box id='contato' sx={{borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: '#F5F2D0', width: '100%', paddingBottom: 10}}>
        <Typography sx={{color: '#A000C8',
          fontSize: 40,
          fontFamily: 'fantasy',
          marginTop: 5}}>
          CONTATO
        </Typography>
        <Typography sx={{color: '#F5F2D0',
          fontSize: 16,
          fontFamily: 'fantasy',
          marginBottom: 5}}>
          Fale comigo
        </Typography>
        <Typography sx={{color: '#F5F2D0',
          fontSize: 18,
          fontFamily: 'fantasy',
          width: '50%',
          marginBottom: 5}}>
          Estou sempre aberta a novas oportunidades e desafios. Se você deseja entrar em contato, não hesite em me enviar uma mensagem.
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', width: '50%', alignItems: 'center'}}>
          <MdEmail color='#A000C8' size={30}/>
          <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 2}}>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'fantasy' }}>
              E-mail
            </Typography>
            <Typography sx={{ color: '#F5F2D0', fontSize: 16, fontFamily: 'sans-serif' }}>
              <a href="mailto:analuizargds@gmail.com" style={{ color: 'rgba(245, 242, 208, 0.7)' }}>analuizargds@gmail.com</a>
            </Typography>
          </Box>
        </Box>
        {/* <Box component="form" sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <TextField label="Nome" variant="outlined" sx={{ marginBottom: 2, backgroundColor: '#F5F2D0' }} />
          <TextField label="E-mail" variant="outlined" sx={{ marginBottom: 2, backgroundColor: '#F5F2D0' }} />
          <TextField
            label="Mensagem"
            variant="outlined"
            multiline
            rows={4}
            sx={{ marginBottom: 2, backgroundColor: '#F5F2D0' }}
          />
          <Button variant="contained" sx={{ backgroundColor: '#A000C8', color: '#F5F2D0' }}>
            Enviar
          </Button>
        </Box> */}
      </Box>
    </Container> 
  );
}

export default App;
