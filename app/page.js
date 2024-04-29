
'use client'
import { Alert, AlertTitle, Card, CardContent, CardMedia, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


import WaterDropIcon from '@mui/icons-material/WaterDrop';

import TarifaComponent from './components/principal/TarifaComponent';
import OpcionesComponent from './components/principal/OpcionesComponent';
import SliderImagenesComponent from './components/principal/SliderImagenesComponent';


export default function Page() {

    return (

        <>

            <SliderImagenesComponent />
            <OpcionesComponent />

            <Container>
                <Grid container spacing={2} mb={2}>
                    <Grid xs={12} md={6} >

                        <Card padding={2} className="card-darkblue animate__animated animate__flipInX" elevation={4} >
                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" padding={2} >
                                    Tarifa Justa y Transparente para Todos
                                </Typography>
                                <Divider />
                                <Typography variant="body1" padding={2} color="inherit">
                                    En nuestro compromiso de brindar un servicio equitativo y transparente, presentamos nuestras tarifas de agua, las cuales son aplicables para todos nuestros usuarios. Es importante destacar que estas tarifas están sujetas a posibles ajustes anuales, en línea con las regulaciones y condiciones del mercado.
                                </Typography>
                            </CardContent>
                            <CardMedia
                                title="Tarifa Justa y Transparente para Todos"

                                component="img"
                                height="210"
                                image="/img/visual/origami/desarrollo-urbano.jpg"
                                alt="Tarifa Justa y Transparente para Todos"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                        </Card>
                    </Grid>
                    <Grid xs={12} md={6}>

                        <Card>
                            <TarifaComponent />


                        </Card>


                    </Grid>
                </Grid>

            </Container>



            <Container>

                <Grid container spacing={2}>

                    <Grid xs={12}>

                        <Card padding={1} elevation={2} >

                            <Alert icon={<WaterDropIcon fontSize="inherit" />} severity="info" variant="filled">
                                <AlertTitle>¡Cuida el agua!</AlertTitle>
                                <Typography variant="subtitle2">

                                    El agua es un recurso esencial para la vida en nuestro planeta. Aunque la Tierra está cubierta en un 70% por agua, solo una pequeña fracción de ese porcentaje es agua dulce disponible para consumo humano. Es por eso que es crucial que todos tomemos medidas para conservar y proteger este recurso natural invaluable.
                                </Typography>
                            </Alert>


                        </Card>


                    </Grid>
                    <Grid xs={6} md={8}>

                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={4}>

                        <Card>

                            <CardMedia
                                title="Reciclar y reutilizar el agua"

                                component="img"
                                height="210"
                                image="/img/visual/origami/reciclar-agua.jpg"
                                alt="Reciclar y reutilizar el agua"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />


                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                    Reciclar y reutilizar el agua
                                </Typography>

                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2} >
                                    Considera instalar sistemas de recolección de agua de lluvia para utilizar en el riego de plantas, limpieza exterior o incluso para el inodoro. Además, puedes reutilizar el agua utilizada en el hogar, como la que se usa para lavar frutas y verduras, para regar las plantas.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>

                        <Card>

                            <CardMedia
                                title="Cuidado del agua"

                                component="img"
                                height="210"
                                image="/img/visual/origami/medio-ambiente.jpg"
                                alt="Cuidado del agua"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                    Limitar el uso de la manguera
                                </Typography>

                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2} >
                                    Al lavar el auto o limpiar el exterior de la casa, utiliza una cubeta y una esponja en lugar de una manguera. Esto puede ahorrar una cantidad significativa de agua.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}  md={4}>

                        <Card>
                            <CardMedia
                                title="Educación y concienciación"

                                component="img"
                                height="210"
                                image="/img/visual/origami/educacion.jpg"
                                alt="Educación y concienciación"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                    Educación y concienciación
                                </Typography>

                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2} >
                                    Educa a tu familia y a otros miembros de la comunidad sobre la importancia del cuidado del agua y cómo pueden contribuir individualmente a su conservación. Promueve prácticas sostenibles y hábitos conscientes en el uso del agua en el hogar y en la comunidad.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>

    );



}



