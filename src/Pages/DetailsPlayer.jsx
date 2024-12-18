import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  CircularProgress,
  Container,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Button,
} from '@mui/material';
import { fetchSinglePlayer } from '../Redux/Slice/PlayersSlice';

export default function DetailsPlayer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, error, singlePlayer } = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(fetchSinglePlayer(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  if (!singlePlayer) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No player data available.
        </Typography>
      </Box>
    );
  }

  const { battingStats = {}, bowlingStats = {}, fieldingStats = {} } = singlePlayer;

  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              boxShadow: 6,
              borderRadius: 3,
              padding: 3,
              backgroundColor: '#f8f9fa',
              textAlign: 'center',
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={singlePlayer.image}
              alt={singlePlayer.playerName}
              sx={{
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                {singlePlayer.playerName}
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                <Rating value={singlePlayer.rating} readOnly sx={{ mr: 1 }} />
                <Typography variant="body1">({singlePlayer.rating})</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {singlePlayer.about}
              </Typography>
              <Divider sx={{ my: 2 }} />
              {/* <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Role:</strong> {singlePlayer.role}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Batting Style:</strong> {singlePlayer.battingStyle}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Bowling Style:</strong> {singlePlayer.bowlingStyle}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>DOB:</strong> {singlePlayer.dob}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Age:</strong> {singlePlayer.age}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Jersey Number:</strong> {singlePlayer.jerseyNo}
                </Typography>
              </Box> */}
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: '#f7f7f7',
                  mb: 4,
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow
                      sx={{
                        background: 'linear-gradient(90deg, #3a7bd5 0%, #3a6073 100%)',
                      }}
                    >
                      <TableCell
                        colSpan={2}
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: '1.5rem',
                          textAlign: 'center',
                          padding: 2,
                        }}
                      >
                        Player Profile
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { label: 'Role', value: singlePlayer.role },
                      { label: 'Batting Style', value: singlePlayer.battingStyle },
                      { label: 'Bowling Style', value: singlePlayer.bowlingStyle },
                      { label: 'DOB', value: singlePlayer.dob },
                      { label: 'Age', value: singlePlayer.age },
                      { label: 'Jersey Number', value: singlePlayer.jerseyNo },
                    ].map((row, index) => (
                      <TableRow
                        key={row.label}
                        sx={{
                          backgroundColor: index % 2 === 0 ? '#ffffff' : '#f0f4f8',
                          '&:hover': { backgroundColor: '#e8f5fe' },
                        }}
                      >
                        <TableCell
                          sx={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            color: '#555',
                            padding: '12px 16px',
                            borderBottom: '1px solid #ddd',
                          }}
                        >
                          {row.label}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontSize: '1rem',
                            color: '#333',
                            padding: '12px 16px',
                            borderBottom: '1px solid #ddd',
                          }}
                        >
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8} >
          {battingStats && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#343a40' }}>
                <u>Batting Stats</u>
              </Typography>
              <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#343a40' }}>
                    <TableRow>
                      {['Matches', 'Innings', 'Runs', 'Highest Score', 'Average', 'Strike Rate', 'Centuries', 'Half Centuries'].map(
                        (header) => (
                          <TableCell key={header} sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                            {header}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {Object.values(battingStats).map((value, index) => (
                        <TableCell key={index}>{value}</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {bowlingStats && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#343a40' }}>
                <u>Bowling Stats</u>
              </Typography>
              <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#343a40' }}>
                    <TableRow>
                      {['Matches', 'Innings', 'Wickets', 'Best Bowling', 'Average', 'Economy', 'Strike Rate'].map((header) => (
                        <TableCell key={header} sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {Object.values(bowlingStats).map((value, index) => (
                        <TableCell key={index}>{value}</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {fieldingStats && (
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#343a40' }}>
                <u>Fielding Stats</u>
              </Typography>
              <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#343a40' }}>
                    <TableRow>
                      {['Catches', 'Run Outs', 'Stumpings'].map((header) => (
                        <TableCell key={header} sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {Object.values(fieldingStats).map((value, index) => (
                        <TableCell key={index}>{value}</TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

          )}
          <Box mt={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7, height: '30vh', }}>
            <Button variant="contained" color="success" size="large" sx={{ bgcolor: '#004d40', '&:hover': { bgcolor: '#00332c', }, }} href="/players">
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}






























































// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Grid, Box, CircularProgress, Container, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { fetchSinglePlayer } from '../Redux/Slice/PlayersSlice';

// export default function DetailsPlayer() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { isLoading, error, singlePlayer } = useSelector((state) => state.players);

//   useEffect(() => {
//     dispatch(fetchSinglePlayer(id));
//   }, [dispatch, id]);

//   if (isLoading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ textAlign: 'center', marginTop: 4 }}>
//         <Typography variant="h6" color="error">
//           Error: {error}
//         </Typography>
//       </Box>
//     );
//   }

//   if (!singlePlayer) {
//     return (
//       <Box sx={{ textAlign: 'center', marginTop: 4 }}>
//         <Typography variant="h6" color="text.secondary">
//           No player data available.
//         </Typography>
//       </Box>
//     );
//   }

//   const { battingStats, bowlingStats, fieldingStats } = singlePlayer;

//   return (
//     <Container sx={{ py: 5 }}>
//       <Grid container spacing={4}>
//         {/* Left Section - Player Profile */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ boxShadow: 6, borderRadius: 3, padding: 3 }}>
//             <CardMedia
//               component="img"
//               height="300"
//               image={singlePlayer.image}
//               alt={singlePlayer.playerName}
//               sx={{ objectFit: 'cover', borderRadius: 2 }}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
//                 {singlePlayer.playerName}
//               </Typography>
//               <Box display="flex" alignItems="center" mb={2}>
//                 <Typography variant="body1" sx={{ mr: 1 }}>
//                   <strong>Rating:</strong>
//                 </Typography>
//                 <Rating value={singlePlayer.rating} readOnly />
//               </Box>
//               <Typography variant="body2" color="text.secondary">
//                 <strong>Role:</strong> {singlePlayer.role}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 <strong>Batting Style:</strong> {singlePlayer.battingStyle}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 <strong>Bowling Style:</strong> {singlePlayer.bowlingStyle}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 <strong>Date of Birth:</strong> {singlePlayer.dob}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 <strong>Age:</strong> {singlePlayer.age}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 <strong>Jersey Number:</strong> {singlePlayer.jerseyNo}
//               </Typography>
//               <hr/>
//               <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//                 {singlePlayer.about}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Right Section - Stats */}
//         <Grid item xs={12} md={8}>
//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//               Batting Stats
//             </Typography>
//             {battingStats ? (
//               <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell><strong>Matches</strong></TableCell>
//                       <TableCell><strong>Innings</strong></TableCell>
//                       <TableCell><strong>Runs</strong></TableCell>
//                       <TableCell><strong>Highest Score</strong></TableCell>
//                       <TableCell><strong>Average</strong></TableCell>
//                       <TableCell><strong>Strike Rate</strong></TableCell>
//                       <TableCell><strong>Centuries</strong></TableCell>
//                       <TableCell><strong>Half Centuries</strong></TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>{battingStats.matches}</TableCell>
//                       <TableCell>{battingStats.innings}</TableCell>
//                       <TableCell>{battingStats.runs}</TableCell>
//                       <TableCell>{battingStats.highestScore}</TableCell>
//                       <TableCell>{battingStats.average}</TableCell>
//                       <TableCell>{battingStats.strikeRate}</TableCell>
//                       <TableCell>{battingStats.centuries}</TableCell>
//                       <TableCell>{battingStats.halfCenturies}</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Typography variant="body2" color="text.secondary">Batting stats not available</Typography>
//             )}
//           </Box>

//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//               Bowling Stats
//             </Typography>
//             {bowlingStats ? (
//               <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell><strong>Matches</strong></TableCell>
//                       <TableCell><strong>Innings</strong></TableCell>
//                       <TableCell><strong>Wickets</strong></TableCell>
//                       <TableCell><strong>Best Bowling</strong></TableCell>
//                       <TableCell><strong>Average</strong></TableCell>
//                       <TableCell><strong>Economy</strong></TableCell>
//                       <TableCell><strong>Strike Rate</strong></TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>{bowlingStats.matches}</TableCell>
//                       <TableCell>{bowlingStats.innings}</TableCell>
//                       <TableCell>{bowlingStats.wickets}</TableCell>
//                       <TableCell>{bowlingStats.bestBowling}</TableCell>
//                       <TableCell>{bowlingStats.average}</TableCell>
//                       <TableCell>{bowlingStats.economy}</TableCell>
//                       <TableCell>{bowlingStats.strikeRate}</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Typography variant="body2" color="text.secondary">Bowling stats not available</Typography>
//             )}
//           </Box>

//           {/* Fielding Stats */}
//           <Box>
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
//               Fielding Stats
//             </Typography>
//             {fieldingStats ? (
//               <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell><strong>Catches</strong></TableCell>
//                       <TableCell><strong>Run Outs</strong></TableCell>
//                       <TableCell><strong>Stumpings</strong></TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>{fieldingStats.catches}</TableCell>
//                       <TableCell>{fieldingStats.runOuts}</TableCell>
//                       <TableCell>{fieldingStats.stumpings}</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Typography variant="body2" color="text.secondary">Fielding stats not available</Typography>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }












































// // import React, { useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Grid from '@mui/material/Grid';
// // import { Box, CircularProgress, Container, IconButton } from '@mui/material';
// // import { fetchSinglePlayer } from '../Redux/Slice/PlayersSlice';


// // export default function DetailsPlayer() {
// //   const { id } = useParams();
// //   const dispatch = useDispatch();

// //   const { isLoading, error, singlePlayer } = useSelector((state) => {
// //     console.log("State value for single player", state.players);
// //     return state.players
// //   });

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     dispatch(fetchSinglePlayer(id));
// //   }, [dispatch]);


// //   if (isLoading) {
// //     return (<Box sx={{ display: 'flex' }}>
// //       <CircularProgress />
// //     </Box>);
// //   }

// //   if (error) {
// //     return <p>Error: {error}</p>
// //   }
// //   return (
// //     <div style={{paddingTop: 20}}>
// //       <Container>

// //         <Card sx={{ maxWidth: 500, margin: 'auto' }}>
// //           <CardMedia
// //             component="img"
// //             maxHeight="740"
// //             image={singlePlayer.image}
// //             alt={singlePlayer.playerName}
// //           />
// //           <CardContent>
// //             <Typography gutterBottom variant="h5" component="div">
// //               {singlePlayer.playerName}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               <strong>Role:</strong> {singlePlayer.role}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               <strong>Batting Style:</strong> {singlePlayer.battingStyle}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               <strong>Bowling Style:</strong> {singlePlayer.bowlingStyle}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               <strong>DOB:</strong> {singlePlayer.dob}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               <strong>Age:</strong> {singlePlayer.age}
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               <strong>Jersey Number:</strong> {singlePlayer.jerseyNo}
// //             </Typography>
// //           </CardContent>
// //         </Card>

// //       </Container>


// //     </div>
// //   );
// // }
