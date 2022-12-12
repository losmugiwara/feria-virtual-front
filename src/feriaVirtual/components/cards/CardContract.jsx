import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardContract = ({ contract, sale }) => {

  const navigate = useNavigate();

  const onClickDetailContract = () => {

    navigate(`./detalle-contrato/${contract?.id}`);

  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Id Contrato: {contract?.id}</b>
          <br />

          {
            (sale.saleStatusEnum == "WAREHOUSE") && <p>Estado actual del pedido: <b>En bodega</b></p>
          }
          {
            (sale.saleStatusEnum == "PACKAGE") && <p>Estado actual del pedido: <b>Preparando</b></p>
          }
          {
            (sale.saleStatusEnum == "DISPATCH_PORT") && <p>Estado actual del pedido: <b>Saliendo de despacho</b></p>
          }
          {
            (sale.saleStatusEnum == "IN_TRANSIT") && <p>Estado actual del pedido: <b>En transito</b></p>
          }
          {
            (sale.saleStatusEnum == "CUSTOMER_REVISION") && <p>Estado actual del pedido: <b>Revision del cliente</b></p>
          }
          {
            (sale.saleStatusEnum == "ACCEPTED") && <p>Estado actual del pedido: <b>Aceptado</b></p>
          }
          {
            (sale.saleStatusEnum == "REJECTED") && <p>Estado actual del pedido: <b>Rechazado</b></p>
          }

        </Typography>
        <Typography variant="h5" component="div">
          {/* {auction?.requestSale.user.name} {auction?.requestSale.user.lastName} - {producer} */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {/* Fecha de inicio: {startDateAuction} */}
        </Typography>
        <hr />
        <Typography variant="body2">
          {/* Dirección de envío: <b>{auction?.requestSale.shippingAddress}</b> */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClickDetailContract} size="small">Ver Detalle</Button>
      </CardActions>
    </Card>
  )
}
