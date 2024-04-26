

'use client'

import { Alert, AlertTitle, Avatar, AvatarGroup, Card, CardContent, CardHeader, CircularProgress, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import useFetch from "../../hooks/useFetch";

export default function PropiedadesComponent({ id }) {

    //const { data, loading } = useFetch("api/contribuyentes/" + id, { 'method': 'GET' });

    let loading = false;

    return (
        <Card padding={2} elevation={1}>

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



                            <Alert severity="warning">
                                <AlertTitle>Registros de Propiedad no Encontrado </AlertTitle>
                                No se ha encontrado registro de propiedad asociado a este contribuyente. Por favor, acércate a SAPASPA para completar el registro y los pagos correspondientes.
                            </Alert>

                        </CardContent>
                    </>
            }
        </Card>
    )
}
