import React from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Box } from '@mui/material';

const PayPalButtonComponent = ({monto}) => {
    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: monto // Monto a cobrar
                        }
                    }]
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    // Aquí puedes manejar la respuesta de la transacción
                });
            }}
        />
    );
};

export default function Step3Component({id, monto}) {
  return (
    <Box>
        <PayPalButtonComponent monto={monto} />
    </Box>
  )
}
