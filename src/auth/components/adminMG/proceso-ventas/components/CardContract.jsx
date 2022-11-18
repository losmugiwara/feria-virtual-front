import { Button, Card, CardActions, CardContent, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CardContract = ({contract}) => {

    const navigate = useNavigate();

    const startDate = new Date(contract.startDate);

    const onClickContractDetail = () => {
        navigate('./detalle/' + contract.id);
    };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Estado de contrado: <b>{contract.contractValidity}</b>
        </Typography>
        <Typography variant="h5" component="div">
            {contract.sale.producer.businessName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Fecha de creacion: <b>{startDate.toLocaleDateString()}</b>
          <br />
          Fecha de termino: <b>{startDate.toLocaleDateString()}</b>
        </Typography>
        <Typography variant="body2">
          Observacion: 
          <br />
            {contract.sale.requestSale.shippingAddress}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClickContractDetail} size="small">Ir a contrato</Button>
      </CardActions>
    </Card>
  )
}
