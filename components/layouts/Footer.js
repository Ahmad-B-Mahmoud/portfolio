import { Box, Container } from '@mui/material'
import Social from '../Social'


function Footer() {
  return (
    <Container maxWidth="md" sx={{mt: 10}}>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          background: 'none'
        }}
      >
        <Social />
      </Box>
    </Container>
  )
}

export default Footer
