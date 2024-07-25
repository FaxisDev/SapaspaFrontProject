// src/theme.ts
'use client';
import { Asap_Condensed } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const fuente = Asap_Condensed({
  weight: [ '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: fuente.style.fontFamily,
  },
});

export default theme;
