import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import profilePic from '../../images/me.png'
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import Social from '../Social';

function Header() {
  return (
    <>
      <Grid container direction="row-reverse" alignItems="center" style={{marginTop: '4rem'}}>
        <Grid item lg={6}>
          <Image src={profilePic} placeholder="blur" alt="me" priority />
        </Grid>
        <Grid item lg={6}>
          <Typography 
            variant="h1" 
            color="primary" 
            component="div" 
            textAlign="center"
            sx={{
              fontSize: '4rem',
              fontFamily: 'Merienda',
              mb: '1rem'
            }}
            className="text-shadow" 
          >
            Ahmad Mahmoud
          </Typography>
          <Typography 
            variant="h2" 
            component="div" 
            textAlign="center"
            sx={{
              fontSize: '2.5rem',
              fontFamily: 'Merienda',
              mb: '2rem',
            }}
            className="text-shadow" 
          >
            <WorkTwoToneIcon fontSize="inherit" /> Web Developer
          </Typography>
          <Typography 
            variant="h4" 
            component='div' 
            textAlign="center"
            sx={{
              fontSize: '2.5rem',
              fontFamily: 'Caveat',
              mb: '2rem'
            }}
            className="text-shadow" 
          >
            Hi, I am a Web Developer that develop websites and Web Applications.
          </Typography>
          <Social />
        </Grid>
      </Grid>
    </>
  )
}

export default Header
