'use client'

import { useEffect, useState } from "react";
import ReloadingComponent from "../components/layout/ReloadingComponent";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from "@mui/material";




function TarjetaHistoria() {

    return (
        <Card>
            <CardMedia
                sx={{ height: 400,  }}
                image="/img/visual/origami/pozo.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}



function page() {

    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (<ReloadingComponent />);

    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} >
                        <TarjetaHistoria />
                    </Grid></Grid>


            </Container>

        </>
    )
}

export default page