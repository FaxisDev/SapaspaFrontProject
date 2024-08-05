'use client'

import { Avatar, AvatarGroup, Box, CircularProgress, Container, Grid, Typography, Paper } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const PerfilComponent = ({ id }) => {
    const { data, loading } = useFetch("api/contribuyentes/" + id, { method: 'GET' });

    return (
        <Box className="card-contribuidor" sx={{ mt: 3 }}>
            <Container>
                <Paper elevation={4} className="perfil-paper">
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            {loading ? (
                                <Box className="perfil-loading">
                                    <CircularProgress color="inherit" size={60} />
                                </Box>
                            ) : (
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <AvatarGroup className="animate__animated animate__rotateIn">
                                        <Avatar variant="circular" className="perfil-avatar">
                                        <AccountCircleIcon sx={{ fontSize: 80 }} />
                                        </Avatar>
                                    </AvatarGroup>
                                    <Typography variant="h4" component="h2" gutterBottom className="perfil-name">
                                        {data.nombre} {data.apellido_paterno} {data.apellido_materno}
                                    </Typography>
                                    <Typography variant="subtitle1" component="p" className="perfil-email">
                                        {data.correo_electronico}
                                    </Typography>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}
