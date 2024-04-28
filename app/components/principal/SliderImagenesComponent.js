'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


import { Card, CardMedia, Container, Grid, MobileStepper } from '@mui/material';

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            '/img/visual/ejemplo_6.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            '/img/visual/ejemplo_11.jpg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            '/img/visual/ejemplo_4.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            '/img/visual/ejemplo_8.jpg',
    },
];

export default function SliderImagenesComponent() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;


    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        }, 5000); // Cambia de índice cada 5 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []);



    return (
        <Container>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12}>

                    <Card>
                        <Box>


                            <CardMedia
                                title="Cuidado del agua"

                                component="img"
                                height="410"
                                image={images[activeStep].imgPath}
                                alt={images[activeStep].label}
                                className="animate__animated animate__fadeIn  animate__delay-1s"
                            />

                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}

                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Siguiente
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Atras
                                    </Button>
                                }
                            />
                        </Box>
                    </Card>


                </Grid>
            </Grid>

        </Container>
    );
}
