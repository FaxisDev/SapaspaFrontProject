'use client'

import { useContext } from 'react';
import { ContribuyenteContext } from '../../context/ContribuyenteContext';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function page() {
  const { infoContribuyente } = useContext(ContribuyenteContext)

  return (
    <Container>
      <Grid container spacing={2} >

        {!infoContribuyente ?

          <>

            <Grid container justifyContent="center"
              alignItems="center" padding={1}>
              <Image
                src="/img/iconos/no_encontrado.svg"
                width={240}
                height={164}
                alt="Sapaspa"
                sx={{ flexGrow: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Card padding={2} className="card-red" elevation={4}>
                <CardContent>
                  <Typography variant="body1" color="text.secondary" align='center'>
                    No se encontro ningun registro.
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          </>

          :
          <>

            <Grid container justifyContent="center"
              alignItems="center" padding={1}>
              <Image
                src="/img/iconos/encontrado.svg"
                width={240}
                height={164}
                alt="Sapaspa"
                sx={{ flexGrow: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Card padding={2} className="card-red" elevation={4}>
                <CardContent>
                  <Typography variant="body1" color="text.secondary" align='center'>
                    Se encontraron {infoContribuyente.length} contribuyentes. Por favor, seleccione uno de la lista de resultados para continuar.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>


            <Grid item xs={12}>
              <Card padding={2} elevation={2}>
                <ResultadosComponent resultados={infoContribuyente} />
              </Card>
            </Grid>
     
    </>

        }
      </Grid >

    </Container >
  )
}

const ResultadosComponent = ({ resultados }) => {

  return (

    <div>
      dd
    </div>
  );
}
