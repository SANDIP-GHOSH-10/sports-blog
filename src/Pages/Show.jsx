import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlog, deleteBlog } from '../Redux/Slice/UserBlogSlice';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Pagination,
  Box,
  IconButton,
} from '@mui/material';

const Show = () => {
  const dispatch = useDispatch();
  const { isLoading, error, userBlogData } = useSelector((state) => state.UserBlog);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const blogsPerPage = 4; // Number of blogs per page

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = userBlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="textSecondary">
          Loading...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bold',
          color: '#004d40',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Sports Blog
      </Typography>

      <Grid container spacing={3}>
        {currentBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: '#004d40' }}
                >
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {blog.description}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <IconButton
                    variant="outlined"
                    color="error"
                    // startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(blog.id)}
                    sx={{ fontSize: '1.5rem', padding: '6px' }} // Icon only with size adjustment
                  ><DeleteIcon /></IconButton>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/update/${blog.id}`)}
                    sx={{ fontSize: '1.5rem', padding: '6px' }} // Icon only with size adjustment
                  >
                    <EditIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(userBlogData.length / blogsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '1rem',
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default Show;







































// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchBlog, deleteBlog } from '../Redux/Slice/UserBlogSlice';
// import { useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   Button,
//   Pagination,
//   Box,
// } from '@mui/material';

// const Show = () => {
//   const dispatch = useDispatch();
//   const { isLoading, error, userBlogData } = useSelector((state) => state.UserBlog);
//   const navigate = useNavigate();

//   const [currentPage, setCurrentPage] = useState(1); // Pagination state
//   const blogsPerPage = 4; // Number of blogs per page

//   useEffect(() => {
//     dispatch(fetchBlog());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteBlog(id));
//   };

//   // Pagination logic
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = userBlogData.slice(indexOfFirstBlog, indexOfLastBlog);

//   const handleChangePage = (event, value) => {
//     setCurrentPage(value);
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <Container maxWidth="md" sx={{ py: 4 }}>
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: "center",
//           marginBottom: "33px",
//           fontWeight: "bold",
//           color: "#004d40",
//           textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//           Sports Blog
//         </Typography>
//         <Grid container spacing={2} >
//           {currentBlogs.map((blog) => (
//             <Grid item xs={12} sm={6} md={3} key={blog.id}>
//               <Card
//                 sx={{
//                   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//                   borderRadius: 2,
//                   transition: 'transform 0.3s ease-in-out',
//                   '&:hover': { transform: 'scale(1.03)' },
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h6"
//                     gutterBottom
//                     sx={{ fontWeight: 'bold' }}
//                   >
//                     {blog.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {blog.description}
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     startIcon={<DeleteIcon />}
//                     onClick={() => handleDelete(blog.id)}
//                     sx={{ mt: 1, mr: 1 }}
//                   >
//                   </Button>
//                   <Button
//                     variant="contained"
//                     onClick={() => navigate(`/update/${blog.id}`)}
//                     sx={{ mt: 1 }}
//                   >
//                     Edit
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         {/* Pagination */}
//         <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
//           <Pagination
//             count={Math.ceil(userBlogData.length / blogsPerPage)}
//             page={currentPage}
//             onChange={handleChangePage}
//             color="primary"
//           />
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default Show;
















// // import React, { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { fetchBlog, deleteBlog } from '../Redux/Slice/UserBlogSlice';
// // import { useNavigate } from 'react-router-dom';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import {
// //   Container,
// //   Typography,
// //   Card,
// //   CardContent,
// //   Grid,
// //   Button,
  
// // } from '@mui/material';
// // const Show = () => {
// //   const dispatch = useDispatch(); 
// //   const {isLoading,error,userBlogData} = useSelector((state) => {
// //     console.log("State value",state.UserBlog.userBlogData
// // );
    
// //     return state.UserBlog
// // }); 
// //   // console.log("State in show",state)
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     dispatch(fetchBlog());
// //   }, [dispatch]);

// //   const handleDelete = (id) => {
// //     dispatch(deleteBlog(id));
// //   };

// //   if (isLoading) {
// //     return <p>Loading...</p>
// //   }

// //   if (error) {
// //     return <p>Error: {error}</p>
// //   }

// //   return (
// //     <div>
// //     <Container maxWidth="md" sx={{ py: 4 }}>
// //       <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
// //         Sports Blog
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {userBlogData.map((blog) => (
// //           <Grid item xs={12} sm={6} md={4} key={blog.id}>
// //             <Card
// //               sx={{
// //                 boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
// //                 borderRadius: 2,
// //                 transition: 'transform 0.3s ease-in-out',
// //                 '&:hover': { transform: 'scale(1.03)' },
// //               }}
// //             >
// //               <CardContent>
// //                 <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
// //                   {blog.title}
// //                 </Typography>
// //                 <Typography variant="body2" color="textSecondary">
// //                   {blog.description}
// //                 </Typography>
// //                 <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(blog.id)}>
// //                   Delete
// //                 </Button>
// //                 <Button variant="contained" onClick={() => navigate(`/update/${blog.id}`)}>
// //                   Edit
// //                 </Button>
// //               </CardContent>
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
      
// //     </Container>
        
// //     </div>
// //   );
// // };

// // export default Show;













































// // import React, { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { fetchBlog, deleteBlog } from '../Redux/Slice/UserBlogSlice';
// // import { useNavigate } from 'react-router-dom';
// // import { Container } from '@mui/material';

// // const Show = () => {
// //   const dispatch = useDispatch();
// //   // const { userBlogData, isLoading, error } = useSelector((state) => console.log("State for show user blog",state.UserBlog)); 
// //   const {isLoading,error,userBlogData} = useSelector((state) => {
// //     console.log("State value",state.UserBlog.userBlogData
// // );
    
// //     return state.UserBlog
// // }); 
// //   // console.log("State in show",state)
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     dispatch(fetchBlog());
// //   }, [dispatch]);

// //   const handleDelete = (id) => {
// //     dispatch(deleteBlog(id));
// //   };

// //   if (isLoading) {
// //     return <p>Loading...</p>
// //   }

// //   if (error) {
// //     return <p>Error: {error}</p>
// //   }

// //   return (
// //     <div>
// //     <Container>
// //       <h2>Todo List</h2>
// //       <button onClick={() => navigate('/add')}>Add New Todo</button>
// //       <table border="1">
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Title</th>
// //             <th>Description</th>
// //             <th>Operations</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {userBlogData.length > 0 ? (
// //             userBlogData.map((todo) => (
// //               <tr key={todo.id}>
// //                 <td>{todo.id}</td>
// //                 <td>{todo.title}</td>
// //                 <td>{todo.description}</td>
// //                 <td>
// //                   <button onClick={() => navigate(`/update/${todo.id}`)}>Edit</button>
// //                   <button onClick={() => handleDelete(todo.id)}>Delete</button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="4">No todos available</td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table> 
// //     </Container>
        
// //     </div>
// //   );
// // };

// // export default Show;
