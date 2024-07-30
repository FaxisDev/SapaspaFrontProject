'use client'

import { useState, useEffect } from 'react';
import { Box, CircularProgress, Container, Grid, Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Alert, DialogContentText, InputAdornment, OutlinedInput, TextField, Input, FormControl, InputLabel } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useFormData from "../hooks/useFormData";

function Page() {
    const [formularioData, setFormularioData] = useFormData({
        buscar: '',
    });

    const [loading, setLoading] = useState(true);
    const [preguntasFrecuentes, setPreguntasFrecuentes] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    // Función para hacer la solicitud a la API usando fetch().then()
    const fetchPreguntasFrecuentes = (query = '') => {
        setLoading(true);
        fetch(`http://127.0.0.1:8000/api/preguntas-frecuentes/?pregunta=${query}&descripcion=${query}`)
            .then(response => response.json())
            .then(data => {
                setPreguntasFrecuentes(data); // Ajusta según la estructura de la respuesta
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Efecto para cargar toda la lista al montar el componente
    useEffect(() => {
        fetchPreguntasFrecuentes(); // Llama a la API sin filtro inicial
    }, []);

    // Efecto para buscar cuando el campo 'buscar' cambia
    useEffect(() => {
        if (formularioData.buscar.trim() !== '') {
            fetchPreguntasFrecuentes(formularioData.buscar);
        } else {
            // Si no hay término de búsqueda, muestra toda la lista
            fetchPreguntasFrecuentes();
        }
    }, [formularioData.buscar]);

    const handleOpenDialog = (title, content) => {
        setDialogTitle(title);
        setDialogContent(content);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const renderDescription = (description, title) => {
        const truncatedDescription = description.length > 300 ? description.substring(0, 300) + '...' : description;
        return (
            <>
                <Typography dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
                {description.length > 300 && (
                    <Button onClick={() => handleOpenDialog(title, description)} variant="outlined" color="primary">Ver más</Button>
                )}
            </>
        );
    };

    return (
        <Container>
            <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box>
                                <TextField
                                    id='buscar'
                                    name='buscar'
                                    label="Buscar"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: <SearchIcon />,
                                    }}
                                    variant='outlined'
                                    value={formularioData.buscar}
                                    onChange={setFormularioData}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Box>
                        {loading ? (
                            <Box>
                                <Grid container justifyContent="center" alignItems="center" padding={1}>
                                    <CircularProgress color="inherit" />
                                </Grid>
                            </Box>
                        ) : (
                            <Grid container spacing={2}>
                                {preguntasFrecuentes.length > 0 ? (
                                    preguntasFrecuentes.map((item) => (
                                        <Grid item xs={12} key={item.id}>
                                            <Card>
                                                <CardContent>
                                                    <Typography variant="h6">{item.pregunta}</Typography>
                                                    {renderDescription(item.descripcion, item.pregunta)}
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                ) : (
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Alert severity="warning">No se encontraron resultados.</Alert>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )}
                            </Grid>
                        )}
                    </Box>
                </Grid>
            </Grid>

            {/* Dialog para ver descripción completa */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">
                    {dialogTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>

                        <span dangerouslySetInnerHTML={{ __html: dialogContent }} />

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Cerrar</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Page;
