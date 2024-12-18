import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PageNotFound from '../components/PageNotFound';
import { Box, CircularProgress, Typography } from '@mui/material';

// Lazy loaded components
const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('../Auth/Login'));
const Registration = lazy(() => import('../Auth/Registration'));
const DetailsLatestBlog = lazy(() => import('../Pages/DetailsLatestBlog'));
const Players = lazy(() => import('../Pages/Players'));
const DetailsPlayer = lazy(() => import('../Pages/DetailsPlayer'));
const ContactUsPage = lazy(() => import('../Pages/ContactUs'));
const AddBlogs = lazy(() => import('../Pages/AddBlogs'));
const Show = lazy(() => import('../Pages/Show'));
const AboutPage = lazy(() => import('../Pages/AboutPage'));
const UpdateBlog = lazy(() => import('../Pages/UpdateBlog'));
// const Dashboard = lazy(() => import('../Pages/Dashboard'));

const Routing = () => {
  return (
    <Router>
      <Header />
      {/* Suspense provides a fallback UI while components are loading */}
      <Suspense fallback={<div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5" >
                <CircularProgress color="primary" size={80} thickness={5} sx={{ mb: 2 }} />
                <Typography variant="h6" color="textSecondary" sx={{ fontFamily: 'Arial, sans-serif' }} >
                    Loading, please wait...
                </Typography>
            </Box>
            </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/details/:id" element={<DetailsLatestBlog />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/details/:id" element={<DetailsPlayer />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/add-blog" element={<AddBlogs />} />
          <Route path="/show" element={<Show />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          {/* Fallback for undefined routes */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Routing;
































// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from '../Layout/Header';
// import Home from '../Pages/Home';
// import Login from '../Auth/Login';
// import Registration from '../Auth/Registration';
// import DetailsLatestBlog from '../Pages/DetailsLatestBlog';
// import Players from '../Pages/Players';
// import DetailsPlayer from '../Pages/DetailsPlayer';
// import ContactUsPage from '../Pages/ContactUs';
// import AddBlogs from '../Pages/AddBlogs';
// import Show from '../Pages/Show';
// import Footer from '../Layout/Footer';
// import PageNotFound from '../components/PageNotFound';
// import AboutPage from '../Pages/AboutPage';
// import UpdateBlog from '../Pages/UpdateBlog';

// const Routing = () => {
//   return (
//     <Router>
//     <Header/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/reg" element={<Registration/>} />
//         <Route path="/details/:id" element={<DetailsLatestBlog />} />
//         <Route path="/players" element={<Players/>} />
//         <Route path="/players/details/:id" element={<DetailsPlayer/>} />
//         <Route path="/contactus" element={<ContactUsPage/>} />
//         <Route path="/add-blog" element={<AddBlogs/>} />
//         <Route path="/show" element={<Show/>} />
//         <Route path="/update/:id" element={<UpdateBlog />} />
//         <Route path="/about" element={<AboutPage/>} />


//         <Route path='*' element={<PageNotFound/>}></Route>
        
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// };

// export default Routing;