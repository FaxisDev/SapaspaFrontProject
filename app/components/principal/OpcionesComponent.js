import { Button, Container, Grid } from "@mui/material"
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { useRouter } from "next/navigation";
import { BootstrapTooltip } from "../layout/BootstrapTooltip";


function OpcionesComponent() {
    const router = useRouter();


    return (

        <Container>
            <Grid container spacing={1} alignContent={"center"} alignItems={"center"} alignSelf={"center"} mb={2}>

                <Grid xs={12} item md={6}>

                    <BootstrapTooltip title="Ir a Pagar en Linea" placement="top">

                        <Button
                            onClick={() => {
                                router.push('/buscar');
                            }}
                            component="label"
                            role={undefined}
                            variant="outlined"
                            fullWidth
                            size="large"
                            className="boton-seleccionar-x animate__animated animate__zoomIn animate__delay-1s"
                            color="inherit"
                            startIcon={<RequestQuoteIcon />}
                        >
                            Pagar en Linea

                        </Button>
                    </BootstrapTooltip>


                </Grid>
{/*                 <Grid xs={12} item md={4}>

                    <BootstrapTooltip title="Disponible en el futuro" placement="top">

                        <Button
                            onClick={() => {
                                router.push('/agendar-cita');
                            }}
                            component="label"
                            role={undefined}
                            variant="outlined"
                            fullWidth
                            size="large"
                            className="boton-seleccionar-x animate__animated animate__zoomIn animate__delay-1s"
                            color="inherit"
                            startIcon={<InsertInvitationIcon />}
                            disabled={true}
                        >
                            Agendar Cita
                        </Button>
                    </BootstrapTooltip>

                </Grid> */}
                <Grid xs={12} item md={6}>
                    <BootstrapTooltip title="Ir a ¿Quienes somos?" placement="top">

                        <Button
                            onClick={() => {
                                router.push('/acerca');
                            }}
                            component="label"
                            role={undefined}
                            variant="outlined"
                            fullWidth
                            size="large"
                            className="boton-seleccionar-x animate__animated animate__zoomIn animate__delay-1s"
                            color="inherit"
                            startIcon={<PsychologyAltIcon />}
                        >
                            ¿Quienes somos?

                        </Button>
                    </BootstrapTooltip>
                </Grid>

            </Grid>

        </Container >
    )
}

export default OpcionesComponent