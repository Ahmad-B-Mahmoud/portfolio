import { useState, useRef } from 'react';
import { Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Grid } from '@mui/material'
import { EmailTwoTone, AccountCircle, AlternateEmail, Send, Cancel } from '@mui/icons-material'

function Contact() {
  const [open, setOpen] = useState(false);
  const myForm = useRef()

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
      setOpen(false)
  }

  return (
    <>
      <IconButton onClick={handleClickOpen} aria-label="email me" color="primary">
        <EmailTwoTone sx={{fontSize: '2.5rem'}} />
      </IconButton>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        PaperProps={{
          style: {
            background: "rgba( 31, 32, 65, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba(255, 200, 87, 0.37)",
            backdropFilter: "blur( 4px )",
            borderRadius: "10px",
            border: "1px solid rgba(255, 200, 87, 0.3)",
            color:"primary"
          }
        }}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle color="primary" fontFamily="Merienda" fontSize="2rem"><EmailTwoTone sx={{fontSize: '2rem'}} /> Contact Me</DialogTitle>
        <DialogContent>
          <form  ref={myForm} name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="contact" />
            <Grid container>
              <Grid item md={6}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: '1rem' }}>
                <AccountCircle color="primary" sx={{ mr: 1, my: 0.5, fontSize: '2.5rem' }} />
                <TextField 
                  label="Your Name" 
                  variant="filled"
                  focused
                  type="text"
                  color="primary"
                  required
                  name="Name"
                />
              </Box>
              </Grid>
              <Grid item md={6}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: '1rem' }}>
                  <AlternateEmail color="primary" sx={{ mr: 1, my: 0.5, fontSize: '2.5rem'}} />
                  <TextField 
                    label="Your Email" 
                    variant="filled"
                    focused
                    type="email"
                    color="primary"
                    required
                    name="email"
                  />
                </Box>
              </Grid>
            </Grid>
            <TextField
              label="Your Message"
              type="text"
              fullWidth
              variant="filled"
              color="primary"
              required
              focused
              multiline
              rows="5"
              placeholder="Looking forward for your message..."
              name="message"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel <Cancel color="primary" /></Button>
          <Button onClick={handleSubmit}>Send <Send color="primary" /></Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Contact
