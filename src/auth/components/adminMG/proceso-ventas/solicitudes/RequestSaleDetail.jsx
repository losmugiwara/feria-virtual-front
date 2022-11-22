import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestsSaleByIdAPI } from '../../../../../helpers/requestsSale';
import { CardProduct } from '../components/CardProduct';

export const RequestSaleDetail = () => {

  const [request, setRequest] = useState()
  const createdDate = new Date(request?.createdDate).toLocaleDateString();

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
      <p>
        Fecha de solicitud: <b>{createdDate}</b>
        <br />
        Estado de solicitud: {
          (request?.approvalStatus === "ON_HOLD") && "En espera"
        }
         {
          (request?.approvalStatus === "PASSED") && "Aceptada"
        }
         {
          (request?.approvalStatus === "REFUSED") && "Rechazada"
        }
        <br />
        Destino: {request?.shippingAddress}
      </p>
      <Typography align='left' variant='h5' sx={{ mt: 5, mb: 5 }}>
        {request?.user.name}  {request?.user.lastName} - {request?.user.rut}
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
