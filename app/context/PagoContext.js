'use client'

import { createContext, useState } from 'react';

const PagoContext = createContext();

const PagoProvider = ({ children }) => {

    const [infoStepPago, setInfoStepPago] = useState(null);

    const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);

    const [montoTotal, setMontoTotal] = useState(0);

    const seleccionarPropiedad = (propiedad) => {
        setPropiedadSeleccionada(propiedad);
    };

    const guardarInfoStepPago = (info) => {
        setInfoStepPago(info);
    }

    const limpiarPropiedadSeleccionada = () => {
        setPropiedadSeleccionada(null);
        setInfoStepPago(null);
    };

    return (
        <PagoContext.Provider value={{ propiedadSeleccionada, seleccionarPropiedad, limpiarPropiedadSeleccionada, infoStepPago, guardarInfoStepPago, montoTotal, setMontoTotal }}>
            {children}
        </PagoContext.Provider>
    );
};

export { PagoProvider, PagoContext };
