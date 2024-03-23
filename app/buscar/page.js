'use client'
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from "react";
import Image from "next/image";

export default function Page() {
    const [formularioData, setFormularioData] = useState({
        folio_unico: '',
        curp: '',
        numero_telefonico: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormularioData({
            ...formularioData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario
        console.log(formularioData);
    };
    return (

        <>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Card padding={1}>

                            <CardContent>



                                <Typography variant="body1" color="text.secondary">
                                    Este formulario te ayuda a encontrar la información del titular para pagar el servicio de agua. Puedes buscar utilizando el número de folio único, el CURP o el número telefónico del titular. Facilita tu pago y gestiona tus cuentas de forma rápida y sencilla.
                                </Typography>


                            </CardContent>



                        </Card>

                    </Grid>

                    <Grid container justifyContent="center"
                        alignItems="center" padding={1}>
                        <Image
                            src="/img/logo.svg"
                            width={240}
                            height={164}
                            alt="Sapaspa"
                            sx={{ flexGrow: 1 }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} mt={2}>
                    <Grid item xs={12} md={6}>

                        <Card>

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
                                                onChange={handleChange}
                                                InputProps={{
                                                    endAdornment: <ArticleIcon />,
                                                  }}
                                            />
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
                                                onChange={handleChange}
                                            />
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
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button endIcon={<SendIcon />} size={"medium"} variant="contained" color="primary" type="submit">
                                                Buscar
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>



                        </Card>

                    </Grid>
                    <Grid item xs={12} md={6}> / </Grid>
                </Grid>
            </Container>
        </>
    );

}