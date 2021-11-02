import { Grid, Typography } from '@mui/material'
import appIcon from '../../images/svg/apps.svg'
import Image from 'next/image'
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone'
import Project from '../Project'

function Main({ projects }) {
  return (
    <>
      <Grid 
        container 
        alignItems="center" 
        justifyContent="space-around" 
        sx={{
          mt: "4rem"
        }}
      >
        <Grid item sm={6}>
          <Image src={appIcon} alt="Projects Icon (Illustration)" />
        </Grid>
        <Grid item sm={6}>
          <Typography 
            variant="h3" 
            component='div' 
            className="text-shadow"
            color="primary"
            
            sx={{
              fontFamily: 'Merienda',
              fontSize: '3rem',
              p: '1rem'
            }}
          >
            <AppsTwoToneIcon fontSize="inherit" color="primary" /> My Web App Projects
          </Typography>
        </Grid>
      </Grid>
      {
        projects.length > 0 ?
        projects.map(project => {
        return <Project project={project} key={project._id} />
        }) :  <Typography variant="body1">There is no Projects Yet.</Typography>
      }
    </>
  )
}

export default Main
