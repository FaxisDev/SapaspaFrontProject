import React, { useContext, useEffect, useState } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Alert, AlertTitle, Box, Grid } from '@mui/material';
import { PagoContext } from '../../context/PagoContext';

import TransaccionExistosaComponent from './TransaccionExitosaComponent';

export default function Step3Component({ id, setBotonSiguienteBloqueado, setBotonAtrasBloqueado }) {

    const { montoTotal, infoStepPago } = useContext(PagoContext);
    const [transaccionExistosa, setTransaccionExistosa] = useState(false);

    const [datosRecibidos, setDatosRecibidos] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setBotonSiguienteBloqueado(true);
    }, [])


    // Hook personalizado para realizar solicitudes HTTP
    const useFetch = (url, options = {}, jsonData = null) => {


        // Función para realizar la solicitud
        const fetchData = () => {
            // Establecer loading en true para indicar que la solicitud está en curso
            setLoading(true);

            // Construir la URL completa para la solicitud
            let fetchUrl = `http://127.0.0.1:8000/${url}`;
            // Copiar las opciones de solicitud para evitar mutar el objeto original
            let fetchOptions = { ...options };

            // Si el método de solicitud es GET o HEAD, los datos se convierten en parámetros de la URL
            if (options.method === 'GET' || options.method === 'HEAD') {
                if (jsonData) {
                    const queryString = new URLSearchParams(jsonData).toString();
                    fetchUrl += `?${queryString}`;
                }
            } else {
                // Para otros métodos de solicitud, los datos se envían en el cuerpo de la solicitud
                fetchOptions.headers = {
                    'Content-Type': 'application/json',
                    ...options.headers,
                };
                fetchOptions.body = jsonData ? JSON.stringify(jsonData) : undefined;
            }

            // Realizar la solicitud utilizando fetch API
            fetch(fetchUrl, fetchOptions)
                .then(response => {
                    // Verificar si la respuesta es exitosa
                    if (!response.ok) {
                        // Si la respuesta no es exitosa, lanzar un error
                        throw new Error('La respuesta de la red no fue correcta');
                    }
                    // Convertir la respuesta a formato JSON y establecer los datos obtenidos en el estado
                    return response.json();
                })
                .then(responseData => {
                    setDatosRecibidos(responseData);
                    // Establecer loading en false para indicar que la solicitud ha terminado
                    setLoading(false);
                })
                .catch(error => {
                    // Capturar y manejar errores
                    setError(error);
                    // Establecer loading en false para indicar que la solicitud ha terminado
                    setLoading(false);
                });
        };

        // Llamar a fetchData al montar el componente y cada vez que cambie jsonData
        fetchData();



    };



    const generarRecibo = (id, infoStepPago) => {


        useFetch('api/generar-recibo', { 'method': 'POST' }, { "id_propiedad": id, "pagos": infoStepPago });

    };


    const PayPalButtonComponent = ({ montoTotal, id, infoStepPago }) => {

        return (
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: montoTotal // Monto a cobrar
                            }
                        }]
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {

                        // Aquí puedes manejar la respuesta de la transacción
                        generarRecibo(id, infoStepPago);
                        setBotonAtrasBloqueado(true);
                        setBotonSiguienteBloqueado(false);
                        setTransaccionExistosa(true);
                    });
                }}
            />
        );
    };

    return (
        <Box>
            {
                !transaccionExistosa ? <PayPalButtonComponent montoTotal={montoTotal} id={id} infoStepPago={infoStepPago} /> : (<TransaccionExistosaComponent loading={loading} datosRecibidos={datosRecibidos} />)
            }
        </Box>
    )
}
