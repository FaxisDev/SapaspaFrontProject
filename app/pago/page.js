'use client'

import { useContext, useEffect, useState } from "react";
import ReloadingComponent from "../components/layout/ReloadingComponent";
import { PagoContext } from "../context/PagoContext";
import { Container, Grid } from "@mui/material";
import NoDisponibleComponent from "../components/errors/NoDisponibleComponent";
import StepperPagoComponent from "../components/pago/StepperPagoComponent";

import InfoPagoCardComponent from "../components/pago/InfoPagoCardComponent";

function page() {

    const [mounted, setMounted] = useState(false);

    const { propiedadSeleccionada } = useContext(PagoContext);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (<ReloadingComponent />);

    return (
        <>
            {!propiedadSeleccionada ?
                <NoDisponibleComponent />
                :
                <Container>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={4}>
                            <InfoPagoCardComponent />

                        </Grid>
                        <Grid item xs={12} md={8}>

                            <StepperPagoComponent id_propiedad={propiedadSeleccionada} />
                        </Grid>
                    </Grid>
                </Container>
            }

        </>
    )
}

export default page