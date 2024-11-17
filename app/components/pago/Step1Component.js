'use client'

import { Alert, AlertTitle, Box, CircularProgress, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import useFetch from "../../hooks/useFetch";

function Step1Component({ id }) {


    const { data, loading } = useFetch("api/propiedades/" + id, { 'method': 'GET' });

    const { data: dataTipoPropiedad, loading: loadingTipoPropiedad } = useFetch("api/tipo-propiedades", { 'method': 'GET' });

    // Función para obtener el tipo de propiedad por su ID
    const obtenerTipoPropiedadPorId = (id) => {
     
        return !dataTipoPropiedad ? 'Indefinido' : dataTipoPropiedad.find(tipo => tipo.id === id)?.tipo || "Indefinido";
    };


    return (
        <>
            {
                loading ?
                    <>
                        <Box>
                            <Grid container justifyContent="center"
                                alignItems="center" padding={1}>
                                <CircularProgress color="inherit" />
                            </Grid>
                        </Box>
                    </>
                    :
                    <Box>

                        <Grid container spacing={2} >
                            <Grid item xs={12}>

                                <Alert className='alerta-verde' variant="filled" >

                                    <AlertTitle>Verificación de Datos</AlertTitle>
                                    Antes de pagar, asegúrate de que los datos de la propiedad estén correctos. Si lo están, haz clic en Siguiente. Si no, agenda una cita con Sapaspa.

                                </Alert>
                            </Grid>

                            <Grid item xs={12}>
                                <List subheader={<ListSubheader>Dirección:</ListSubheader>} >
                                    <ListItem>
                                        <ListItemIcon>
                                            <ShareLocationIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Ubicación"
                                            secondary={`
                                            ${data.calle} ${data.numero_exterior || "(S/N)"}, entre ${data.entre_calles}, en la colonia ${data.colonia}, ${data.ciudad}, ${data.estado}, C.P ${data.codigo_postal}.
                                            `}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocationCityIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Tipo de propiedad"
                                            secondary={obtenerTipoPropiedadPorId(data.tipo_propiedad)}
                                        />
                                    </ListItem>

                                </List>

                            </Grid>

                        </Grid>


                    </Box>

            }
        </>
    )
}

export default Step1Component