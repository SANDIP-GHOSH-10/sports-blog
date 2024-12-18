import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const galleryData = [
  {
    title: "Match Highlights",
    image: "https://resources.cricket-australia.pulselive.com/cricket-australia/photo/2024/08/25/2b0af0df-b94b-4767-8aec-f1da94ac6aac/yq0SIPOl.jpg",
    description: "Best moments from yesterday's match.",
  },
  {
    title: "Team Celebrations",
    image: "https://www.hindustantimes.com/ht-img/img/2023/11/18/550x309/India-celebrate-after-Mohammed-Shami-claims-a-wick_1700314432457.jpg",
    description: "Post-match celebration pictures.",
  },
  {
    title: "Player of the Match",
    image: "https://static.toiimg.com/thumb/msid-95123042,imgsize-107256,width-400,resizemode-4/95123042.jpg",
    description: "A tribute to the star performer.",
  }
];

const Gallery = () => {
  return (
    <>
      {/* <Box sx={{ padding: "20px", backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "13px",
          fontWeight: "bold",
          color: "#004d40",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Cricket Moments Gallery
      </Typography>
      <Grid container spacing={3}>
        {galleryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box> */}
    <Box sx={{ padding: "20px", backgroundColor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "bold",
          color: "#004d40",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Cricket Moments Gallery
      </Typography>
      <Grid container spacing={3}>
        {galleryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: "relative", boxShadow: 3, overflow: "hidden" }}>
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: '123px',
                  left: 0,
                  width: "100%",
                  height: "30%",
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
    
  );
};

export default Gallery;
