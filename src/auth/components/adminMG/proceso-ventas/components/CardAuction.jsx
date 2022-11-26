import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CardAuction = ({auction}) => {

  const navigate = useNavigate();

  const [producer, setProducer] = useState()

  const startDateAuction = new Date(auction.startDateAuction).toLocaleDateString();

  useEffect(() => {
    const product = auction?.requestSale.products[0];
    setProducer(product.user.businessName);
    return () => {

    }

  })

  const onClickAuctionDetail = () => {
      navigate('./detalle/' + auction?.id);
  }

  return (
    <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                </Typography>
                <Typography variant="h5" component="div">
                  {auction?.requestSale.user.name} {auction?.requestSale.user.lastName} - {producer}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Fecha de inicio: {startDateAuction}
                </Typography>
                <hr />
                <Typography variant="body2">
                Dirección de envío: <b>{auction?.requestSale.shippingAddress}</b>
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClickAuctionDetail} size="small">Ver detalle</Button>
            </CardActions>
        </Card>
  )
}
