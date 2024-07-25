'use client'

import { useContext, useEffect, useState } from "react";
import { ContribuyenteContext } from "../context/ContribuyenteContext";
import { Box, Card, Container, Grid, Tab, Tabs } from "@mui/material";
import { PerfilComponent } from "../components/contribuyente/PerfilComponent";
import { DetallesComponent } from "../components/contribuyente/DetallesComponent";
import RecibosComponent from "../components/contribuyente/RecibosComponent";

import PropiedadesComponent from "../components/contribuyente/PropiedadesComponent";
import WbShadeIcon from '@mui/icons-material/WbShade';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NoDisponibleComponent from "../components/errors/NoDisponibleComponent";
import ReloadingComponent from "../components/layout/ReloadingComponent";
import TabPanel from "../components/layout/TabPanel";

const Page = () => {
    const { contribuyenteSeleccionado } = useContext(ContribuyenteContext);

    const [seleccionarTab, setSeleccionarTab] = useState(0);
    const [mounted, setMounted] = useState(false);

    const handleChange = (event, newValue) => {
        setSeleccionarTab(newValue);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (<ReloadingComponent />);

    return (


        <>
            {

                !contribuyenteSeleccionado ?
                    <NoDisponibleComponent /> :

                    <Box>
                        <PerfilComponent id={contribuyenteSeleccionado} />
                        <Container>

                            <Grid mt={1} container spacing={2} >
                                <Grid item xs={12} md={4}>
                                    <DetallesComponent id={contribuyenteSeleccionado} />
                                </Grid>

                                <Grid item xs={12} md={8}>

                                    <Card padding={2} elevation={1}>

                                        <Box sx={{ bgcolor: 'background.paper' }}>
                                            <Tabs value={seleccionarTab} onChange={handleChange} centered variant="fullWidth">
                                                <Tab label="Propiedades" icon={<WbShadeIcon />} />
                                                <Tab label="Últimos Recibos" icon={<ReceiptIcon />} />
                                            </Tabs>

                                            <TabPanel value={seleccionarTab} index={0}>
                                                <PropiedadesComponent id={contribuyenteSeleccionado} />
                                            </TabPanel>
                                            <TabPanel value={seleccionarTab} index={1}>
                                                <RecibosComponent id={contribuyenteSeleccionado} />
                                            </TabPanel>

                                        </Box>
                                    </Card>

                                </Grid>

                            </Grid>
                        </Container>
                    </Box>

            }
        </>



    );
}




export default Page;
