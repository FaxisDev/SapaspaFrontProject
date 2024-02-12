
'use client'
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Page() {

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha en español
    const fechaFormateada = format(fechaActual, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: es });


    return (

        <>
            <Grid container spacing={2}>
                <Grid xs={12} md={7}>

                    <Card>

                        <CardContent>

                       {/*  El siguiente componente es la fecha del dia de hoy */}
                        <Chip icon={<AccessTimeRoundedIcon />} label={fechaFormateada} />
         

                            <Typography gutterBottom variant="h5" component="div" padding={2}>
                                ¡Bienvenido/a al portal de Agua Potable y Alcantarillado de San Pablo Atlalzalpan!
                            </Typography>

                            <Typography variant="body1" color="text.secondary" padding={2}>
                                Estamos aquí para hacer que el proceso de pago de tu servicio sea lo más fácil y seguro posible.
                            </Typography>

                        </CardContent>
                    </Card>



                </Grid>
                <Grid xs={12} md={5}>

                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
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