'use client'

import { useContext } from 'react';
import { ContribuyenteContext } from '../../context/ContribuyenteContext';
import { Alert, AlertTitle, Button, Card, Chip, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from 'next/navigation';
import NoDisponibleComponent from '../../components/errors/NoDisponibleComponent';
import { BootstrapTooltip } from '../../components/layout/BootstrapTooltip';

export default function page() {
    const { infoContribuyente } = useContext(ContribuyenteContext);

    return (
        <>

            {!infoContribuyente ?

                <>

                    <NoDisponibleComponent />
                </>

                :
                <>
                    <Container>
                        <Grid container spacing={2} >
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

                                <Card elevation={2} className="animate__animated animate__zoomIn">


                                    <Alert className='alerta-verde' variant="filled" icon={<SearchIcon />}>


                                        <AlertTitle>Se encontraron {infoContribuyente.length} contribuyentes.</AlertTitle>
                                        Por favor, seleccione su perfil de la lista de resultados para continuar.

                                    </Alert>

                                </Card>

                            </Grid>


                            <Grid item xs={12} mt={2}>
                                <Card padding={2} elevation={2}>
                                    <ResultadosComponent resultados={infoContribuyente} />
                                </Card>
                            </Grid>
                        </Grid >

                    </Container >
                </>

            }

        </>

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
                                <Chip icon={<AssignmentIndIcon />} label={row.folio_unico} />

                            </TableCell>
                            <TableCell align="center" component="th" scope="row">{row.nombre} {row.apellido_paterno} {row.apellido_materno}</TableCell>
                            <TableCell align="center">

                                {row.correo_electronico}

                            </TableCell>
                            <TableCell align="center">

                                <BootstrapTooltip key={row.id} title="Seleccionar perfil" placement="right">

                                    <Button key={row.id} variant="outlined" color="primary" onClick={() => handleOnSelectContribuyente(row.id)}>
                                        Seleccionar
                                    </Button>
                                </BootstrapTooltip>
                            </TableCell>
                        </TableRow>
                    ))}


                </TableBody>

            </Table>
        </TableContainer>
    );
}
