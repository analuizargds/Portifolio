
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';

const Project = ({projects}) => {
    return (
        <Box id="projetos" sx={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            flexWrap: 'wrap',
            }}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </Box>
    )
}

export default Project;