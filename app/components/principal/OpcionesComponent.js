import { Button, Container, Grid } from "@mui/material"
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { useRouter } from "next/navigation";


function OpcionesComponent() {
    const router = useRouter();


    return (

        <Container>
            <Grid container spacing={1} alignContent={"center"} alignItems={"center"} alignSelf={"center"} mb={2}>

                <Grid xs={12} item md={4}>

                    <Button
                        onClick={() => {
                            router.push('/buscar');
                        }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        fullWidth
                        size="large"
                        className="boton-seleccionar-red animate__animated animate__zoomIn animate__delay-1s"
                        color="inherit"
                        startIcon={<RequestQuoteIcon />}
                    >
                        Pagar en linea

                    </Button>

                </Grid>
                <Grid xs={12} item md={4}>
                    <Button
                        onClick={() => {
                            router.push('/agendar-cita');
                        }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        fullWidth
                        size="large"
                        className="boton-seleccionar-yellow animate__animated animate__zoomIn animate__delay-1s"
                        color="inherit"
                        startIcon={<InsertInvitationIcon />}
                    >
                        Agendar Cita

                    </Button>

                </Grid>
                <Grid xs={12} item md={4}>

                    <Button
                        onClick={() => {
                            router.push('/acerca');
                        }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        fullWidth
                        size="large"
                        className="boton-seleccionar-green animate__animated animate__zoomIn animate__delay-1s"
                        color="inherit"
                        startIcon={<PsychologyAltIcon />}
                    >
                        ¿Quienes somos?

                    </Button>
                </Grid>

            </Grid>

        </Container >
    )
}

export default OpcionesComponent