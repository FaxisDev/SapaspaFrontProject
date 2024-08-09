"use client";

import {
    Alert,
    AlertTitle,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { BootstrapTooltip } from "../layout/BootstrapTooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DomainIcon from '@mui/icons-material/Domain';
import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';

import { useRouter } from "next/navigation";
import { PagoContext } from "../../context/PagoContext";
import { useContext } from "react";

export default function PropiedadesComponent({ id }) {
    const router = useRouter();
    const { seleccionarPropiedad } = useContext(PagoContext);
    const { data, loading } = useFetch("api/propiedades/?contribuyente=" + id, { method: "GET" });
    const { data: dataTipoPropiedad, loading: loadingTipoPropiedad } = useFetch("api/tipo-propiedades", { method: "GET" });

    const obtenerTipoPropiedadPorId = (id) => {
        return !dataTipoPropiedad
            ? "Indefinido"
            : dataTipoPropiedad.find((tipo) => tipo.id === id)?.tipo || "Indefinido";
    };

    const columns = [
        { id: "id", label: "ID", align: "center" },
        { id: "tipo_propiedad", label: "Tipo de propiedad", align: "center" },
        { id: "ubicacion", label: "Ubicacion", align: "center" },
        { id: "estatus", label: "Estatus", align: "center" },
        { id: "opciones", label: "Opciones", align: "center" },
    ];

    const statusMap = {
        'Al día': { color: '#6ABF9B', icon: <CheckCircleIcon /> },
        'Pendiente': { color: '#d77d57', icon: <WarningIcon /> },
        'Atrasado': { color: '#CC5649', icon: <DangerousIcon /> }
    };

    const handleOnClickSelecionarPropiedad = (id) => {
        seleccionarPropiedad(id);
        router.push("/pago");
    };

    return (
        <Card padding={2} elevation={0}>
            {loading ? (
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" padding={1}>
                        <CircularProgress color="inherit" />
                    </Grid>
                </CardContent>
            ) : data.length === 0 ? (
                <CardContent>
                    <Alert severity="warning">
                        <AlertTitle>Registros de Propiedad no Encontrado</AlertTitle>
                        No se ha encontrado registro de propiedad asociado a este contribuyente.
                        Por favor, acércate a SAPASPA para completar el registro y los pagos correspondientes.
                    </Alert>
                </CardContent>
            ) : (
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => {
                                const status = statusMap[row.info_pago.estatus] || { color: '#000', icon: null };
                                return (
                                    <TableRow
                                        hover
                                        key={index}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell align="center">
                                            <Chip
                                                variant="outlined"
                                                color="primary"
                                                sx={{ borderRadius: "4px" }}
                                                label={row.id}
                                                icon={<DomainIcon />}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            {loadingTipoPropiedad ? (
                                                <CardContent>
                                                    <Grid container justifyContent="center" alignItems="center" padding={1}>
                                                        <CircularProgress color="inherit" />
                                                    </Grid>
                                                </CardContent>
                                            ) : (
                                                obtenerTipoPropiedadPorId(row.contribuyente)
                                            )}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {row.entre_calles}
                                        </TableCell>
                                        <TableCell align="center">
                                            <BootstrapTooltip title={`Última fecha de pago: ${row.info_pago.fecha_ultimo_pago}`} placement="top">

                                                {status.icon && (
                                                    <Chip
                                                        sx={{ borderRadius: "4px", backgroundColor: status.color }}
                                                        color="primary"
                                                        icon={status.icon}
                                                        label={row.info_pago.estatus}
                                                    />
                                                )}
                                            </BootstrapTooltip>
                                        </TableCell>
                                        <TableCell align="center">
                                            <BootstrapTooltip title="Pagar servicio de agua" placement="right">
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={() => handleOnClickSelecionarPropiedad(row.id)}
                                                >
                                                    Pagar
                                                </Button>
                                            </BootstrapTooltip>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Card>
    );
}
