'use client'
import { Alert, Avatar, Button, Card, CardContent, CardHeader, Container, FormHelperText, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Stack, TextField, Typography } from "@mui/material";
import useFormData from '../hooks/useFormData';
import useFetch from '../hooks/useFetch';

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Image from "next/image";


export default function Page() {
    const [formularioData, setFormularioData, limpiarFormularioData] = useFormData({
        folio_unico: '',
        curp: '',
        numero_telefonico: '',
    });

    // Utilizamos el hook useFetch para obtener datos de una API utilizando el método GET
    
    const { data, loading, error, urlx } = useFetch('api/contribuyentes', { 'method': 'GET' }, formularioData);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario
        console.log(formularioData);
        console.log("Consumo de api: prueba: " + JSON.stringify(data));
        console.log("error"+error)
    };
    return (

        <>
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

                                                <Button endIcon={<SearchIcon />} size={"medium"} variant="contained" color="primary" type="submit">
                                                    Buscar
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