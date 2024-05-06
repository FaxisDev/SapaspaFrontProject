import { Alert, AlertTitle, Box, CircularProgress, Grid } from '@mui/material'
import React from 'react'

function Step2Component({ id }) {
    const loading = false;
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

                                <Alert className='alerta-morada' variant="filled" >

                                    <AlertTitle>Seleccionar montos</AlertTitle>
                                    Por favor, verifica los montos que pagarás en esta ocasión para que podamos validar los cálculos correspondientes y generar tu recibo de pago.

                                </Alert>
                            </Grid>
                        </Grid>
                    </Box>

            }
        </>
    )
}

export default Step2Component