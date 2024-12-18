import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Players", path: "/players" },
    { name: "Add Blogs", path: "/add-blog" },
    { name: "Contact", path: "/contactus" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, #2a9d8f 0%, #264653 100%)',
        // background: 'linear-gradient(90deg, #d14e58 0%, #9b1b30 100%)',
        // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
        // background: 'linear-gradient(90deg, #f2a900 0%, #1c1c1c 100%)',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo and Title */}
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <SportsCricketIcon sx={{ fontSize: 40, color: "#4caf50", mr: 1 }} />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
                display: { xs: "none", md: "block" },
              }}
            >
              CricketZone
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.name}
                  onClick={handleMenuClose}
                  component={Link}
                  to={link.path}
                  sx={{ fontWeight: 600 }}
                >
                  {link.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navigation Links (Desktop) */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                component={Link}
                to={link.path}
                sx={{
                  my: 2,
                  color: "white",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* Login and Register Buttons */}
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "white",
                },
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/reg"
              variant="contained"
              sx={{
                backgroundColor: "#f50057",
                "&:hover": { backgroundColor: "#c51162" },
              }}
            >
              Register
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;



















// import React from "react";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Stack from "@mui/material/Stack";
// import SportsCricketIcon from '@mui/icons-material/SportsCricket';
// const Header = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Players", path: "/players" },
//     { name: "Add Blogs", path: "/add-blog" },
//     { name: "Contact", path: "/contactus" },
//   ];

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#1e3a8a",
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Toolbar disableGutters>
          

//           <Box display="flex" alignItems="center" mb={2}>
//               <SportsCricketIcon sx={{ fontSize: 40, color: '#4caf50', mr: 1 }} />
//               <Typography variant="h5" sx={{ fontWeight: 'bold' , textDecoration: "none", }} noWrap component={Link} to="/">
//                 CricketZone
//               </Typography>
//             </Box>

//           {/* Mobile Menu Button */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="open menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenuOpen}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {navLinks.map((link) => (
//                 <MenuItem
//                   key={link.name}
//                   onClick={handleMenuClose}
//                   component={Link}
//                   to={link.path}
//                 >
//                   <Typography textAlign="center">{link.name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Logo (Mobile) */}
//           <Typography
//             variant="h6"
//             noWrap
//             component={Link}
//             to="/"
//             sx={{
//               flexGrow: 1,
//               display: { xs: "flex", md: "none" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".2rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             MyHotel
//           </Typography>

//           {/* Desktop Menu */}
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {navLinks.map((link) => (
//               <Button
//                 key={link.name}
//                 component={Link}
//                 to={link.path}
//                 sx={{
//                   my: 2,
//                   color: "white",
//                   display: "block",
//                   fontWeight: 600,
//                   "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
//                 }}
//               >
//                 {link.name}
//               </Button>
//             ))}
//           </Box>

//           {/* Login and Registration Buttons */}
//           <Stack direction="row" spacing={2}>
//             <Button
//               component={Link}
//               to="/login"
//               variant="outlined"
//               sx={{
//                 color: "white",
//                 borderColor: "white",
//                 "&:hover": {
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                   borderColor: "white",
//                 },
//               }}
//             >
//               Login
//             </Button>
//             <Button
//               component={Link}
//               to="/reg"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#f50057",
//                 "&:hover": { backgroundColor: "#c51162" },
//               }}
//             >
//               Register
//             </Button>
//           </Stack>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Header;



















// import React, { useState } from "react";
// import {
//   AppBar,
//   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";  
// import { Link } from "react-router-dom";
// const Header = () => {
//   const [value, setValue] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#063970" }}>
//         <Toolbar>
//           <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
//           {isMatch ? (
//             <>
//               <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
//                 Shoppee
//               </Typography>
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: "auto" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//               >
//                 <Tab label="Products" />
//                 <Tab label="Services" />
//                 <Tab label="About Us" />
//                 <Tab label="Contact" />
//               </Tabs>
//               <Link to={"/login"}>
//               <Button sx={{ marginLeft: "auto" }} variant="contained">
//                 Login
//               </Button>
//               </Link>
//               <Link to={"/reg"}>
//               <Button sx={{ marginLeft: "10px" }} variant="contained">
//                 SignUp
//               </Button>
//               </Link>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Header;








// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// // import { useTheme } from '@mui/material/styles';
// // import useMediaQuery from '@mui/material/useMediaQuery';

// // const Header = () => {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// //   return (
// //     <AppBar position="static" color="primary">
// //       <Toolbar>
// //         {/* Menu Button for Mobile */}
// //         {isMobile && (
// //           <IconButton
// //             edge="start"
// //             color="inherit"
// //             aria-label="menu"
// //             sx={{ mr: 2 }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //         )}

// //         {/* Brand Logo/Name */}
// //         <Typography
// //             variant="h5"
// //             sx={{
// //               mr: 2,
// //               flexGrow: 1,
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'inherit',
// //               textDecoration: 'none',
// //               textAlign: 'left',
// //             }}
// //           >
// //           <Link
// //             to="/"
// //             style={{
// //               textDecoration: 'none',
// //               color: 'inherit',
// //             }}
// //           >
// //            E-Commerse Website
// //           </Link>
// //         </Typography>

// //         {/* Navbar Links */}
// //         {!isMobile && (
// //           <Box sx={{ display: 'flex', flexDirection: 'row', display: { xs: 'none', md: 'flex' } }}>
// //             <Button color="inherit" component={Link} to="/home">
// //               Home
// //             </Button>
// //             <Button color="inherit" component={Link} to="/user">
// //               Login
// //             </Button>
// //           </Box>
          
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Header;
