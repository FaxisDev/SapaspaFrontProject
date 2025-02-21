'use client'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import Step1Component from "../pago/Step1Component";
import Step2Component from "../pago/Step2Component";
import Step3Component from "../pago/Step3Component";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ReloadingComponent from '../layout/ReloadingComponent';

import { useRouter } from 'next/navigation';

const paypalData = {
    "client-id": "AXZrVfrjGWMXdsTCV55EUOqLnQY6r_RMyshUrNNlvIV4Mq4JZm8D6jyzLHkq8BezfCFVNhHkT8MaKwmn", // 'sb' carga el entorno de sandbox
    currency: "MXN",
    locale: "es_MX", // Configura el idioma a español y la región a México
    intent: "capture",
 
};

function StepperPagoComponent({ id_propiedad }) {

    const router = useRouter();

    const steps = ['Verificar datos', 'Seleccionar montos', 'Pagar'];
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const [botonSiguienteBloqueado, setBotonSiguienteBloqueado] = useState(false);
    const [botonAtrasBloqueado, setBotonAtrasBloqueado] = useState(false);

    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (<ReloadingComponent />);


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleOnContribuyente = () => {
        router.push('/contribuyente');
    };

    const handleOnPrincipal = () => {
        router.push('/');
    };

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>

                <Card elevation={4} className="card-darkblue animate__animated animate__flipInX">
                    <CardContent>

                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                return (
                                    <Step key={index}>
                                        <StepLabel>
                                            <span style={{ color: 'white' }}>

                                                {label}
                                            </span>
                                        </StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <CardContent>

                        <Box sx={{ width: '100%' }}>

                            {activeStep === steps.length ? (
                                <>
                                    <Box>
                                        <Typography align='center' gutterBottom variant="subtitle2" padding={1}>¡Todo está al día! Aquí tienes algunas opciones para explorar:</Typography>

                                        <Stack spacing={1} >

                                            <Button fullWidth onClick={handleOnContribuyente} size={"medium"} variant="outlined" color="primary">
                                                Ir al perfil de contribuyente
                                            </Button>
                                            <Button fullWidth onClick={handleOnPrincipal} size={"medium"} variant="outlined" color="warning">
                                                Ir a la pagina principal
                                            </Button>
                                        </Stack>


                                    </Box>
                                </>
                            ) : (
                                <>

                                    {activeStep === 0 && <Step1Component id={id_propiedad} />}
                                    {activeStep === 1 && <Step2Component id={id_propiedad} setBotonSiguienteBloqueado={setBotonSiguienteBloqueado} />}
                                    {activeStep === 2 &&
                                        (<PayPalScriptProvider options={paypalData}>
                                            <Step3Component id={id_propiedad} setBotonAtrasBloqueado={setBotonAtrasBloqueado} setBotonSiguienteBloqueado={setBotonSiguienteBloqueado} />
                                        </PayPalScriptProvider>)}

                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            size={"medium"} variant="outlined" color="warning"
                                            disabled={activeStep === 0 || botonAtrasBloqueado}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Atras
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />

                                        <Button onClick={handleNext} size={"medium"} variant="outlined" color="primary" disabled={botonSiguienteBloqueado}>
                                            {activeStep === steps.length - 1 ? 'Finalizar proceso' : 'Siguiente'}
                                        </Button>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </CardContent>


                </Card>
            </Grid>
        </Grid>


    );
}

export default StepperPagoComponent