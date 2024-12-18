import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';

const AboutPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#e0f7fa"
      py={6}
      px={3}
    >
      {/* Hero Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: '800px',
          textAlign: 'center',
          bgcolor: 'white',
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#004d40',
            fontWeight: 'bold',
            mb: 2,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          About Cricket Zone
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#00796b',
            lineHeight: 1.8,
            fontSize: '1.1rem',
          }}
        >
          Welcome to <strong>Cricket Zone</strong>! We're passionate about the game
          that unites millions. From match analyses to player stories, our blog is
          a hub for cricket enthusiasts who live and breathe the sport. Whether you
          want to stay updated with the latest matches or share your own cricketing
          journey, Cricket Zone is the place to be.
        </Typography>
      </Paper>

      {/* Highlights Section */}
      <Box maxWidth="900px" width="100%" px={2}>
        <Typography
          variant="h4"
          sx={{
            color: '#004d40',
            fontWeight: 'bold',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Why Choose Cricket Zone?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                bgcolor: 'white',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#004d40',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Match Analysis
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#00796b',
                }}
              >
                Get deep insights into every game, from player stats to match
                strategies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                bgcolor: 'white',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#004d40',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Player Stories
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#00796b',
                }}
              >
                Read inspiring journeys of cricketing legends and rising stars.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                bgcolor: 'white',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#004d40',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Community Blogs
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#00796b',
                }}
              >
                Share your cricketing moments and connect with fellow enthusiasts.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box mt={5} sx={{ display: 'flex', gap: 7 }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            bgcolor: '#004d40',
            '&:hover': {
              bgcolor: '#00332c',
            },
          }}
          href="/add-blog"
        >
          Share Your Story
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            bgcolor: '#004d40',
            '&:hover': {
              bgcolor: '#00332c',
            },
          }}
          href="/"
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutPage;
