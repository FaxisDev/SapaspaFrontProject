'use client';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
                        <Grid justifyContent="center" alignItems="center" xs={12}>

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
                            alt="Sapaspa"

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
            </Container>
        </div>
    )
}
