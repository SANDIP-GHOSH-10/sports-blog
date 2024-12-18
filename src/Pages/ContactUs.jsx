import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
} from '@mui/material';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("Asset/contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
        position: 'relative',
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(6px)',
          zIndex: 1,
        }}
      />
      
      {/* Form Container */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)',
          }}
        >
         <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
          color: "#004d40",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="center"
            sx={{
              mb: 4,
              color: '#004d40',
              fontSize: '16px',
              lineHeight: 1.7,
            }}
          >
            Have any questions, feedback, or suggestions about <strong>Cricket Zone</strong>? Fill out this form,
            and our team will reach out to you shortly!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              '& .MuiTextField-root': { mb: 3 },
              '& .MuiButton-root': { mt: 2 },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
            </Grid>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                sx={{
                  px: 5,
                  py: 1.7,
                  borderRadius: 4,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '16px',
                  backgroundColor: '#058771',
                  boxShadow: '0px 6px 15px rgba(255, 87, 34, 0.5)',
                  '&:hover': {
                    backgroundColor: '#004d40',
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
