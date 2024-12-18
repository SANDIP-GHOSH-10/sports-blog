// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../Redux/Slice/AuthSlice"; 
// import { Box, Button, Typography, Paper, Avatar, Divider } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//     const user = useSelector((state) =>{
//         console.log("Dashboard Data",state.auth)
//         return state.auth
//     } )
//     console.log(user)
//     const dispatch = useDispatch(); 
//     const navigate = useNavigate(); 

//     const handleLogout = () => {
//         dispatch(logoutUser()); 
//         navigate("/login"); 
//     };

//     return (
//         <>
//             {/* <div
//             style={{
//                 height: "100vh",
//                 backgroundColor: "#f0f0f0",
//                 padding: "50px",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundImage: "url('https://static.toiimg.com/thumb/msid-100825388,imgsize-1512741,width-900,height-1200,resizemode-6/100825388.jpg')", // Replace with your image URL
//                 backgroundSize: "cover", 
//                 backgroundPosition: "center", 
//                 backgroundAttachment: "fixed", 
//             }}
//         >
//             <Paper
//                 sx={{
//                     padding: "30px",
//                     maxWidth: "600px",
//                     width: "100%",
//                     boxShadow: 3,
//                     borderRadius: "10px",
//                     backgroundColor: "#fff",
//                 }}
//             >
//                 <Box sx={{ textAlign: "center" }}>
//                     <Avatar
//                         sx={{
//                             width: 100,
//                             height: 100,
//                             marginBottom: 2,
//                             margin: "0 auto",
//                             backgroundColor: "#FF6F61",
//                         }}
//                         alt={user?.fullName}
//                         src={user?.profilePicture} 
//                     />
//                     <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FF6F61", marginBottom: 3 }}>
//                         Welcome, {user?.fullName}! Enjoy and having fun
//                     </Typography>
//                     <Typography variant="h6" sx={{ marginBottom: 3 }}>
//                         Email: {user?.email}
//                     </Typography>

//                     <Divider sx={{ marginBottom: 3 }} />
//                     <Typography variant="h6" sx={{ marginBottom: 2 }}>
//                         Quick Actions:
//                     </Typography>
//                     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             sx={{
//                                 backgroundColor: "#FF6F61",
//                                 "&:hover": { backgroundColor: "#D45746" },
//                             }}
//                             onClick={() => navigate("/orders")}
//                         >
//                             View Orders
//                         </Button>
//                         <Button
//                             variant="outlined"
//                             color="secondary"
//                             onClick={handleLogout}
//                             sx={{
//                                 padding: "10px 20px",
//                                 fontSize: "16px",
//                                 borderColor: "#FF6F61",
//                                 color: "#FF6F61",
//                                 "&:hover": {
//                                     borderColor: "#D45746",
//                                     color: "#D45746",
//                                 },
//                             }}
//                         >
//                             Logout
//                         </Button>
//                     </Box>
//                 </Box>
//             </Paper>
//         </div> */}
//         </>
        
//     );
// }

// export default Dashboard;

















// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../Redux/Slice/AuthSlice"; // Adjust the path to your authSlice

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) =>{
//     console.log( state.auth)
//     return  state.auth.user;
//   });  
//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const error = useSelector((state) => state.auth.error);

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Dashboard</h1>
//       {isLoading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {user ? (
//         <div>
//           <h2>Welcome, {user?.name || "User"}!</h2>
//           <p>Email: {user?.email || "N/A"}</p>
//           <button onClick={handleLogout} style={{ marginTop: "20px" }}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <p>No user is logged in.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;










import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Redux/Slice/AuthSlice"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the user data from the Redux store
  const user = useSelector((state) => state.auth.user);
console.log(user)
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login"); // Redirect to the login page after logout
  };

  if (!user) {
    return (
      <div>
        <h2>You are not logged in.</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
      <h1>Welcome to Your Dashboard</h1>
      <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h3>User Details:</h3>
        <p><strong>Name:</strong> {user.name || "N/A"}</p>
        <p><strong>Email:</strong> {user.email || "N/A"}</p>
      </div>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
