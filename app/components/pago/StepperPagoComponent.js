'use client'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle, Card, CardContent, Grid } from '@mui/material';
import { useState } from 'react';
import Step1Component from "../pago/Step1Component";


function StepperPagoComponent() {
    const steps = ['Verificar datos', 'Seleccionar montos', 'Pagar'];
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    
    const id_propiedad = 1;

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

    const handleReset = () => {
        setActiveStep(0);
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
                                    <Typography sx={{ m: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button  onClick={handleReset}>Reset</Button>
                                    </Box>
                                </>
                            ) : (
                                <>

                                    {activeStep === 0 && <Step1Component id={id_propiedad} />}


                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            size={"medium"} variant="outlined" color="warning"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Atras
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />

                                        <Button onClick={handleNext} size={"medium"} variant="outlined" color="primary">
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