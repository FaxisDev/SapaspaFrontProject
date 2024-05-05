'use client';
import { Avatar, Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Image from "next/image";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Footer() {

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha en español
    const fecha = format(fechaActual, "yyyy", { locale: es });


    return (

        <>
            <div className="barra-semi-footer">
                <Container>
                    <Grid
                        padding={2}
                        container
                        direction="row"
                        justifyContent="center"
                        justifySelf={"center"}
                        justifyItems={"center"}

                        alignItems="center"
                        alignContent={"center"}
                        alignSelf={"center"}
                        spacing={2}
                    >
                        <Grid item xs={12} md={6}>
                            <Box>



                                <Typography variant="subtitle1" align="center" gutterBottom>
                                    Síguenos en nuestras redes sociales
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} >


                            <Box>
                                <Stack direction="row" spacing={1} justifyContent="center"
                                    alignItems="center">
                                    <Box>
                                        <Button variant="outlined" color="inherit">
                                            <XIcon />
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button variant="outlined" color="inherit">
                                            <FacebookIcon />
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Button variant="outlined" color="inherit">
                                            <InstagramIcon />
                                        </Button>
                                    </Box>
                                    <Box>

                                        <Button variant="outlined" color="inherit">
                                            <YouTubeIcon />
                                        </Button>
                                    </Box>

                                    <Box>

                                        <Button variant="outlined" color="inherit">
                                            <EmailIcon />
                                        </Button>
                                    </Box>
                                </Stack>
                            </Box>






                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="barra-footer">

                <Container>
                    <Grid
                        padding={2}
                        container
                        direction="row"
                        justifyContent="center"
                        justifySelf={"center"}
                        justifyItems={"center"}

                        alignItems="center"
                        alignContent={"center"}
                        alignSelf={"center"}
                        spacing={2}
                    >
                        <Grid item xs={12} md={4} justifyContent="center" justifySelf={"center"} justifyItems={"center"} display="flex" alignItems="center" alignContent={"center"} alignSelf={"center"}>

                            <Box>


                                <List subheader={<ListSubheader color="inherit" className="footer-title-list">Ubicación:</ListSubheader>} >
                                    <ListItem>

                                        <ListItemIcon>
                                            <Avatar className="footer-avatar-color" >

                                                <LocationOnIcon className="footer-icon-color" />
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            secondaryTypographyProps={{
                                                color: 'white'
                                            }}
                                            primary="Poso Nº2"
                                            secondary="San Jose Axalco, 56620 San Pablo Atlazalpan, Méx."
                                        />

                                    </ListItem>
                             

                                </List>

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} justifyContent="center" justifySelf={"center"} justifyItems={"center"} display="flex" alignItems="center" alignContent={"center"} alignSelf={"center"}>
                            <Box>


                                <List subheader={<ListSubheader color="inherit" className="footer-title-list">Telefonos:</ListSubheader>} >
                                    <ListItem>

                                        <ListItemIcon>
                                            <Avatar className="footer-avatar-color" >

                                                <LocalPhoneIcon className="footer-icon-color" />
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            secondaryTypographyProps={{
                                                color: 'white'
                                            }}
                                            primary="Atencion a contribuyentes"
                                            secondary="+52 55 3333 2223"
                                        />

                                    </ListItem>
                                    <ListItem>

                                        <ListItemIcon>
                                            <Avatar className="footer-avatar-color">

                                                <WhatsAppIcon className="footer-icon-color" />
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            secondaryTypographyProps={{
                                                color: 'white'
                                            }}
                                            primary="Whatsapp"
                                            secondary="+52 55 4443 2344"
                                        />

                                    </ListItem>

                                </List>

                            </Box>

                        </Grid>

                        <Grid item xs={12} md={4} justifyContent="center" justifySelf={"center"} justifyItems={"center"} display="flex" alignItems="center" alignContent={"center"} alignSelf={"center"}>

                            <Box>
                                <Image
                                    src="/img/logo_white.svg"
                                    width={128}
                                    height={128}
                                    alt="Atl"
                                    priority={true}
                                />
                            </Box>

                        </Grid>
                        <Grid item xs={12}>

                            <Box>

                                <Divider />
                                <Typography gutterBottom align="center" variant="body2" component="div">
                                    Sapaspa {fecha} -  Agua Potable y Alcantarillado de San Pablo Atlalzalpan
                                </Typography>

                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </>
    )
}
