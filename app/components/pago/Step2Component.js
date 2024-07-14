import { Alert, AlertTitle, Box, CardContent, Chip, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import useFetch from '../../hooks/useFetch';

import PaidIcon from '@mui/icons-material/Paid';
import TodayIcon from '@mui/icons-material/Today';
import DiscountIcon from '@mui/icons-material/Discount';


import { BootstrapTooltip } from '../layout/BootstrapTooltip';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function Step2Component({ id, setMonto }) {

    const { data, loading } = useFetch("api/obtener-pago?propiedad=" + id, { 'method': 'GET' });

    const { data: dataServicio, loading: loadingServicio } = useFetch("api/servicios", { 'method': 'GET' });

    // Función para obtener el nombre de servicio por su id
    const obtenerServicioPorId = (id) => {
        return !dataServicio ? 'Indefinido' : dataServicio.find(tipo => tipo.id === id).descripcion;
    };

    const columns = [
        { id: 'servicio', label: 'Servicio', align: 'center' },
        { id: 'fecha', label: 'Mes de pago', align: 'center' },
        { id: 'subtotal', label: 'Subtotal', align: 'center' },
        { id: 'descuento', label: 'Descuento', align: 'center' },
        { id: 'total', label: 'Total', align: 'center' },
    ];

    let suma_subtotal = 0, suma_descuentos = 0, suma_total = 0;

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

                            <Grid item xs={12}>
                                <TableContainer>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead >
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

                                            {data.map((row, index) => {

                                                suma_descuentos += row.descuento;
                                                suma_subtotal += row.sub_total;
                                                suma_total += row.total;
                                                setMonto(suma_total);
                                                return (
                                                    <TableRow hover
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="center">
                                                            {loadingServicio ?
                                                                <CardContent>
                                                                    <Grid container justifyContent="center"
                                                                        alignItems="center" padding={1}>
                                                                        <CircularProgress color="inherit" />
                                                                    </Grid>
                                                                </CardContent>
                                                                :
                                                                obtenerServicioPorId(row.servicio)
                                                            }
                                                        </TableCell>

                                                        <TableCell align="center">

                                                            <Chip icon={<TodayIcon />} label={row.mes_pago ? format(row.mes_pago, "dd 'de' MMMM 'de' yyyy", { locale: es }) : row.mes_pago} />
                                                        </TableCell>
                                                        <TableCell align="center">

                                                            {"$ " + row.sub_total + " MXN"}

                                                        </TableCell>
                                                        <TableCell align="center">

                                                            <BootstrapTooltip key={row.id} title="Descuento" placement="right">
                                                                <Chip icon={<DiscountIcon />} label={"" + row.descuento + " MXN"} />

                                                            </BootstrapTooltip>

                                                        </TableCell>
                                                        <TableCell align="center">

                                                            <BootstrapTooltip key={row.id} title="Total" placement="right">
                                                                <Chip icon={<PaidIcon />} label={row.total + " MXN"} />

                                                            </BootstrapTooltip>

                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            }

                                            )}

                                            <TableRow>
                                                <TableCell rowSpan={3} /> <TableCell rowSpan={3} /> <TableCell rowSpan={3} />


                                                <TableCell colSpan={1} ><b>Subtotal</b></TableCell>
                                                <TableCell align="right">
                                                    $ {suma_subtotal} MXN
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>

                                                <TableCell colSpan={1}><b>Descuento</b></TableCell>
                                                <TableCell align="right">
                                                    $ {suma_descuentos} MXN
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>

                                                <TableCell colSpan={1} ><b>Total</b></TableCell>
                                                <TableCell align="right">
                                                    {suma_total + " MXN"}


                                                </TableCell>
                                            </TableRow>

                                        </TableBody>

                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>

            }
        </>
    )
}

export default Step2Component