'use client'

import React, { createContext, useState } from 'react';

const ContribuyenteContext = createContext();

const ContribuyenteProvider = ({ children }) => {
    const [contribuyenteSeleccionado, setContribuyenteSeleccionado] = useState(() => {
        // Recuperar el contribuyente seleccionado del localStorage al cargar el componente
        const storedContribuyente = localStorage.getItem('contribuyenteSeleccionado');
        return storedContribuyente ? JSON.parse(storedContribuyente) : null;
    });
    const [infoContribuyente, setInfoContribuyente] = useState(null);

    const seleccionarContribuyente = (contribuyente) => {
        // Almacenar el contribuyente seleccionado en localStorage al usar la función seleccionarContribuyente
        localStorage.setItem('contribuyenteSeleccionado', JSON.stringify(contribuyente));
        setContribuyenteSeleccionado(contribuyente);
    };

    const guardarInfoContribuyente = (info) => {
        setInfoContribuyente(info);
    }

    const limpiarContribuyenteSeleccionado = () => {
        localStorage.removeItem('contribuyenteSeleccionado');
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
