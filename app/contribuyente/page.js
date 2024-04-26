'use client'

import { useContext, useEffect } from "react";
import { ContribuyenteContext } from "../context/ContribuyenteContext";
import { Container, Grid } from "@mui/material";
import { PerfilComponent } from "../components/contribuyente/PerfilComponent";


const Page = () => {

    const { contribuyenteSeleccionado } = useContext(ContribuyenteContext);

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
        </Container>
    );
}


export default Page;
