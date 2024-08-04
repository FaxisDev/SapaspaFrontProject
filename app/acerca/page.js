'use client'
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

function Page() {

    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (

        <Box>

            <Box sx={{ textAlign: 'center', p: 6, mt: -3, backgroundColor: "#fff" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    ¿Quiénes Somos?
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 800, margin: '0 auto', px: 2 }}>
                    El Comité de Agua Potable y Alcantarillado de San Pablo Atlazalpan (SAPASPA) es una organización comprometida con la gestión y distribución eficiente del agua potable, así como con el tratamiento y disposición adecuada de aguas residuales. Nuestra misión es garantizar el acceso a servicios de agua y saneamiento de calidad para todos los habitantes de nuestra comunidad.
                </Typography>
            </Box>

            <Container>
                <Card sx={{ my: 2}} elevation={4} className="card-darkblue animate__animated animate__flipInX" >
                    <Box>
                        <Tabs value={tabValue} onChange={handleTabChange} centered textColor='inherit'> 
                            <Tab label="Misión" />
                            <Tab label="Visión" />
                            <Tab label="Valores" />
                        </Tabs>
                    </Box>

                </Card>
                <Grid container spacing={3} justifyContent="center" mb={4}>
                    {tabValue === 0 && (
                        <Grid item xs={12} sm={8} md={6}>
                            <Card sx={{ bgcolor: '#f5f5f5', boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Nuestra Misión
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Proveer servicios de agua potable y alcantarillado de alta calidad, promoviendo el uso responsable y sostenible del agua.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                    {tabValue === 1 && (
                        <Grid item xs={12} sm={8} md={6}>
                            <Card sx={{ bgcolor: '#f5f5f5', boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Nuestra Visión
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Ser líderes en la gestión de recursos hídricos en la región, garantizando la disponibilidad y calidad del agua para futuras generaciones.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                    {tabValue === 2 && (
                        <Grid item xs={12} sm={8} md={6}>
                            <Card sx={{ bgcolor: '#f5f5f5', boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Nuestros Valores
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Transparencia, responsabilidad, sostenibilidad y compromiso con la comunidad.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>

                <Box sx={{ my: 6 }}>
                    <Typography variant="h5" component="h2" align="center" gutterBottom>
                        Nuestro Equipo
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg"
                                    alt="Nombre del Miembro"
                                />
                                <CardContent>
                                    <Typography variant="h6">Nombre del Miembro</Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div" padding={2}>Presidente</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Lidera el comité con dedicación y compromiso para asegurar el acceso a servicios esenciales de agua.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://demo.solwininfotech.com/wordpress/justica/wp-content/uploads/2016/07/Attorneys-5.png"
                                    alt="Nombre del Miembro"
                                />
                                <CardContent>
                                    <Typography variant="h6">Nombre del Miembro</Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div" padding={2}>Director Técnico</Typography>
                                    <Typography variant="body2" color={"textSecondary"}>
                                        Encargado de la supervisión técnica y operativa de los sistemas de agua y alcantarillado.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://salondesmaires-gard.com/wp-content/uploads/2015/04/speaker-1-v2.jpg"
                                    alt="Nombre del Miembro"
                                />
                                <CardContent>
                                    <Typography variant="h6">Nombre del Miembro</Typography>
                                    <Typography gutterBottom variant="subtitle2" component="div" padding={2}>Responsable de Administración</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Gestiona los recursos y garantiza la transparencia en la administración del comité.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Page;
