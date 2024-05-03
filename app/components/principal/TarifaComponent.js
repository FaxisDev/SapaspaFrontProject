'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useRouter } from 'next/navigation';
import { Alert, CardContent, Chip, CircularProgress, Grid } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';


import useFetch from '../../hooks/useFetch';


export default function TarifaComponent() {
    const router = useRouter();

    const { data, loading } = useFetch("api/tarifas", { 'method': 'GET' });

    const columns = [
        { id: 'nombre', label: 'Nombre', align: 'center' },
        { id: 'tarifa', label: 'Tarifa', align: 'center' },
        { id: 'fecha_inicio', label: 'Fecha de Inicio', align: 'center' },
        { id: 'fecha_final', label: 'Fin de Vigencia', align: 'center' },
    ];

    const handleOnSelectContribuyente = (id) => {
        seleccionarContribuyente(id);
        router.push('/contribuyente');
    }

    return (

        <>
            {
                loading ?
                    <>
                        < CardContent >
                            <Grid container justifyContent="center"
                                alignItems="center" padding={1}>
                                <CircularProgress color="inherit" />
                            </Grid>
                        </CardContent >
                    </>
                    :
                    <>

                        {!data ?
                            < CardContent >
                                <Alert severity="warning">

                                    En este momento, no hay tarifas disponibles.
                                </Alert>
                            </CardContent >
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

                                        {data.map((row) => (
                                            <TableRow hover
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center">
                                                    {row.tipo}
                                                </TableCell>
                                                <TableCell align="center" component="th" scope="row">

                                                    <Chip icon={<PaidIcon />} label={row.precio_base + " MXN"} />
                                                        
                                                        
                                                   
                                                </TableCell>
                                                <TableCell align="center">{row.fecha_inicio_vigencia}</TableCell>
                                                <TableCell align="center">
                                                    {row.fecha_fin_vigencia}
                                                </TableCell>
                                            </TableRow>
                                        ))}


                                    </TableBody>

                                </Table>
                            </TableContainer>
                        }

                    </>
            }

        </>

    );
}
