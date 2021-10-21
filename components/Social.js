import { Container, IconButton } from '@mui/material'
import { FacebookTwoTone, GitHub, LinkedIn } from '@mui/icons-material'
import Contact from './Contact'

function Social() {
  return (
    <>
      <Container maxWidth="sm" style={{textAlign: 'center'}}>
        <Contact />
        <IconButton aria-label="my facebook" color="primary">
          <FacebookTwoTone sx={{fontSize: '2.5rem'}} />
        </IconButton>
        <IconButton aria-label="my facebook" color="primary">
          <GitHub sx={{fontSize: '2.5rem'}} />
        </IconButton>
        <IconButton aria-label="my facebook" color="primary">
          <LinkedIn sx={{fontSize: '2.5rem'}} />
        </IconButton>
      </Container>
    </>
  )
}

export default Social
