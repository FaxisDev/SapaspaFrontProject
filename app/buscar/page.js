'use client'
import { Alert, AlertTitle, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Container, Divider, FormHelperText, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Snackbar, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
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
        telefono: '',
    });

    const [seleccionarTab, setSeleccionarTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSeleccionarTab(newValue);
    };


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
                        <Card elevation={1} className="animate__animated animate__zoomIn">


                            <CardContent>
                                <Alert severity="info" variant="outlined">
                                    <AlertTitle>¡Muy importante!</AlertTitle>
                                    Este formulario te ayuda a encontrar la información del titular para pagar el servicio de agua. Puedes buscar utilizando el número de folio único, el CURP o el número telefónico del titular. Facilita tu pago y gestiona tus cuentas de forma rápida y sencilla.
                                </Alert>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} md={7}>

                        <Card elevation={5}>

                            <Tabs value={seleccionarTab} onChange={handleChange} centered variant="fullWidth">
                                <Tab label="Metodo 1" />
                                <Tab label="Metodo 2" />
                            </Tabs>
                            <CardContent>
                                <Box>

                                    <CardHeader title="Formulario" titleTypographyProps={{ align: 'center' }} />

                                    <Alert severity="info" variant="outlined">Todos los campos son obligatorios.</Alert>


                                    <TabPanel value={seleccionarTab} index={0}>
                                        <form onSubmit={handleSubmit}>
                                            <CardContent>
                                                <Grid container spacing={2}>
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
                                                                endAdornment: <SmartphoneIcon />,
                                                            }}
                                                            name="telefono"
                                                            label="Número Telefónico"
                                                            variant="outlined"
                                                            value={formularioData.telefono}
                                                            onChange={setFormularioData}
                                                        />
                                                        <FormHelperText id="telefono">
                                                            Es el número telefónico o de celular que proporcionaste al registrarte en Sapaspa.
                                                        </FormHelperText>

                                                    </Grid>

                                                </Grid>

                                            </CardContent>
                                            <CardActions>

                                                <Grid container spacing={2}>

                                                    <Grid item xs={12}>
                                                        <Stack direction="row" justifyContent="flex-end"
                                                            alignItems="center" spacing={1}>
                                                            <Button endIcon={<CleaningServicesIcon />} size={"medium"} variant="outlined" color="inherit" className="boton-limpiar animate__animated animate__delay-1s animate__zoomIn"  onClick={limpiarFormularioData} >
                                                                Limpiar
                                                            </Button>


                                                            <Button endIcon={loading ? <CircularProgress size={24} /> : <SearchIcon />} size={"medium"} className="animate__animated animate__delay-2s animate__zoomIn" variant="outlined" color="primary" type="submit" disabled={loading}>
                                                                {loading ? 'Buscando...' : 'Buscar'}
                                                            </Button>



                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>

                                        </form>
                                    </TabPanel>
                                    <TabPanel value={seleccionarTab} index={1}>
                                        <form onSubmit={handleSubmit}>
                                            <CardContent>
                                                <Grid container spacing={2}>

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


                                                </Grid>

                                            </CardContent>

                                            <CardActions>

                                                <Grid container spacing={2}>

                                                    <Grid item xs={12}>
                                                        <Stack direction="row" justifyContent="flex-end"
                                                            alignItems="center" spacing={1}>
                                                            <Button endIcon={<CleaningServicesIcon />} size={"medium"} variant="outlined" color="inherit" className="boton-limpiar" onClick={limpiarFormularioData} >
                                                                Limpiar
                                                            </Button>


                                                            <Button endIcon={loading ? <CircularProgress size={24} /> : <SearchIcon />} size={"medium"} variant="outlined" color="primary" type="submit" disabled={loading}>
                                                                {loading ? 'Buscando...' : 'Buscar'}
                                                            </Button>

                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>

                                        </form>
                                    </TabPanel>

                                </Box>

                            </CardContent>


                        </Card>

                    </Grid>
                    <Grid item xs={12} md={5}>

                        <Card className="animate__animated animate__fadeIn">
                            <CardMedia
                                title="Busqeda"

                                component="img"
                                height="105"
                                image="/img/visual/origami/informatica.jpg"
                                alt="Informatica"
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                          <CardContent>
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

                          </CardContent>


                        </Card>


                    </Grid>
                </Grid>
            </Container >
        </>
    );

}


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}