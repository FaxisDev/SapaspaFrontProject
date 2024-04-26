'use client'

import { Avatar, AvatarGroup, Card, CardContent, CardHeader, CircularProgress, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import useFetch from "../../hooks/useFetch";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const PerfilComponent = ({ id }) => {

    const { data, loading } = useFetch("api/contribuyentes/" + id, { 'method': 'GET' });

    //let loading = true;
    return (

        <>
            <Card padding={2} className="card-contribuidor" elevation={3}>
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
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Grid container justifyContent="center" padding={1}>
                                            <AvatarGroup total={1}>

                                                <Avatar variant="circular" sx={{ width: 128, height: 128 }}>
                                                    <AccountCircleIcon />
                                                </Avatar>
                                            </AvatarGroup>

                                        </Grid>
                                    </Grid>

                                    <Grid item xs={9}>
                                        <Grid container padding={1}>
                                            <List>
                                                <ListItem>
                                                    <ListItemText
                                                        primary={data.nombre + " " + data.apellido_paterno + " " + data.apellido_materno}
                                                        secondary={data.correo_electronico}
                                                    />
                                                </ListItem>

                                            </List>

                                        </Grid>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </>


                }

            </Card >
        </>


    )
}