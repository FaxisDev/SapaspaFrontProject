
'use client'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

export default function Page() {

    return (

        <>


            <Grid container spacing={2}>
                <Grid xs={12} md={6}>

                    <Card>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Hola
                            </Typography>

                            <Typography variant="body1" color="text.secondary">


                                ¡Bienvenido/a al portal de Agua Potable y Alcantarillado de San Pablo Atlalzalpan! Estamos aquí para hacer que el proceso de pago de tu servicio sea lo más fácil y seguro posible.
                            </Typography>

                        </CardContent>
                    </Card>



                </Grid>
                <Grid xs={12} md={6}>

                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="380"
                                image="/img/portal_1.jpg"
                                alt="green iguana"
                            />

                        </CardActionArea>
                    </Card>


                </Grid>
                <Grid xs={6} md={4}>

                </Grid>
                <Grid xs={6} md={8}>

                </Grid>
            </Grid>


        </>

    );



}