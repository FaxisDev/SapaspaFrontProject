import { Alert, AlertTitle, Box, CircularProgress, Grid } from '@mui/material'
import React from 'react'

export default function TransaccionExitosaComponent({ loading, datosRecibidos }) {

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
                            </Grid>
                        </Box>
                    )
            }
        </Box>
    )


}
