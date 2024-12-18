import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singleLatestBlog } from '../Redux/Slice/LatestBlogSlice';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  Alert,
  Divider,
} from '@mui/material';

export default function DetailsLatestBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, error, singleBlog } = useSelector((state) => state.LatestBlog);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleLatestBlog(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Alert severity="error">Error: {error}</Alert>
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Card
        sx={{
          maxWidth: 900,
          mx: 'auto',
          boxShadow: 4,
          borderRadius: 3,
          overflow: 'hidden',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        }}
      >
        <CardMedia
          component="img"
          alt={singleBlog.title}
          image={singleBlog.img_url}
          sx={{
            height: { xs: 300, sm: 450 },
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ p: 4, bgcolor: '#f9f9f9' }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333',
              mb: 3,
            }}
          >
            {singleBlog.title}
          </Typography>

        

          {/* Description Section */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#004d40',
              textAlign: 'left',
              mb: 2,
            }}
          >
            Blog Overview
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                textAlign: 'justify',
                mb: 2,
                fontSize: '16px',
              }}
            >
              {singleBlog.description}
            </Typography>
           

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(-1)}
              sx={{
                px: 4,
                py: 1,
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              Go Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}








































// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { singleLatestBlog } from '../Redux/Slice/LatestBlogSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Container,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   CircularProgress,
//   Alert,
// } from '@mui/material';

// export default function DetailsLatestBlog() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { isLoading, error, singleBlog } = useSelector((state) => state.LatestBlog);

//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(singleLatestBlog(id));
//   }, [dispatch, id]);

//   if (isLoading) {
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '80vh',
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '80vh',
//         }}
//       >
//         <Alert severity="error">Error: {error}</Alert>
//       </Box>
//     );
//   }

//   return (
//     <Container sx={{ py: 4 }}>
//       <Card
//         sx={{
//           maxWidth: 800,
//           mx: 'auto',
//           boxShadow: 3,
//           borderRadius: 2,
//           overflow: 'hidden',
//         }}
//       >
//         <CardMedia
//           component="img"
//           alt={singleBlog.title}
//           image={singleBlog.img_url}
//           sx={{ height: { xs: 250, sm: 400 }, objectFit: 'cover' }}
//         />
//         <CardContent sx={{ p: 3 }}>
//           <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//             {singleBlog.title}
//           </Typography>
//           <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
//             {singleBlog.description}
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => navigate(-1)}
//             sx={{ fontWeight: 'bold' }}
//           >
//             Go Back
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

































// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { singleLatestBlog } from '../Redux/Slice/LatestBlogSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { Container, IconButton } from '@mui/material';


// export default function DetailsLatestBlog() {
//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const { isLoading, error, singleBlog } = useSelector((state) => {
//         console.log("State value", state.LatestBlog);
//         return state.LatestBlog
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         dispatch(singleLatestBlog(id));
//     }, [dispatch]);


//     if (isLoading) { 
//         return <p>Loading...</p>
//     }

//     if (error) {
//         return <p>Error: {error}</p>
//     }
//     return (
//         <div>
//             <Container> 

//                 <Card sx={{ maxWidth: 700, maxHeight: 1000 }}>
//                     <CardMedia
//                         sx={{ height: 400 }}
//                         image={singleBlog.img_url}
//                         style={{objectFit: 'cover'}}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {singleBlog.title}
//                         </Typography>
//                     </CardContent>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                         {singleBlog.description}
//                     </Typography>
//                 </Card>

//             </Container>


//         </div>
//     );
// }
