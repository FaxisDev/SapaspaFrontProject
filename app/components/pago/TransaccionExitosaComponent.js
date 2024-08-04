import { Alert, AlertTitle, Box, Button, CircularProgress, Grid } from '@mui/material'
import React from 'react'

export default function TransaccionExitosaComponent({ loading, datosRecibidos }) {

    const handleOnClickDescargarPDF = (id_recibo, id_contribuyente) => {
        window.open("http://127.0.0.1:8000/pdf/recibo/" + id_recibo + "/" + id_contribuyente + "/", '_blank');
    };


    return (
        <Box>
            {
                loading ?

                    (<Box>
                        <Grid container justifyContent="center"
                            alignItems="center" padding={1}>
                            <CircularProgress color="inherit" />
                        </Grid>
                    </Box >)

                    :
                    (
                        <Box>
                          
                            <Grid container spacing={2} >
                                <Grid item xs={12}>

                                    <Alert className='alerta-verde' variant="filled">
                                        <AlertTitle>Pago Exitoso</AlertTitle>
                                       {datosRecibidos.message}
                                    </Alert>

                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant='outlined' color='primary' onClick={() => handleOnClickDescargarPDF(datosRecibidos.id_recibo, datosRecibidos.id_contribuyente)} fullWidth size='medium'>Descargar Recibo PDF</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    )
            }
        </Box>
    )


}
