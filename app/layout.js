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

                <ContribuyenteProvider >

                    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <AppBar className='barra-menu'>
                                <Toolbar>
                                    <Image
                                        src="/img/logo_complete.svg"
                                        width={144}
                                        height={64}
                                        alt="Sapaspa"
                                        sx={{ flexGrow: 1 }}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                    </Box>
                                    <Link href="/" passHref>

                                        <Button contained="true" className='boton-menu'><HouseRoundedIcon /><Hidden smDown>Principal</Hidden></Button>
                                    </Link>

                                    <Link href="/buscar" passHref>

                                        <Button contained="true" className='boton-menu'><ReceiptIcon /><Hidden smDown>Pagar Servicios</Hidden></Button>
                                    </Link>
                                    <Link href="/preguntas-frecuentes" passHref>

                                        <Button contained="true" className='boton-menu'><ContactSupportIcon /> <Hidden smDown>Preguntas Frencuentes</Hidden></Button>

                                    </Link>
                                </Toolbar>
                            </AppBar>

                            <Toolbar id="back-to-top-anchor" />


                            <Box sx={{ my: 2 }}>
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
