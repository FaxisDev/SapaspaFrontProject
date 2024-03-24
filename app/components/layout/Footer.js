'use client';
import { Box, Container, Divider, Typography } from "@mui/material";


import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Footer() {

        // Obtener la fecha actual
        const fechaActual = new Date();

        // Formatear la fecha en español
        const fecha = format(fechaActual, "yyyy", { locale: es });


    return (
        <div className="barra-footer">
            <Container>

                <Grid container>

                    <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography gutterBottom variant="h6" component="div">
                                Contacto
                            </Typography>
                            <Typography variant="body1">
                                Correo Electronico
                            </Typography>
                            <Typography variant="caption">
                                sapaspa@gmail.com

                            </Typography>
                            <Typography variant="body1">
                                Redes Sociales
                            </Typography>
                            <Typography variant="caption">
                                /Sapaspa
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography gutterBottom variant="h6" component="div">
                                Telefonos
                            </Typography>
                            <Typography variant="body1">
                                Area Metropolitana
                            </Typography>
                            <Typography variant="caption">
                                +52 5544 3323
                            </Typography>
                            <Typography variant="body1">
                                Cdmx
                            </Typography>
                            <Typography variant="caption">
                                +52 01 5345 3323
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                        <Image
                            src="/img/logo_white.svg"
                            width={128}
                            height={128}
                            alt="Sapaspa"

                        />

                    </Grid>

                    <Grid xs={12}  display="flex" justifyContent="center" alignItems="center">
                        <Box>
                    <Divider />
                            <Typography gutterBottom variant="body2" component="div">
                                Sapaspa {fecha} -  Agua Potable y Alcantarillado de San Pablo Atlalzalpan
                            </Typography>
                           
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
