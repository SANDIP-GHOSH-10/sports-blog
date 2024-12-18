
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, CircularProgress, Container } from '@mui/material';
import { fetchAllPlayers } from '../Redux/Slice/PlayersSlice';
import Rating from '@mui/material/Rating';


export default function Players() {
    const dispatch = useDispatch();

    const { isLoading, error, Allplayers } = useSelector((state) => {
        console.log("State value for Players", state.players);

        return state.players

    });

    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");


    // Extract search query from URL if available
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get("search") || "";
        setSearchQuery(query);
    }, [location.search]);

    useEffect(() => {
        dispatch(fetchAllPlayers());
    }, [dispatch]);


    if (isLoading) {
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5" >
                <CircularProgress color="primary" size={80} thickness={5} sx={{ mb: 2 }} />
                <Typography variant="h6" color="textSecondary" sx={{ fontFamily: 'Arial, sans-serif' }} >
                    Loading, please wait...
                </Typography>
            </Box>
        )
    }

    if (error) {
        return <p>Error: {error}</p>
    }
    // Filter products based on search query
    const filteredPlayer = Allplayers.filter((player) =>
        player.playerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
            <Typography
                variant="h3"
                gutterBottom
                sx={{
                    color: '#244855', // Deep teal color
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                Players
            </Typography>
            {/* Search Bar */}
            <div>
                <input
                    type="text"
                    placeholder="Search for Player"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: "10px", width: "700px", marginBottom: "20px" }}
                />
            </div>
            <Container>
                {/* <Grid container spacing={2}>
                    {filteredPlayer.length > 0 ? (
                        filteredPlayer.map((sportsman) => (
                            <Grid item xs={12} sm={6} md={4} key={sportsman.id}>
                                <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={sportsman.image}
                                        alt={sportsman.playerName}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {sportsman.playerName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Role:</strong> {sportsman.role}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Batting Style:</strong> {sportsman.battingStyle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Bowling Style:</strong> {sportsman.bowlingStyle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>DOB:</strong> {sportsman.dob}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Age:</strong> {sportsman.age}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <strong>Jersey Number:</strong> {sportsman.jerseyNo}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" color="secondary" onClick={() => navigate(`/players/details/${sportsman.id}`)}>Details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h1" component="div">
                            No Player Match.
                        </Typography>
                    )}
                </Grid> */}
                <Grid container spacing={5}>
                    {filteredPlayer.length > 0 ? (
                        filteredPlayer.map((sportsman) => (
                            <Grid item xs={12} sm={6} md={4} key={sportsman.id}>
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        margin: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        borderRadius:"10px",
                                        height: '100%',
                                        // height: 400,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': { transform: 'scale(1.03)' },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="340"
                                        image={sportsman.image}
                                        alt={sportsman.playerName}
                                        sx={{
                                            height: 200,
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {sportsman.playerName}
                                        </Typography>
                                        {/* Horizontal box for Role, Age, Jersey Number */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                                alignItems: 'center',
                                                padding: '18px 0',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '22px',
                                                mb: -2,
                                            }}
                                        >

                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                <strong>Role</strong><br /> {sportsman.role}
                                            </Typography>
                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                <strong>Age</strong><br /> {sportsman.age}
                                            </Typography>
                                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                <strong>Jersey</strong><br /> {sportsman.jerseyNo}
                                            </Typography>
                                        </Box>

                                    </CardContent>
                                    <CardActions sx={{ justifyContent: 'space-between' }}>
                                        <Rating
                                            name="read-only-rating"
                                            value={sportsman.rating || 0} 
                                            // value={5}
                                            readOnly
                                            precision={0.5}
                                            size="small"
                                            sx={{ ml: 1 }}
                                        />
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => navigate(`/players/details/${sportsman.id}`)}
                                        >
                                            Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="h1" component="div">
                            No Player Match.
                        </Typography>
                    )}
                </Grid>

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
// import { Container } from '@mui/material';
// import { fetchAllPlayers } from '../Redux/Slice/PlayersSlice';



// export default function Players() {
//     const dispatch = useDispatch();

//     const { isLoading, error, Allplayers } = useSelector((state) => {
//         console.log("State value for Players", state.players);

//         return state.players

//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         dispatch(fetchAllPlayers());
//     }, [dispatch]);


//     if (isLoading) {
//         return <p>Loading...</p>
//     }

//     if (error) {
//         return <p>Error: {error}</p>
//     }
//     return (
//         <div>
//             <h1>Players</h1>
//             <Container>
//                 <Grid container spacing={2}>
//                     {Allplayers.length > 0 ? (
//                         Allplayers.map((sportsman) => (
//                             <Grid item xs={12} sm={6} md={4} key={sportsman.id}>
//                                 <Card sx={{ maxWidth: 345, margin: 'auto' }}>
//                                     <CardMedia
//                                         component="img"
//                                         height="140"
//                                         image={sportsman.image}
//                                         alt={sportsman.playerName}
//                                     />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             {sportsman.playerName}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             <strong>Role:</strong> {sportsman.role}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             <strong>Batting Style:</strong> {sportsman.battingStyle}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             <strong>Bowling Style:</strong> {sportsman.bowlingStyle}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             <strong>DOB:</strong> {sportsman.dob}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             <strong>Age:</strong> {sportsman.age}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary">
//                                             <strong>Jersey Number:</strong> {sportsman.jerseyNo}
//                                         </Typography>
//                                     </CardContent>
//                                     <CardActions>
//                                         <Button variant="contained" color="secondary" onClick={() => navigate(`/players/details/${sportsman.id}`)}>Details</Button>
//                                     </CardActions>
//                                 </Card>
//                             </Grid>
//                         ))
//                     ) : (
//                         <Typography variant="h6" component="div">
//                             No blogs available.
//                         </Typography>
//                     )}
//                 </Grid>
//             </Container>




//         </div>
//     );
// }
