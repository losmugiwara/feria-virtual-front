import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const CardProduct = ({product}) => {
  return (
    <Card sx={{ maxWidth: 250, m: 2 }}>
      <CardMedia
        component="img"
        height="250"
        width="250"
        image={product.urlImage}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.nameProduct}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {product.category?.nameCategory}
        </Typography>
        <hr />
        <Typography gutterBottom variant="p" component="div">
          <b>{product.quality?.name}</b> 
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Precio: ${product.price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Stock: {product.stock}
        </Typography>
    

      </CardContent>
    </Card>
  )
}
