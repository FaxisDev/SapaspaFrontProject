import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"

function InfoPagoCardComponent() {
    return (



        <Card padding={2} elevation={2}>
            <CardMedia
                title="Pago en linea"

                component="img"
                height="110"
                image="/img/visual/origami/pago.jpg"
                alt="Pago en linea"

            />
            <CardContent>
                <Typography gutterBottom variant="subtitle2" padding={2} align="center">
                    ¡Paga en línea en 3 simples pasos!
                </Typography>
                <Divider />
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="subtitle2" padding={1}>
                    Verificar Datos:
                </Typography>
                <Typography variant="body1" color="text.secondary" padding={2}>
                    Antes de continuar, asegúrate de que todos tus datos estén correctos. Esto garantizará que tu pago se procese sin problemas y recibas la confirmación rápidamente.
                </Typography>
                <Typography gutterBottom variant="subtitle2" padding={1}>
                    Seleccionar Monto:
                </Typography>
                <Typography variant="body1" color="text.secondary" padding={2}>

                    Elige el monto que deseas pagar. Ya sea una cantidad fija o personalizada, aquí tienes la flexibilidad para seleccionar lo que más te convenga.
                </Typography>
                <Typography gutterBottom variant="subtitle2" padding={1}>
                    Pagar:
                </Typography>
                <Typography variant="body1" color="text.secondary" padding={2} >
                    Llegó el momento de finalizar tu transacción. Simplemente haz clic en el botón 'Pagar' y serás dirigido a nuestro sistema seguro de pago en línea. ¡Es rápido, fácil y seguro!
                </Typography>

            </CardContent>

        </Card>


    )
}

export default InfoPagoCardComponent