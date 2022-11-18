import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestsSaleByIdAPI } from '../../../../../helpers/requestsSale';
import { CardProduct } from '../components/CardProduct';

export const RequestSaleDetail = () => {

  const [request, setRequest] = useState()

  const { id } = useParams();

  useEffect(() => {

    getRequestsSaleByIdAPI(id).then((r) => {
      setRequest(r);
    });

    return () => {
      setRequest(null);
    }
  }, [id])


  return (
    <Container maxWidth="md">
      <Typography align='left' variant='h5'>
        Solicitud de Venta
      </Typography>
      <hr />

      <Typography align='left' variant='h5' sx={{ mt: 5, mb: 5 }}>
        Cliente
      </Typography>

      <Typography align='left' variant='h5' sx={{ mt: 5, mb: 5 }}>
        Productos
      </Typography>


      <Grid container spacing={2} sx={{justifyContent: 'center'}}>
      {
        (request?.products) && request?.products.map((p) => (
            <CardProduct
              key={p.id}
              product={p}
            />
        ))
      }
      </Grid>


    </Container>
  )
}
