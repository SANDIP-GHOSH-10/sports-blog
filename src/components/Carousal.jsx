import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography, CircularProgress } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function Carousal() {
  const [isLoaded, setIsLoaded] = useState(false);

  const items = [
    {
      image: "Asset/carousal1.jpg",
      name: "ICC Cricket World Cup",
      description: "Explore the glory and excitement of the Cricket World Cup.",
    },
    {
      image: "Asset/carousal4.jpg",
      name: "Historic Ashes Rivalry",
      description: "Dive into the legendary battles between England and Australia.",
    },
    {
      image: "Asset/carousal3.jpg",
      name: "T20 Thrills",
      description: "Fast-paced action and unforgettable moments in T20 cricket.",
    },
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = items.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  if (!isLoaded) {
    return (
      (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5" >
            <CircularProgress color="primary" size={80} thickness={5} sx={{ mb: 2 }} />
            <Typography variant="h6" color="textSecondary" sx={{ fontFamily: 'Arial, sans-serif' }} >
                Loading, please wait...
            </Typography>
        </Box>
    )
    );
  }

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        animation="slide"
        navButtonsAlwaysVisible
        sx={{
          '& .MuiButtonBase-root': {
            backgroundColor: '#ffffff',
            color: '#000',
            '&:hover': {
              backgroundColor: '#f1f1f1',
            },
          },
        }}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function CarouselItem({ item }) {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        position: 'relative',
        textAlign: 'center',
        borderRadius: 0,
        boxShadow: 'none',
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'cover',
          filter: 'brightness(80%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '36%',
          width: '100%',
          color: '#fff',
          textAlign: 'center',
          textShadow: '2px 1px 2px #000',
          background: 'rgba(0, 0, 0, 0.1)',
          paddingBottom: '25px',
          p: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {item.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {item.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/add-blog')}
          
        >
          Add Your Blogs
        </Button>
      </Box>
    </Paper>
  );
}

export default Carousal;






















// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button, Box, Typography } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { useNavigate } from 'react-router-dom';

// function Carousal() {
//   const items = [
//     {
//       image: "Asset/carousal1.jpg",
//       name: "ICC Cricket World Cup",
//       description: "Explore the glory and excitement of the Cricket World Cup.",
//     },
//     {
//       image: "Asset/carousal2.jpg",
//       name: "Historic Ashes Rivalry",
//       description: "Dive into the legendary battles between England and Australia.",
//     },
//     {
//       image: "Asset/carousal3.jpg",
//       name: "T20 Thrills",
//       description: "Fast-paced action and unforgettable moments in T20 cricket.",
//     },
//   ];

//   return (
//     <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
//       <Carousel
//         NextIcon={<ArrowForwardIosIcon />}
//         PrevIcon={<ArrowBackIosIcon />}
//         animation="slide"
//         navButtonsAlwaysVisible
//         sx={{
//           '& .MuiButtonBase-root': {
//             backgroundColor: '#ffffff',
//             color: '#000',
//             '&:hover': {
//               backgroundColor: '#f1f1f1',
//             },
//           },
//         }}
//       >
//         {items.map((item, i) => (
//           <CarouselItem key={i} item={item} />
//         ))}
//       </Carousel>
//     </Box>
//   );
// }

// function CarouselItem({ item }) {
//   const navigate = useNavigate();

//   return (
//     <Paper
//       sx={{
//         position: 'relative',
//         textAlign: 'center',
//         borderRadius: 0,
//         boxShadow: 'none',
//       }}
//     >
//       <img
//         src={item.image}
//         alt={item.name}
//         style={{
//           width: '100%',
//           maxHeight: '500px',
//           objectFit: 'cover',
//           filter: 'brightness(80%)',
//         }}
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '36%',
//           width: '100%',
//           color: '#fff',
//           textAlign: 'center',
//           textShadow: '2px 1px 2px #000',
//           background: 'rgba(0, 0, 0, 0.1)',
//           paddingBottom: '25px',
//           p: 2,
//         }}
//       >
//         <Typography
//           variant="h3"
//           component="h2"
//           sx={{ fontWeight: 'bold', mb: 1 }}
//         >
//           {item.name}
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           {item.description}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => navigate('/add-blog')}
//         >
//           Add Your Blogs
//         </Button>
//       </Box>
//     </Paper>
//   );
// }

// export default Carousal;














// import React from 'react';
// import '.././Css/carousal_stylesheet.css'
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { useNavigate } from 'react-router-dom';
// function Carousal(props) {
//   const items = [
//     {
//       image: "Asset/carousal1.jpg",
//       name: "ICC Cricket World Cup",
//       description: "Explore the glory and excitement of the Cricket World Cup."
//     },
//     {
//       image: "Asset/carousal2.jpg",
//       name: "Historic Ashes Rivalry",
//       description: "Dive into the legendary battles between England and Australia."
//     },
//     {
//       image: "Asset/carousal3.jpg",
//       name: "T20 Thrills",
//       description: "Fast-paced action and unforgettable moments in T20 cricket."
//     }
//   ];

//   return (
//     <div className='banner-top'>
//       <Carousel 
//       NextIcon={<ArrowForwardIosIcon />} 
//       PrevIcon={<ArrowBackIosIcon />}
//       animation="slide"
//       navButtonsAlwaysVisible
//     >
   
//     {items.map((item, i) => <Item key={i} item={item} />)}
   
      
//     </Carousel>
//     </div>
    
//   );
// }

// function Item({ item }) {
//   const navigate = useNavigate();
//   return (
//     <>

    
//     <Paper style={{ textAlign: 'center'}}>
//       <img 
//         src={item.image} 
//         alt={item.name} 
//         style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
//       />
//       <div className='banner-bottom'>
//       <h2 style={{ marginTop: '15px' }}>{item.name}</h2>
//       <p>{item.description}</p>
//       <Button 
//         variant="contained" 
//         color="primary" 
//         style={{ marginTop: '10px' }} 
//         onClick={() => navigate('/add-blog')}
//       >
//         Add Your Blogs
//       </Button>
//       </div>
//     </Paper>
//   </>
//   );
  
// }

// export default Carousal;









