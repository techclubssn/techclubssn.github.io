import React from "react";
import './Dashboard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()

    const onSelect = (id) => {
        navigate(id)
        window.scrollTo(0,0)
    }
    return(
        <div className="dashboard" >
            <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={() => onSelect('/zenith/aic')}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            image="/images/analogic.jpg"
                            alt="Analog IC"
                            sx={{ height: "200px" }}
                            />
                            <CardContent sx={{backgroundColor: 'black'}}>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center" fontWeight="bolder" color="white" fontFamily="Raleway">
                                    ANALOG IC
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={() => onSelect('/zenith/ml')}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            image="/images/ml.jpg"
                            alt="machine learning"
                            sx={{ height: "200px" }}
                            />
                            <CardContent sx={{backgroundColor: 'black'}}>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontWeight="bolder" color="white" fontFamily="Raleway">
                                MACHINE LEARNING
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={() => onSelect('/zenith/riot')} >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{ height: "200px" }}
                            image="/images/iot.jpg"
                            alt="robotics and iot"
                            />
                            <CardContent sx={{backgroundColor: 'black'}}>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontWeight="bolder" color="white" fontFamily="Raleway">
                                ROBOTICS & IOT
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={() => onSelect('/zenith/vlsi')}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{ height: "200px" }}
                            image="/images/vlsi.webp"
                            alt="vlsi"
                            />
                            <CardContent sx={{backgroundColor: 'black'}}>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontWeight="bolder" color="white" fontFamily="Raleway" >
                                VLSI
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={() => onSelect('/zenith/wd')}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{ height: "200px" }}
                            image="/images/webdev.png"
                            alt="Web Development"
                            />
                            <CardContent sx={{backgroundColor: 'black'}}>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontWeight="bolder" color="white" fontFamily="Raleway">
                                WEB DEVELOPMENT
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;