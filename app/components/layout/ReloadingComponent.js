

import { Box, Card, CardContent, CardMedia, Container, Grid, LinearProgress, Stack, Typography } from "@mui/material"



function ReloadingComponent() {
    return (
        <Container>

            <Grid container spacing={2} alignItems="center"
                justifyContent="center" alignSelf={"center"}>
                <Grid item xs={12} md={6}>
                    <Card padding={2} elevation={4}  >
                        <CardMedia
                            title="Contenido no disponible"

                            component="img"
                            height="165"
                            image="/img/visual/origami/cargando-header.jpg"
                            alt="Contenido no disponible"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle2" component="div" align="center" padding={2}>

                                ¡Estamos en ello! 🚀 ¡Gracias por aguantar!
                            </Typography>

                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <Stack direction="row" justifyContent="center"
                                        alignItems="center" spacing={4}>
                                        <Box sx={{ width: '100%' }}>
                                            <LinearProgress />
                                        </Box>


                                    </Stack>
                                </Grid>
                            </Grid>

                        </CardContent>

                        <CardMedia
                            title="Contenido no disponible"

                            component="img"
                            height="145"
                            image="/img/visual/origami/cargando-footer.jpg"
                            alt="Contenido no disponible"

                        />

                    </Card>

                </Grid>
            </Grid>

        </Container>
    )
}

export default ReloadingComponent