'use client'

import { Avatar, AvatarGroup, Box, CircularProgress, Container, Grid, List, ListItem, ListItemText } from "@mui/material"
import useFetch from "../../hooks/useFetch";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const PerfilComponent = ({ id }) => {

    const { data, loading } = useFetch("api/contribuyentes/" + id, { 'method': 'GET' });

    //let loading = true;
    return (

        <Box className="card-contribuidor" sx={{ mt: 3 }}>
            <Container>

                <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={12} >
                        <Box>
                            {
                                loading ?

                                    <Box>
                                        <Grid container justifyContent="center"
                                            alignItems="center" padding={1}>
                                            <CircularProgress color="inherit" />
                                        </Grid>
                                    </Box>

                                    :

                                    <Box>
                                        <Grid container alignItems="center">
                                            <Grid item xs={12}>
                                                <Grid container justifyContent="center" padding={1}>
                                                    <AvatarGroup total={1} className="animate__animated animate__rotateIn ">

                                                        <Avatar variant="circular" sx={{ width: 148, height: 148 }}>
                                                            <AccountCircleIcon />
                                                        </Avatar>
                                                    </AvatarGroup>

                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Grid container padding={1} justifyContent="center">
                                                    <Box>
                                                        <List>
                                                            <ListItem>
                                                                <ListItemText

                                                                    primary={data.nombre + " " + data.apellido_paterno + " " + data.apellido_materno}
                                                                    secondary={data.correo_electronico}

                                                                    secondaryTypographyProps={{
                                                                        color: 'white',
                                                                        textAlign: 'center'
                                                                    }}
                                                                    primaryTypographyProps={{
                                                                        color: 'white',
                                                                        textAlign: 'center',
                                                                        fontSize: '35px'
                                                                    }}
                                                                />
                                                            </ListItem>
                                                        </List>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                            }
                        </Box >
                    </Grid>
                </Grid>
            </Container>
        </Box>


    )
}