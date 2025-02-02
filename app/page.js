
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
                                height="200"
                                image="/img/visual/origami/llave.jpg"
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
                                title="Inaguración del nuevo pozo No 2"

                                component="img"
                                height="210"
                                image="/img/visual/origami/pozo.jpg"
                                alt="Reciclar y reutilizar el agua"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />


                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                    Inaguración del nuevo pozo No 2
                                </Typography>

                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2} >
                                    Con la inaguración del nuevo pozo No 2 llevaremos el servicio de agua potable a las colonias de el primer cuadro de nuestra comunidad.
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
                                image="/img/visual/origami/Agua-R.jpg"
                                alt="Cuidado del agua"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                Planta de tratamiento de Aguas Residuales 
                                </Typography>

                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2} >
                                De acuerdo al plan de saneamiento de CAEM la construcción de esta planta es abastecer agua de riego a nuestra comunidad, para potenciar la producción agrícola, impulsar nuestra economía local e  incluso como recarga pasiva de infiltración de agua para nuestro subsuelo.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}  md={4}>

                        <Card>
                            <CardMedia
                                title="Educación y concienciación"

                                component="img"
                                height="250"
                                image="/img/visual/origami/asamblea.jpg"
                                alt="Educación y concienciación"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                “Construyendo la estrategia hídrica del segundo piso”. 
                                </Typography>

                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2} >
                                Encuentro con la Diputada Federal Xóchitl N. Zagal Ramírez, quien propone la nueva ley del agua. Ley General de Aguas se reconoce a los gestores comunitarios del agua.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>

    );



}



