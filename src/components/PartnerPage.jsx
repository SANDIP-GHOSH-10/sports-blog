import React from "react";
import { Box, Typography, Grid, Card, CardMedia, Divider } from "@mui/material";

const sponsorsData = [
  {
    name: "Sponsor A",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1705588073/prd/assets/sponsors/5-T1-Emirates_dfab1b.png",
    description: "Proudly supporting cricket excellence.",
  },
  {
    name: "Sponsor B",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1705587944/prd/assets/sponsors/4-T1-aramco-01_rpnfln.png",
    description: "Champions of sports culture.",
  },
  {
    name: "Sponsor C",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1726663646/prd/assets/dp-world-new-logo.png",
    description: "Advancing the spirit of cricket.",
  },
  {
    name: "Sponsor D",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1706102226/prd/assets/sponsors/cocacola_yzkrqa.png",
    description: "Empowering sports innovation.",
  },
  
  {
    name: "Sponsor C",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1717640442/prd/assets/sponsors/Royal_Stag_200mm_wkcdaf.png",
    description: "Advancing the spirit of cricket.",
  },
  {
    name: "Sponsor D",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1729244619/prd/assets/fancraze-new-logo.png",
    description: "Empowering sports innovation.",
  },
  {
    name: "Sponsor D",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1718351614/prd/assets/sponsors/near_dark.png",
    description: "Empowering sports innovation.",
  },
  {
    name: "Sponsor D",
    image: "https://images.icc-cricket.com/image/private/t_w_180/v1707311901/prd/assets/sponsors/cricket_4_sycngh.png",
    description: "Empowering sports innovation.",
  }
];

const PartnerPage = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "3px",
          fontWeight: "bold",
          color: "#004d40",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        Our Official Partners
      </Typography>

      <Divider sx={{ marginBottom: "20px", borderColor: "#004d40" }} />

      <Grid container spacing={2} justifyContent="center">
        {sponsorsData.map((sponsor, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={1} key={idx}>
            <Card
              sx={{
                boxShadow: 5,
                borderRadius: "15px",
                textAlign: "center",
                height:"35px",
                backgroundColor: "grey",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="36"
                image={sponsor.image}
                alt={sponsor.name}
                sx={{
                  objectFit: "contain",
                  padding: "1px",
                //   backgroundColor: "#e8f5e9",
                }}
              />
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnerPage; 
