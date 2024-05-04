'use client'

import  { createContext, useState } from 'react';

const ContribuyenteContext = createContext();

const ContribuyenteProvider = ({ children }) => {

    const [infoContribuyente, setInfoContribuyente] = useState(null);

    const [contribuyenteSeleccionado, setContribuyenteSeleccionado] = useState(() => {
        const storedContribuyente = typeof window !== 'undefined' ? window.localStorage.getItem('id_contribuyente') : null;

        // Recuperar el contribuyente seleccionado del localStorage al cargar el componente
       return storedContribuyente ? JSON.parse(storedContribuyente) : null;
    });

    const seleccionarContribuyente = (contribuyente) => {
        // Almacenar el contribuyente seleccionado en localStorage al usar la función seleccionarContribuyente
        localStorage.setItem('id_contribuyente', JSON.stringify(contribuyente));
        setContribuyenteSeleccionado(contribuyente);
    };

    const guardarInfoContribuyente = (info) => {
        setInfoContribuyente(info);
    }

    const limpiarContribuyenteSeleccionado = () => {
        localStorage.removeItem('id_contribuyente');
        setContribuyenteSeleccionado(null);
        setInfoContribuyente(null);
    };

    return (
        <ContribuyenteContext.Provider value={{ contribuyenteSeleccionado, seleccionarContribuyente, limpiarContribuyenteSeleccionado, infoContribuyente, guardarInfoContribuyente }}>
            {children}
        </ContribuyenteContext.Provider>
    );
};

export { ContribuyenteProvider, ContribuyenteContext };
