import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import profilePic from '../../images/me.png'
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';


function Header() {
  return (
    <>
      <Grid container direction="row-reverse" alignItems="center" style={{marginTop: '4rem'}}>
        <Grid item sm={6}>
          <Image src={profilePic} placeholder="blur" alt="me" />
        </Grid>
        <Grid item sm={6}>
          <Typography 
            variant="h1" 
            color="primary" 
            component="div" 
            textAlign="center"
            sx={{
              fontSize: '5rem',
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
              fontSize: '3rem',
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
        </Grid>
      </Grid>
    </>
  )
}

export default Header
