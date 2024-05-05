'use client';
import { Avatar, Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

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

                            <Box> ...</Box>
                        </Grid>

                        <Grid item xs={12} md={4} justifyContent="center" justifySelf={"center"} justifyItems={"center"} display="flex" alignItems="center" alignContent={"center"} alignSelf={"center"}>
                            <Box> ...</Box>

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

                {/* <Container>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"

                        spacing={2}
                    >

                        <Grid xs={12} md={4} item>


                            <Box>
                                <List subheader={<ListSubheader color="inherit" className="footer-title-list">Contacto:</ListSubheader>} >
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar className="footer-avatar-color">

                                                    <EmailIcon className="footer-icon-color" />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                secondaryTypographyProps={{
                                                    color: 'white'
                                                }}
                                                primary="Email"
                                                secondary="info@sapaspa.com"
                                            />
                                        </ListItemButton>
                                    </ListItem>


                                </List>
                            </Box>
                        </Grid>

                        <Grid justifyContent="center" alignItems="center" xs={12}>

                            <Box>
                                <List subheader={<ListSubheader color="inherit" className="footer-title-list">Redes sociales:</ListSubheader>} >
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar className="footer-avatar-color">

                                                    <EmailIcon className="footer-icon-color" />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                secondaryTypographyProps={{
                                                    color: 'white'
                                                }}
                                                primary="Email"
                                                secondary="info@sapaspa.com"
                                            />
                                        </ListItemButton>
                                    </ListItem>


                                </List>
                            </Box>
                        </Grid>


                        <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                            <Box>
                                <List subheader={<ListSubheader color="inherit" className="footer-title-list">Telefonos:</ListSubheader>} >
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar className="footer-avatar-color">

                                                    <LocalPhoneIcon className="footer-icon-color" />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                secondaryTypographyProps={{
                                                    color: 'white'
                                                }}
                                                primary="Area metropolitana"
                                                secondary="+52 55 3333 2223"
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar className="footer-avatar-color">

                                                    <LocalPhoneIcon className="footer-icon-color" />
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                secondaryTypographyProps={{
                                                    color: 'white'
                                                }}
                                                primary="Ciudad de México"
                                                secondary="+52 4443 2344"
                                            />
                                        </ListItemButton>
                                    </ListItem>

                                </List>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
                            <Image
                                src="/img/logo_white.svg"
                                width={128}
                                height={128}
                                alt="Atl"
                                priority={true}
                            />

                        </Grid>

                        <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                            <Box>
                                <Divider />
                                <Typography gutterBottom variant="body2" component="div">
                                    Sapaspa {fecha} -  Agua Potable y Alcantarillado de San Pablo Atlalzalpan
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container> */}
            </div>
        </>
    )
}
