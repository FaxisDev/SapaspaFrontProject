'use client'

import { useContext } from 'react';
import { ContribuyenteContext } from '../../context/ContribuyenteContext';
import { Button, Card, CardContent, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function page() {
    const { infoContribuyente } = useContext(ContribuyenteContext);

    return (
        <Container>
            <Grid container spacing={2} >

                {!infoContribuyente ?

                    <>

                        <Grid container justifyContent="center"
                            alignItems="center" padding={1}>
                            <Image
                                src="/img/iconos/no_encontrado.svg"
                                width={240}
                                height={164}
                                alt="Sapaspa"
                                sx={{ flexGrow: 1 }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Card padding={2} className="card-red" elevation={4}>
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary" align='center'>
                                        No se encontro ningun registro.
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                    </>

                    :
                    <>

                        <Grid container justifyContent="center"
                            alignItems="center" padding={1}>
                            <Image
                                src="/img/iconos/encontrado.svg"
                                width={240}
                                height={164}
                                alt="Sapaspa"
                                sx={{ flexGrow: 1 }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Card padding={2} className="card-red" elevation={4}>
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary" align='center'>
                                        Se encontraron {infoContribuyente.length} contribuyentes. Por favor, seleccione uno de la lista de resultados para continuar.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={12}>
                            <Card padding={2} elevation={2}>
                                <ResultadosComponent resultados={infoContribuyente} />
                            </Card>
                        </Grid>

                    </>

                }
            </Grid >

        </Container >
    )
}

const ResultadosComponent = ({ resultados }) => {

    const router = useRouter();

    const { seleccionarContribuyente } = useContext(ContribuyenteContext);

    const columns = [
        { id: 'folio', label: 'Folio Unico', align: 'center' },
        { id: 'nombre', label: 'Nombre', align: 'center' },
        { id: 'email', label: 'Email', align: 'center' },
        { id: 'opciones', label: 'Opciones', align: 'center' },
    ];

    const handleOnSelectContribuyente = (id) => {
        seleccionarContribuyente(id);
        router.push('/contribuyente');
    }

    return (

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

                    {resultados.map((row) => (
                        <TableRow hover
                            key={row.nombre}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                {row.folio_unico}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">{row.nombre} {row.apellido_paterno} {row.apellido_materno}</TableCell>
                            <TableCell align="center">{row.correo_electronico}</TableCell>
                            <TableCell align="center">
                                <Button key={row.id} variant="outlined" color="primary" onClick={() => handleOnSelectContribuyente(row.id)}>
                                    Seleccionar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}


                </TableBody>

            </Table>
        </TableContainer>
    );
}
