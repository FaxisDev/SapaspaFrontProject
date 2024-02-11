'use client';
import { Box, Typography } from "@mui/material";


import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";


export default function Footer() {
    return (
        <div className="barra-footer">
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>

                    <Box>

                        <Typography gutterBottom variant="h5" component="div">
                            Contacto 
                        </Typography>
                        <Typography variant="body1">
                            Correo Electronico
                        </Typography>
                        <Typography variant="body2">
                            sapaspa@gmail.com
                            
                        </Typography>
                        <Typography variant="body1">
                            Redes Sociales
                        </Typography>
                        <Typography variant="body2">
                            /Sapaspa
                        </Typography>

                    </Box>





                </Grid>

                <Grid xs={12} md={4} >

                    <Box>

                        <Typography gutterBottom variant="h5" component="div">
                            Telefonos
                        </Typography>
                        <Typography variant="body1">
                            Area Metropolitana
                        </Typography>
                        <Typography variant="body2">
                            +52 5544 3323
                        </Typography>
                        <Typography variant="body1">
                            Cdmx
                        </Typography>
                        <Typography variant="body2">
                            +52 01 5345 3323
                        </Typography>

                    </Box>


                </Grid>

                <Grid xs={12} md={4}>

                    <center>


                        <Image
                            src="/img/logo.svg"
                            width={68}
                            height={68}
                            alt="Sapaspa"
                            sx={{ flexGrow: 1 }}
                        />
                    </center>

                </Grid>

            </Grid>


        </div>
    )
}
