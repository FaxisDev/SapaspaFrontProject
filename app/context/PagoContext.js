'use client'

import  { createContext, useState } from 'react';

const PagoContext = createContext();

const PagoProvider = ({ children }) => {

    const [infoStepPago, setInfoStepPago] = useState(null);

    const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(() => {
        const storedPropiedad = typeof window !== 'undefined' ? window.localStorage.getItem('id_propiedad') : null;

        // Recuperar el propiedad seleccionado del localStorage al cargar el componente
       return storedPropiedad ? JSON.parse(storedPropiedad) : null;
    });

    const seleccionarPropiedad = (propiedad) => {
        // Almacenar el propiedad seleccionado en localStorage al usar la función seleccionarPropiedad
        localStorage.setItem('id_propiedad', JSON.stringify(propiedad));
        setPropiedadSeleccionada(propiedad);
    };

    const guardarInfoStepPago = (info) => {
        setInfoStepPago(info);
    }

    const limpiarPropiedadSeleccionada = () => {
        localStorage.removeItem('id_propiedad');
        setPropiedadSeleccionada(null);
        setInfoStepPago(null);
    };

    return (
        <PagoContext.Provider value={{ propiedadSeleccionada, seleccionarPropiedad, limpiarPropiedadSeleccionada, infoStepPago, guardarInfoStepPago }}>
            {children}
        </PagoContext.Provider>
    );
};

export { PagoProvider, PagoContext };
