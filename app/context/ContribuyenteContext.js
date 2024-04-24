'use client'

import { createContext, useState } from 'react';

const ContribuyenteContext = createContext();

const ContribuyenteProvider = ({ children }) => {
    const [contribuyenteSeleccionado, setContribuyenteSeleccionado] = useState(null);

    const [infoContribuyente, setInfoContribuyente] = useState(null);

    const seleccionarContribuyente = (contribuyente) => {
        setContribuyenteSeleccionado(contribuyente);
    };

    const guardarInfoContribuyente = (info) => {
        setInfoContribuyente(info);
    }

    const limpiarContribuyenteSeleccionado = () => {
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
