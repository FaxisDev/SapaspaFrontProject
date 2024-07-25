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
import DomainIcon from '@mui/icons-material/Domain';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
//Iconos
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function RecibosComponent({ id }) {

    const { data, loading } = useFetch("api/recibos?contribuyente=" + id, {
        method: "GET",
    });

    const columns = [
        { id: "id_recibo", label: "ID de recibo", align: "center" },
        { id: "id_propiedad", label: "ID de propiedad", align: "center" },
        { id: "ubicacion", label: "Fecha de recibo", align: "center" },
        { id: "opciones", label: "Opciones", align: "center" },
    ];

    const handleOnClickDescargarPDF = (id_recibo, id_contribuyente) => {
        window.open("http://127.0.0.1:8000/pdf/recibo/" + id_recibo + "/" + id_contribuyente + "/", '_blank');
    };

    return (
        <Card padding={2} elevation={0}>
            {loading ? (
                <>
                    <CardContent>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            padding={1}
                        >
                            <CircularProgress color="inherit" />
                        </Grid>
                    </CardContent>
                </>
            ) : (
                <>
                    {data.length === 0 ? (
                        <CardContent>
                            <Alert severity="warning">
                                <AlertTitle>¡Sin Recibos! </AlertTitle>
                                Si tienes pagos generados, aqui apareceran para poder ser descargados.
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
                                    {data.map((row, index) => (
                                        <TableRow
                                            hover
                                            key={index}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell align="center">
                                                <Chip
                                                    variant="outlined"
                                                    color="warning"
                                                    sx={{ borderRadius: "4px" }}
                                                    label={row.id}
                                                    icon={<ReceiptIcon />}
                                                />
                                            </TableCell>

                                            <TableCell align="center" component="th" scope="row">

                                                <Chip
                                                    variant="outlined"
                                                    color="primary"
                                                    sx={{ borderRadius: "4px" }}
                                                    label={row.propiedad}
                                                    icon={<DomainIcon />}
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Chip icon={<CalendarTodayIcon />} label={row.fecha_creacion ? format(row.fecha_creacion, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: es }) : row.fecha_creacion} />
                                            </TableCell>
                                            <TableCell align="center">
                                                <BootstrapTooltip
                                                    key={row.id}
                                                    title={"Descargar recibo PDF"}
                                                    placement="right"
                                                >
                                                    <Button
                                                        key={row.id}
                                                        variant="outlined"
                                                        color="error"
                                                        startIcon={<PictureAsPdfIcon />}
                                                        onClick={() =>
                                                            handleOnClickDescargarPDF(row.id, id)
                                                        }
                                                    >
                                                        Descargar
                                                    </Button>
                                                </BootstrapTooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </>
            )}
        </Card>
    );
}
