'use client'

import { Box, Card, CardContent, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import ArticleIcon from '@mui/icons-material/Article';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const DetallesComponent = ({ id }) => {
    const { data, loading } = useFetch("api/contribuyentes/" + id, { method: 'GET' });

    const cardData = [
        { icon: <ArticleIcon />, label: "Folio único", value: data?.folio_unico, color: "#EBCF8D", textColor: "#D1A64E" },
        { icon: <BadgeIcon />, label: "Curp", value: data?.curp, color: "#CC5649", textColor: "#80362E" },
        { icon: <SmartphoneIcon />, label: "Teléfono", value: data?.telefono, color: "#8DDCEB", textColor: "#5DACD6" },
        { icon: <CalendarMonthIcon />, label: "Fecha de Alta", value: data?.fecha_creacion ? format(data.fecha_creacion, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: es }) : data?.fecha_creacion, color: "#8DEBC6", textColor: "#6ABF9B" },
    ];

    return (
        <Box>
            <Card elevation={2} className="animate__animated animate__backInLeft">
                <CardContent>
        
                    <CardContent>
                <Typography gutterBottom variant="subtitle2" padding={2} align="center">
                    Detalle de perfil
                </Typography>
                <Divider />
            </CardContent>

                    {loading ? (
                        <Grid container justifyContent="center" alignItems="center" height={200}>
                            <CircularProgress color="primary" />
                        </Grid>
                    ) : (
                        <Grid container spacing={2}>
                            {cardData.map((item, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card variant="outlined" sx={{ borderColor: item.color }}>
                                        <CardContent>
                                            <Grid container alignItems="center" spacing={2}>
                                                <Grid item>
                                                    <Box
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: '50%',
                                                            backgroundColor: item.color,
                                                        }}
                                                    >
                                                        {item.icon}
                                                    </Box>
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography variant="subtitle1" sx={{ color: item.textColor }}>
                                                        {item.label}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {item.value}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
