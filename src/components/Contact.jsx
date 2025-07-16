import { useState } from 'react'
import { Typography, Card, CardContent, TextField, Button, Container, Box } from '@mui/material'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>
      
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            Have questions or suggestions? We'd love to hear from you!
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto' }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              margin="normal"
            />
            
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />
            
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              margin="normal"
            />
            
            <Button 
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact 