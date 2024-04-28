'use client'

import { Card, CardContent, CircularProgress, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import useFetch from "../../hooks/useFetch";
import ArticleIcon from '@mui/icons-material/Article';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartphoneIcon from '@mui/icons-material/Smartphone';


import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const DetallesComponent = ({ id }) => {
    const { data, loading } = useFetch("api/contribuyentes/" + id, { 'method': 'GET' });




    return (
        <Card padding={2} elevation={1} className="animate__animated animate__backInLeft">

            {
                loading ?
                    <>
                        <CardContent>
                            <Grid container justifyContent="center"
                                alignItems="center" padding={1}>
                                <CircularProgress color="inherit" />
                            </Grid>
                        </CardContent>
                    </>
                    :
                    <>
                        <CardContent>

                            <List subheader={<ListSubheader>Detalles</ListSubheader>} >

                                <ListItem>
                                    <ListItemIcon>
                                        <ArticleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Folio unico"
                                        secondary={data.folio_unico}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <BadgeIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Curp"
                                        secondary={data.curp}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <SmartphoneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Telefono"
                                        secondary={data.telefono}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <CalendarMonthIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Fecha de Alta"
                                        secondary={data.fecha_creacion ? format(data.fecha_creacion, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: es }) : data.fecha_creacion}
                                    />
                                </ListItem>

                            </List>

                        </CardContent>
                    </>
            }
        </Card>
    )
}

