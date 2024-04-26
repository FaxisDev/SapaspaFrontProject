'use client'

import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import  useFetch  from "../../hooks/useFetch";

export const PerfilComponent = ({ id }) => {

   // const { data, loading, error } = useFetch("api/contribuyentes/" + id, { 'method': 'GET' });
  
 let loading = true;
    return (

        <>
            <Card padding={2} className="card-blue" elevate={4}>
                {
                    loading ?
                        <>
                            <CardContent>

                            </CardContent>
                        </>
                        :
                        <>

                            <CardHeader title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016" />

                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    Este formulario te ayuda a encontrar la información del titular para pagar el servicio de agua. Puedes buscar utilizando el número de folio único, el CURP o el número telefónico del titular. Facilita tu pago y gestiona tus cuentas de forma rápida y sencilla.
                                </Typography>
                            </CardContent>
                        </>


                }

            </Card>
        </>


    )
}