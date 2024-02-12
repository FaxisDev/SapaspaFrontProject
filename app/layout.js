import { Inter } from 'next/font/google'
import './estilos-miztli.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Image from 'next/image';
import { Button } from '@mui/material';


import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Footer from './components/layout/footer';

export const metadata = {
    title: 'Sapaspa',
    description: 'Agua segura, pago fácil para todos.',
}


export default function RootLayout({ children }) {



    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha en español
    const fechaFormateada = format(fechaActual, "dd 'de' MMMM 'de' yyyy", { locale: es });

    return (

        <html lang="en">
            <body>

                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <AppBar className='barra-menu'>
                            <Toolbar>
                                <Image
                                    src="/img/logo.svg"
                                    width={48}
                                    height={48}
                                    alt="Sapaspa"
                                    sx={{ flexGrow: 1 }}
                                />
                                <Box sx={{ flexGrow: 1 }}>
                                </Box>
                                <Button color="inherit"><HouseRoundedIcon /> Principal</Button>
                                <Button color="inherit"><ReceiptIcon /> Pagar Servicios</Button>
                                <Button color="inherit"><ContactSupportIcon /> Preguntas Frencuentes</Button>
                            </Toolbar>
                        </AppBar>

                        <Toolbar id="back-to-top-anchor" />
                        <Container>

                            <div>
                                {fechaFormateada}
                            </div>
                            <Box sx={{ my: 2 }}>

                                {children}

                            </Box>


                        </Container>

                        <Footer />

                    </ThemeProvider>

                </AppRouterCacheProvider>
            </body>

        </html>


    );
}
