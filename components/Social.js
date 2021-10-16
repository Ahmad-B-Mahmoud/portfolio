import { Container, IconButton } from '@mui/material'
import { FacebookTwoTone, GitHub, LinkedIn } from '@mui/icons-material'

function Social() {
  return (
    <>
      <Container maxWidth="sm" style={{textAlign: 'center'}}>
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
