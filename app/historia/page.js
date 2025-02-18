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
                image="/img/visual/origami/tory.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Historia
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Como antecedente pricipal del actual Organismo SAPASPA (Servicio de Agua Potable Y Alcantarillado San Pablo Atlazalpan)se tiene 
                    registro con fecha del 3 de Julio del año de 1996 con Escritura Pública, registro del SAT y permiso de la Secretaría de Relaciones Exteriores.
                    Titulares:
                    Ramón Martínez - Presidente 
                    Mauricio Soriano - Secretario 
                    Rufino Villegas - Tesorero
                    Rosa Silva, Jorge Santana, Aldredo Vázquez - Consejo de Vigilancia.

                    Así mismo con fecha 23 de Mayo de 1996 ante la presencia del Lic. Gabriel M. Ezeta, notario Público Número 15 del Estado de México, hizo constar el 
                    nombre del organizmo Público Descentralizado denominado Servicio de Agua Potable y Alcantarillado San Pablo Atlazalpan.
            
            </Typography>
            </CardContent>
            <CardActions>
                
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