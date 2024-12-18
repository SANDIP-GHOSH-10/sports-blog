import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  IconButton,
  Pagination,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { latestBlog } from '../Redux/Slice/LatestBlogSlice';

export default function BlogCard() {
  const dispatch = useDispatch();
  const { isLoading, error, Blog } = useSelector((state) => state.LatestBlog);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    dispatch(latestBlog());
  }, [dispatch]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blog.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Container sx={{ py: 4 }}>
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
          Latest Blogs
        </Typography>
        <Grid container spacing={4}>
          {currentBlogs.length > 0 ? (
            currentBlogs.map((latestBlog) => (
              <Grid item xs={12} sm={6} md={4} key={latestBlog.id}>
                <Card
                
                  sx={{
                    height: 400, // Fixed height for uniform card size
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.03)' },
                  }}
                >
                  <CardMedia
                    sx={{ height: 180 }}
                    image={latestBlog.img_url}
                    title={latestBlog.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {latestBlog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2, // Limit to 2 lines of text
                      }}
                    >
                      {latestBlog.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />&nbsp;&nbsp;&nbsp;
                    {/* </IconButton>
                    <IconButton aria-label="share"> */}
                      <ShareIcon />
                    </IconButton>
                    <Button 
                      variant="contained"
                      color="success"
                      sx={{ ml: 'auto' }}
                      onClick={() => navigate(`/details/${latestBlog.id}`)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" component="div">
              No blogs available.
            </Typography>
          )}
        </Grid>
        {/* Customized Pagination */}
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination
            count={Math.ceil(Blog.length / blogsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            sx={{
              '& .MuiPagination-ul': {
                justifyContent: 'center',
              },
              '& .MuiPaginationItem-root': {
                color: '#3f51b5',
                fontWeight: 'bold',
                border: '1px solid #3f51b5',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
                '&.Mui-selected': {
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  fontWeight: 'bold',
                },
              },
            }}
          />
        </Box>
      </Container>
    </div>
  );
}







































// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid'; 
// import { Container, IconButton } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import { latestBlog } from '../Redux/Slice/LatestBlogSlice';
// export default function BlogCard() {
//   const dispatch = useDispatch(); 

//   const { isLoading, error , Blog} = useSelector((state) => {
//     // console.log("State value for latest blogs", state.LatestBlog.Blog);

//     return state.LatestBlog

//   });
//   // console.log(Blog)
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(latestBlog());
//   }, [dispatch]);


//   if (isLoading) {
//     return <p>Loading...</p>
//   }

//   if (error) {
//     return <p>Error: {error}</p>
//   }
//   return (
//     <div>
//       <Container>
//       <Grid container spacing={2}>
//         {Blog.length > 0 ? (
//           Blog.map((latestBlog) => (
//             <Grid item xs={12} sm={6} md={4} key={latestBlog.id}>
//               <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
//                 <CardMedia
//                   sx={{ height: 140 }}
//                   image={latestBlog.img_url}
//                   title={latestBlog.title}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {latestBlog.title}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                 <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
                 
//                   <Button variant="contained" color="success" onClick={() => navigate(`/details/${latestBlog.id}`)}>Learn More</Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Typography variant="h6" component="div">
//             No blogs available.
//           </Typography>
//         )}
//       </Grid>
//     </Container>


//     </div>
//   );
// }
