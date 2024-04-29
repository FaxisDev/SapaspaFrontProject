import './estilos-miztli.css'
import 'animate.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles';
import { ContribuyenteProvider } from './context/ContribuyenteContext';
import theme from './theme';

import Image from 'next/image';
import { Button, Hidden } from '@mui/material';


import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import { BootstrapTooltip } from "./components/layout/BootstrapTooltip";

import Footer from './components/layout/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Sapaspa',
    description: 'Agua segura, pago fácil para todos.',
}


export default function RootLayout({ children }) {

    return (

        <html lang="en">
            <body>

                <ContribuyenteProvider>

                    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <AppBar className='barra-menu'>
                                <Toolbar>
                                    <Image
                                        src="/img/logo_complete.svg"
                                        width={156}
                                        height={72}
                                        alt="Sapaspa"
                                        priority={true}
                                        sx={{ flexGrow: 1 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                    </Box>

                                    <BootstrapTooltip title="Principal">

                                        <Link href="/" passHref>

                                            <Button contained="true" className='boton-menu'><HouseRoundedIcon /><Hidden mdDown>Principal</Hidden></Button>
                                        </Link>
                                    </BootstrapTooltip>


                                    <BootstrapTooltip title="Pagar En Linea">
                                        <Link href="/buscar" passHref>

                                            <Button contained="true" className='boton-menu'><ReceiptIcon /><Hidden mdDown>Pagar En Linea</Hidden></Button>
                                        </Link>
                                    </BootstrapTooltip>
                                    <BootstrapTooltip title="Preguntas Frencuentes">

                                        <Link href="/preguntas-frecuentes" passHref>

                                            <Button contained="true" className='boton-menu'><ContactSupportIcon /> <Hidden mdDown>Preguntas Frencuentes</Hidden></Button>

                                        </Link>
                                    </BootstrapTooltip>
                                </Toolbar>
                            </AppBar>

                            <Toolbar id="back-to-top-anchor" />


                            <Box sx={{ my: 3 }}>
                                {children}
                            </Box>

                            <Footer />

                        </ThemeProvider>

                    </AppRouterCacheProvider>

                </ContribuyenteProvider>

            </body>

        </html>


    );
}
