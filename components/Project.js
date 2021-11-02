import { Grid, Card, CardHeader, CardContent, CardActions, Avatar, Typography, Chip, Container } from '@mui/material'
import Image from 'next/image'
import { LinkTwoTone, GitHub, Code } from '@mui/icons-material'

function Project({ project }) {
  
  return (
    <Grid 
      container
      alignItems="center" 
      justifyContent="space-around"
      direction="row-reverse" 
      sx={{
        mt: "4rem"
      }}
    >
      <Grid item lg={7}>
        <Image 
          src={project.thumbnail[0].url} 
          alt={`${project.title} Screenshot.`} 
          height={project.thumbnail[0].height} 
          width={project.thumbnail[0].width} 
        />
      </Grid>
      <Grid item lg={4}>
        <Card className="glassmorph">
          <CardHeader
            avatar={
              <Avatar 
                src={project.site_icon["0"].url} 
                sx={{ bgcolor: 'red', width: '4rem', height: '4rem' }} 
                aria-label={project.title} 
              />
            }
            title={project.title}
            subheader={project._changed_on}
            titleTypographyProps={{
              color: 'primary',
              fontSize: '2.2rem',
              fontFamily: 'Merienda',

            }}
            subheaderTypographyProps={{
              color: 'secondary',
              fontSize: '1.5rem',
              fontFamily: 'Merienda',
            }}
          />
          <CardContent>
            <Typography 
              variant="body1" 
              color="secondary"
              fontFamily="Merienda"
              fontSize="1.2rem"
            >
              {project.description}
            </Typography>
            <Typography variant="h5" color="primary" fontFamily="Merienda" sx={{mt: '1rem', mb: '1rem'}}>
              <Code fontSize="inherit" /> Build With:
            </Typography>
            <Image 
              src={project.build_with[0].url} 
              alt={`${project.title} build with Screenshot.`} 
              height={project.build_with[0].height} 
              width={project.build_with[0].width} layout="responsive"
            />
          </CardContent>
          <CardActions className="justify-center" sx={{ mb: '1rem'}}>
            <Chip
              label="Visit The App"
              icon={<LinkTwoTone className="text-shadow" color="primary" />}
              color="primary"
              variant="outlined"
              clickable
              href={project.site_url}
              component="a"
            />
            <Chip
              label="View The App Ripo"
              icon={<GitHub  color="primary"  />}
              color="primary"
              variant="outlined"
              clickable
              href={project.github_ripo}
              component="a"
            />
          </CardActions>
        </Card>
      </Grid>
      
    </Grid>
  )
}

export default Project
