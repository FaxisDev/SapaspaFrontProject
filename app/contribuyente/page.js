'use client'

import { useContext, useEffect, useState } from "react";
import { ContribuyenteContext } from "../context/ContribuyenteContext";
import { Box, Card, Container, Grid, Tab, Tabs } from "@mui/material";
import { PerfilComponent } from "../components/contribuyente/PerfilComponent";
import { DetallesComponent } from "../components/contribuyente/DetallesComponent";
import PropiedadesComponent from "../components/contribuyente/PropiedadesComponent";
import WbShadeIcon from '@mui/icons-material/WbShade';
import ReceiptIcon from '@mui/icons-material/Receipt';




const Page = () => {

    const { contribuyenteSeleccionado } = useContext(ContribuyenteContext);

    const [seleccionarTab, setSeleccionarTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSeleccionarTab(newValue);
    };


    useEffect(() => {
        if (contribuyenteSeleccionado === null) {
            router.push('/buscar');
        }

    }, []);


    return (
        <Container>

            <Grid container spacing={2} >
                <Grid item xs={12}>

                    <PerfilComponent id={contribuyenteSeleccionado} />
                </Grid>
            </Grid>

            <Grid mt={1} container spacing={2} >
                <Grid item xs={12} md={4}>
                    <DetallesComponent id={contribuyenteSeleccionado} />
                </Grid>

                <Grid item xs={12} md={8}>

                    <Card padding={2} elevation={6}>

                        <Box sx={{ bgcolor: 'background.paper' }}>
                            <Tabs value={seleccionarTab} onChange={handleChange} centered variant="fullWidth">
                                <Tab label="Propiedades" icon={<WbShadeIcon />} />
                                <Tab label="Últimos Recibos" icon={<ReceiptIcon />} />
                            </Tabs>

                            <TabPanel value={seleccionarTab} index={0}>
                                <PropiedadesComponent id={contribuyenteSeleccionado} />
                            </TabPanel>
                            <TabPanel value={seleccionarTab} index={1}>
                                Item Two
                            </TabPanel>

                        </Box>
                    </Card>

                </Grid>

            </Grid>
        </Container>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}


export default Page;
