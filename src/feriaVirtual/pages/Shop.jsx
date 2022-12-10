import { Delete } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cancelCart, deleteItem } from '../../store/auth';


export const Shop = () => {
  const { cartItems, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const deleteItems = (id, variant) => {
    dispatch(deleteItem(id));
    enqueueSnackbar('Producto eliminado del carrito',
      {
        variant, autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      }
    )

  }
  const cancelPurchase = (variant) => {
    dispatch(cancelCart());
    enqueueSnackbar('Productos eliminados del carrito',
      {
        variant, autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      }
    );
    nav('/home')
  }
  
  const onClickRequestSale = () => {
    
    let productsItem = [];
    
    cartItems.map((ci) => {
      // console.log(ci);

      const ProductItem = {
        idProduct: ci.id,
        count: ci.quantity
      }
      
      productsItem.push(ProductItem);
      
    });


    console.log(productsItem);

  }

  return (
    <>
      <Box>
        <Typography variant='h3' align='center'>Carro de Compras</Typography>
        <Grid container justifyContent='center' direction='row' spacing={2}
          sx={{ mt: '20px' }}>
          <Grid item
            xs={8}>
            <Grid container
              justifyContent='center'
              alignContent='center'
              direction='column'
              sx={{ border: '0.5px solid #2A5299', borderRadius: '5px', backgroundColor: 'white' }}>
              <Typography sx={{ color: '#2A5299', mt: '10px' }} variant='h5' textAlign='center'>Tus productos</Typography>
              <Grid item
                width={800}
                xs={2}
                sx={{ mt: '10px', mb: '10px', borderRadius: '5px' }}>
                <TableContainer  >
                  {cartItems.length != 0 ?
                    <Table>
                      <TableHead  >
                        <TableRow>
                          <TableCell><Typography variant='h6' sx={{ color: '#5499C8' }}>Imagen</Typography></TableCell>
                          <TableCell><Typography variant='h6' sx={{ color: '#5499C8' }}>Producto</Typography></TableCell>
                          <TableCell><Typography variant='h6' sx={{ color: '#5499C8' }}>Precio</Typography></TableCell>
                          <TableCell><Typography variant='h6' sx={{ color: '#5499C8' }}>Cantidad</Typography></TableCell>
                          <TableCell><Typography variant='h6' sx={{ color: '#5499C8' }}>Accion</Typography></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems.map((c) => (
                          <TableRow key={c.id}>
                            <TableCell><img className='imgFrut' src={c.img} /></TableCell>
                            <TableCell><Typography  >{c.productName}</Typography></TableCell>
                            <TableCell><Typography  >{`$ ${c.totalPrice}`}</Typography></TableCell>
                            <TableCell><Typography  >{`${c.quantity} kg`}</Typography></TableCell>
                            <TableCell>
                              <IconButton sx={{ color: '#f44336' }} onClick={() => deleteItems(c, 'error')}>
                                <Delete />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))
                        }
                      </TableBody>
                    </Table>
                    : <Typography variant='h6' textAlign='center'>No hay productos en el carro</Typography>}
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
          <Grid item
            xs={4}>
            <Grid container
              justifyContent='center'
              direction='column'
              sx={{ border: '0.5px solid #2A5299', borderRadius: '5px', backgroundColor: 'white' }}>
              <Typography sx={{ color: '#2A5299', mt: '10px' }} variant='h5' textAlign='center'>Total de compras</Typography>
              <Grid item>
                {cartItems.map((c) => (
                  <Grid container
                    key={c.id}
                    direction='row' justifyContent='space-between'>
                    <Grid item>
                      <Typography sx={{ color: '#5499C8', ml: '70px' }}> {c.productName}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='h6' sx={{ mr: '70px' }} >{c.quantity}</Typography>
                    </Grid>
                  </Grid>
                ))
                }
                <Grid container
                  direction='row' justifyContent='space-between'>
                  <Grid>
                    <Typography variant='h6' textAlign='center' sx={{ color: '#2A5299', ml: '70px' }}> Total de productos</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant='h6' textAlign='center' sx={{ color: '#2A5299', mr: '70px' }}>{totalQuantity}</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant='h6' textAlign='center' sx={{ color: '#2A5299', ml: '70px' }}> Total del pedido</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant='h6' textAlign='center' sx={{ color: '#2A5299', mr: '70px' }}>{totalAmount}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mt: '10px', mb: '10px' }}>
                <Grid container justifyContent='space-around' >
<<<<<<< HEAD
                  <Button variant='contained' onClick={() => cancelPurchase('error')}>Cancelar compra</Button>
                  <Button onClick={onClickRequestSale} variant='contained'>Comprar</Button>
=======
                  <Button variant='contained' color='error' onClick={() => cancelPurchase('error')}>Cancelar compra</Button>
                  <Button variant='contained' color='success'>Comprar</Button>
>>>>>>> 45afb9fd610452f3af02afbe253c1a0c178b566f
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
