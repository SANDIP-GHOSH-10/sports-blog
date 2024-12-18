import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogButton = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="5vh"
      margin= "0"
      Padding="0"
      py={4}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 1300,
          textAlign: 'center',
          bgcolor: 'white',
          borderRadius: 4,
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{
            color: '#244855', // Deep teal color
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Welcome to Cricket Zone!
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{
            color: '#E64833', // Medium teal for body text
            fontSize: '1.1rem',
            lineHeight: 1.6,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          At <strong>Cricket Zone</strong>, we share everything cricket—match analyses, player insights, and the latest updates from the cricketing world. Whether you're a fan or a player, this is your space to explore and contribute.
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{
            color: '#90AEAD',
            fontSize: '1rem',
            fontStyle: 'italic',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Got an exciting blog to share? Click the button below to add your thoughts and become a part of our cricketing community!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/add-blog"
          sx={{ mt: 2 }}
        >
          Add Blog
        </Button>
      </Paper>
    </Box>
  );
};

export default BlogButton;















// import React from 'react';
// import { Box, Typography, Button, Paper } from '@mui/material';
// import { Link } from 'react-router-dom';

// const AddBlogsSection = () => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="50vh"
//       bgcolor="#e0f7fa" // Light teal background
//       py={4}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           p: 4,
//           width: '100%',
//           maxWidth: 600,
//           textAlign: 'center',
//           bgcolor: 'white',
//           borderRadius: 2,
//           border: '1px solid #004d40', // Teal border
//         }}
//       >
//         <Typography 
//           variant="h3" 
//           gutterBottom 
//           sx={{
//             color: '#004d40', // Deep teal color
//             fontWeight: 'bold',
//             fontFamily: 'Arial, sans-serif',
//           }}
//         >
//           Welcome to Cricket Zone!
//         </Typography>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{
//             color: '#00796b', // Medium teal for body text
//             fontSize: '1.1rem',
//             lineHeight: 1.6,
//             fontFamily: 'Roboto, sans-serif',
//           }}
//         >
//           At <strong>Cricket Zone</strong>, we share everything cricket—match analyses, player insights, and the latest updates from the cricketing world. Whether you're a fan or a player, this is your space to explore and contribute.
//         </Typography>
//         <Typography 
//           variant="body1" 
//           paragraph 
//           sx={{
//             color: '#004d40',
//             fontSize: '1rem',
//             fontStyle: 'italic',
//             fontFamily: 'Roboto, sans-serif',
//           }}
//         >
//           Got an exciting blog to share? Click the button below to add your thoughts and become a part of our cricketing community!
//         </Typography>
//         <Button
//           variant="contained"
//           color="success"
//           size="large"
//           component={Link}
//           to="/add-blog"
//           sx={{
//             mt: 2,
//             bgcolor: '#004d40',
//             '&:hover': {
//               bgcolor: '#00332c',
//             },
//           }}
//         >
//           Add Blog
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default AddBlogsSection;









