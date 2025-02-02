'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardMedia, Container, Grid, MobileStepper } from '@mui/material';
import { useState, useEffect } from 'react';
import 'animate.css';

const images = [
    
    { label: '', imgPath: '/img/visual/7_n.jpg' },
    { label: 'edcee', imgPath: '/img/visual/ejemplo_4.jpg' },
    { label: '', imgPath: '/img/visual/5.jpg' },
    { label: '', imgPath: '/img/visual/ejemplo_8.jpg' },
    { label: '', imgPath: '/img/visual/ejemplo_9.jpg' },
    { label: '', imgPath: '/img/visual/ejemplo_10.jpg' },
    
    

];

export default function SliderImagenesComponent() {
    const [activeStep, setActiveStep] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const maxSteps = images.length;

    // Función para cambiar de imagen
    const changeImage = (nextStep) => {
        setAnimationClass(''); // Eliminar clase de animación actual
        setTimeout(() => {
            setAnimationClass('animate__slow animate__fadeIn'); // Reaplicar clase de animación
            setActiveStep(nextStep);
        }, 0); // Reiniciar la animación
    };

    const handleNext = () => {
        changeImage((activeStep + 1) % maxSteps);
    };

    const handleBack = () => {
        changeImage((activeStep - 1 + maxSteps) % maxSteps);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            changeImage((activeStep + 1) % maxSteps);
        }, 5000); // Cambia de índice cada 5 segundos
  
        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, [activeStep]);

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
                                className={`animate__animated ${animationClass}`}
                            />

                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                    >
                                        Siguiente
                                        <KeyboardArrowRight />
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack}>
                                        <KeyboardArrowLeft />
                                        Atrás
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
