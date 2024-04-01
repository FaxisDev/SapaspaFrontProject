
'use client'
import { Alert, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import WaterDropIcon from '@mui/icons-material/WaterDrop';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import TarifaComponent from './components/principal/TarifaComponent';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Page() {

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha en español
    const fechaFormateada = format(fechaActual, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: es });


    return (

        <>
            <Container>
                <Grid container spacing={2} mb={2}>
                    <Grid xs={12}>



                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            speed={600}
                            parallax={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Parallax, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>

                                <Card padding={1}>
                                    <CardMedia
                                        title="sdsd"

                                        component="img"
                                        height="450"
                                        image="/img/visual/ejemplo_6.jpg"
                                        alt="Agua Pura"
                                        className="animate__animated animate__fadeIn  animate__delay-1s"
                                    />

                                    <CardContent>


                                        <Typography variant="h5"  >
                                            ¡Bienvenido/a al portal de Agua Potable y Alcantarillado de San Pablo Atlalzalpan!
                                        </Typography>

                                        <div className="subtitle" data-swiper-parallax="-200">
                                            <Typography variant="body1" color="text.secondary">
                                                Estamos aquí para hacer que el proceso de pago de tu servicio sea lo más fácil y seguro posible.
                                            </Typography>
                                        </div>

                                    </CardContent>
                                </Card>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="title" data-swiper-parallax="-300">
                                    
                                
                                
                                    <CardMedia
                                        title="sdsd"

                                        component="img"
                                        height="450"
                                        image="/img/visual/ejemplo_8.jpg"
                                        alt="Agua Pura"
                                        className="animate__animated animate__fadeIn  animate__delay-1s"
                                    />

                                    <CardContent>
                                     

                                    </CardContent>
                                </div>
                                <div className="" data-swiper-parallax="-200">
                                    
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="title" data-swiper-parallax="-300">


                                
                                    <CardMedia
                                        title="sdsd"

                                        component="img"
                                        height="450"
                                        image="/img/visual/ejemplo_11.jpg"
                                        alt=""
                                        className="animate__animated animate__fadeIn  animate__delay-1s"
                                    />

                                    <CardContent>
                                    

                                    </CardContent>
                                </div>
                                <div className="" data-swiper-parallax="-200">
                                    
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p>
                                        
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </Grid>
                    <Grid xs={12} md={6} >

                        <Card padding={2} className="card-blue">
                            <CardContent>
                            <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                            Tarifa Justa y Transparente para Todos
                                </Typography>
                                <Divider />
                                <Typography variant="body1" color="text.secondary" padding={2}>
                                    En nuestro compromiso de brindar un servicio equitativo y transparente, presentamos nuestras tarifas de agua, las cuales son aplicables para todos nuestros usuarios. Es importante destacar que estas tarifas están sujetas a posibles ajustes anuales, en línea con las regulaciones y condiciones del mercado.
                                </Typography>
                            </CardContent>

                      
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6}>

                        <Card className="card-green">
                        <CardContent> 

  
                                <TarifaComponent />
                        </CardContent>
                        </Card>


                    </Grid>
                </Grid>
            </Container>


            <Container>

                <Grid container spacing={2}>

                    <Grid xs={12}>

                        <Alert icon={<WaterDropIcon fontSize="inherit" />} severity="info">
                            <Typography variant="subtitle2">

                                El agua es un recurso esencial para la vida en nuestro planeta. Aunque la Tierra está cubierta en un 70% por agua, solo una pequeña fracción de ese porcentaje es agua dulce disponible para consumo humano. Es por eso que es crucial que todos tomemos medidas para conservar y proteger este recurso natural invaluable.
                            </Typography>
                        </Alert>

                    </Grid>
                    <Grid xs={6} md={8}>

                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={4}>

                        <Card>

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
                    <Grid xs={12} sm={6} md={4}>

                        <Card>

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