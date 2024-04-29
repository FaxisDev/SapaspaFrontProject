"use client"

import { Button, Card, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { BootstrapTooltip } from "../layout/BootstrapTooltip";
import { useRouter } from 'next/navigation';

function NoDisponibleComponent() {
    const router = useRouter();
    return (
        <Container>

            <Grid container spacing={2} alignItems="center"
                justifyContent="center" alignSelf={"center"}>
                <Grid item xs={12} md={6}>
                    <Card padding={2} elevation={7}>
                        <CardMedia
                            title="Contenido no disponible"

                            component="img"
                            height="145"
                            image="/img/visual/origami/no-disponible.jpg"
                            alt="Contenido no disponible"
                            className="animate__animated animate__fadeIn  animate__delay-1s"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle2" component="div" padding={2}>
                                Contenido no disponible
                            </Typography>

                            <Divider />
                            <Typography variant="body1" color="text.secondary" padding={2} >
                                Lo sentimos, pero el contenido que estás buscando no está disponible en este momento.
                            </Typography>

                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Stack direction="row" justifyContent="center"
                                        alignItems="center" spacing={4}>

                                        <BootstrapTooltip title="Principal">
                                            <Button endIcon={<HomeIcon />} className="animate__animated animate__pulse  animate__delay-1s" size={"medium"} variant="outlined" color="primary" onClick={() => { router.push('/') }}>
                                                Ir a pagina principal
                                            </Button>
                                        </BootstrapTooltip>

                                    </Stack>
                                </Grid>
                            </Grid>

                        </CardContent>



                    </Card>

                </Grid>
            </Grid>

        </Container>
    )
}

export default NoDisponibleComponent