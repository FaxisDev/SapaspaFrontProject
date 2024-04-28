'use client'

import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useFetch from "../../hooks/useFetch";


export default function PropiedadesComponent({ id }) {

    const { data, loading } = useFetch("api/propiedades/?contribuyente=" + id, { 'method': 'GET' });

    const columns = [
        { id: 'tipo_propiedad', label: 'Tipo de propiedad', align: 'center' },
        { id: 'ubicacion', label: 'Ubicacion', align: 'center' },
        { id: 'estatus', label: 'Estatus', align: 'center' },
        { id: 'opciones', label: 'Opciones', align: 'center' },
    ];


    return (
        <Card padding={2} elevation={0}>

            {
                loading ?
                    <>
                        <CardContent>
                            <Grid container justifyContent="center"
                                alignItems="center" padding={1}>
                                <CircularProgress color="inherit" />
                            </Grid>
                        </CardContent>
                    </>
                    :
                    <>
                        {data.length === 0 ?

                            <CardContent>

                                <Alert severity="warning">
                                    <AlertTitle>Registros de Propiedad no Encontrado </AlertTitle>
                                    No se ha encontrado registro de propiedad asociado a este contribuyente. Por favor, acércate a SAPASPA para completar el registro y los pagos correspondientes.
                                </Alert>

                            </CardContent>
                            :

                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}

                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {data.map((row, index) => (
                                            <TableRow hover
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">
                                                    {row.contribuyente}
                                                </TableCell>
                                                <TableCell align="center" component="th" scope="row">{row.entre_calles}</TableCell>
                                                <TableCell align="center"> Al dia</TableCell>
                                                <TableCell align="center">
                                                    <Button key={row.id} variant="outlined" color="primary" >
                                                        Pagar
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}


                                    </TableBody>

                                </Table>
                            </TableContainer>
                        }
                    </>
            }
        </Card>
    )
}
