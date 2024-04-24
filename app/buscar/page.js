'use client'
import { Alert, Avatar, Button, Card, CardContent, CardHeader, CircularProgress, Container, FormHelperText, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Snackbar, Stack, TextField, Typography } from "@mui/material";
import useFormData from '../hooks/useFormData';

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from 'next/navigation';

import { ContribuyenteContext } from '../context/ContribuyenteContext';

export default function Page() {
    const router = useRouter();
    const { guardarInfoContribuyente } = useContext(ContribuyenteContext);

    const [formularioData, setFormularioData, limpiarFormularioData] = useFormData({
        folio_unico: '',
        curp: '',
        numero_telefonico: '',
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [loading, setLoading] = useState(false); // Indica si la solicitud está en curso
    const [open, setOpen] = useState(false);

    // Función para realizar la solicitud
    const fetchData = async (url) => {
        // Establecer loading en true para indicar que la solicitud está en curso
        setLoading(true);

        // Construir la URL completa para la solicitud
        let fetchUrl = `http://127.0.0.1:8000/${url}`;
        // Copiar las opciones de solicitud para evitar mutar el objeto original
        let fetchOptions = { 'method': 'GET' };

        const queryString = new URLSearchParams(formularioData).toString();
        fetchUrl += `?${queryString}`;

        // Realizar la solicitud utilizando fetch API
        fetch(fetchUrl, fetchOptions)
            .then(response => {
                // Verificar si la respuesta es exitosa
                if (!response.ok) {
                    // Si la respuesta no es exitosa, lanzar un error
                    throw new Error('La respuesta de la red no fue correcta');
                }
                // Convertir la respuesta a formato JSON y establecer los datos obtenidos en el estado
                return response.json();
            })
            .then(responseData => {
                // Establecer loading en false para indicar que la solicitud ha terminado
                setLoading(false);

                // Mover la lógica que depende de data.length aquí
                if (responseData.length === 0) {
                    setOpen(true);
                } else {
                    setOpen(false);
                    guardarInfoContribuyente(responseData);
                    router.push('/buscar/contribuyentes');

                }
                console.log(responseData)

            })
            .catch(error => {
                // Manejo de errores
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            });


    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetchData('api/contribuyentes');

    };
    return (

        <>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}

                direction="up"

            >
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Error, registros no encontrados

                </Alert>
            </Snackbar>

            <Container>
                <Grid container spacing={2} >
                    <Grid container justifyContent="center"
                        alignItems="center" padding={1}>
                        <Image
                            src="/img/iconos/buscar.svg"
                            width={240}
                            height={164}
                            alt="Sapaspa"
                            sx={{ flexGrow: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Card padding={2} className="card-blue">
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    Este formulario te ayuda a encontrar la información del titular para pagar el servicio de agua. Puedes buscar utilizando el número de folio único, el CURP o el número telefónico del titular. Facilita tu pago y gestiona tus cuentas de forma rápida y sencilla.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} md={6}>

                        <Card>

                            <CardHeader title="Formulario" titleTypographyProps={{ align: 'center' }} />

                            <Alert severity="info">Para encontrar tus datos, solo necesitas ingresar <u><b>uno</b></u>  de los 3 campos.</Alert>

                            <CardContent>


                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth

                                                name="folio_unico"
                                                label="Folio Único"
                                                variant="outlined"
                                                value={formularioData.folio_unico}
                                                onChange={setFormularioData}
                                                InputProps={{
                                                    endAdornment: <ArticleIcon />,
                                                }}
                                            />
                                            <FormHelperText id="folio_unico">
                                                Por lo general, se encuentra en la parte superior de tu recibo de agua más reciente.
                                            </FormHelperText>

                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: <PermIdentityIcon />,
                                                }}
                                                name="curp"
                                                label="CURP"
                                                variant="outlined"
                                                value={formularioData.curp}
                                                onChange={setFormularioData}
                                            />
                                            <FormHelperText id="curp">
                                                Puedes encontrarlo en tu acta de nacimiento o consultar en línea a través del sitio web oficial del gobierno mexicano.
                                            </FormHelperText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: <SmartphoneIcon />,
                                                }}
                                                name="numero_telefonico"
                                                label="Número Telefónico"
                                                variant="outlined"
                                                value={formularioData.numero_telefonico}
                                                onChange={setFormularioData}
                                            />
                                            <FormHelperText id="numero_telefonico">
                                                Es el número telefónico o de celular que proporcionaste al registrarte en Sapaspa.
                                            </FormHelperText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Stack direction="row" justifyContent="flex-end"
                                                alignItems="center" spacing={1}>
                                                <Button endIcon={<CleaningServicesIcon />} size={"medium"} variant="contained" color="inherit" className="boton-yellow" onClick={limpiarFormularioData} >
                                                    Limpiar
                                                </Button>


                                                <Button endIcon={loading ? <CircularProgress size={24} /> : <SearchIcon />} size={"medium"} variant="contained" color="primary" type="submit" disabled={loading}>
                                                    {loading ? 'Buscando...' : 'Buscar'}
                                                </Button>



                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>



                        </Card>

                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Card>
                            <List subheader={<ListSubheader>Para tener en cuenta:</ListSubheader>} >
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Avatar>

                                                <InfoIcon />
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="No compartas tus datos"
                                            secondary="Por favor, recuerda que esta información es confidencial y no debe ser compartida con nadie."
                                        />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Avatar>

                                                <InfoIcon />
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Acercate con nosotros"
                                            secondary="Si no encontramos tu registro por alguna razón, te pedimos que te acerques a la oficina de Sapaspa."
                                        />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Avatar>

                                                <InfoIcon />
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Verifica tus datos"
                                            secondary="Asegúrate de que los datos ingresados sean correctos y estén completos."
                                        />
                                    </ListItemButton>
                                </ListItem>

                            </List>


                        </Card>


                    </Grid>
                </Grid>
            </Container>
        </>
    );

}