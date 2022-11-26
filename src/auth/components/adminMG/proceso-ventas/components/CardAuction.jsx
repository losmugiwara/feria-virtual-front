import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

export const CardAuction = ({auction}) => {

  const [producer, setProducer] = useState()

  useEffect(() => {

    const product = auction?.requestSale.products[0];
    setProducer(product.user.businessName);


    return () => {
      setProducer();
    }

  })

  return (
    <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {auction?.requestSale.user.name} {auction?.requestSale.user.lastName} - {producer} 
                </Typography>
                <Typography variant="h5" component="div">
                   
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   
                </Typography>
                <hr />
                <Typography variant="body2">
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver detalle</Button>
            </CardActions>
        </Card>
  )
}
