import { useState, useEffect } from 'react';

// Hook personalizado para realizar solicitudes HTTP
const useFetch = (url, options = {}, jsonData = null) => {
    // Estados para almacenar los datos, el estado de carga y los errores
    const [data, setData] = useState(null); // Almacena los datos obtenidos de la solicitud
    const [loading, setLoading] = useState(true); // Indica si la solicitud está en curso
    const [error, setError] = useState(null); // Almacena cualquier error que ocurra durante la solicitud

    // Efecto para ejecutar la lógica de la solicitud cuando cambia jsonData
    useEffect(() => {
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
                    setData(responseData);
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
    }, [jsonData]); // Dependencia que activa el efecto cada vez que cambia jsonData

    // Devolver los datos, el estado de carga y los errores para que el componente los pueda utilizar
    return { data, loading, error };
};

export default useFetch;
