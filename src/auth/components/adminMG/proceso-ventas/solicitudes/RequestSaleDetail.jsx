import { Alert, Button, Grid, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createAuction } from '../../../../../helpers/auctions';
import { getRequestsSaleByIdAPI, updateRequestsSaleStatus } from '../../../../../helpers/requestsSale';
import { CardProduct } from '../components/CardProduct';

export const RequestSaleDetail = () => {

  const [request, setRequest] = useState();
  const [auction, setAuction] = useState();
  const [alert, setAlert] = useState();
  const [status, setStatus] = useState("ON_HOLD");
  const createdDate = new Date(request?.createdDate).toLocaleDateString();

  const { id } = useParams();

  useEffect(() => {

    getRequestsSaleByIdAPI(id).then((r) => {
      setRequest(r);
      setStatus(r?.approvalStatus)
    });

    return () => {
      setRequest(null);
    }
  }, [id])


  const onClickButtonPassed = () => {
    console.log("Aprobar Solicitud");

    createAuction(request?.id).then((a) => {
      console.log("esta es la subasta: ", a);
    });
    updateRequestsSaleStatus(request?.id, 1).then((r) => {
      setStatus(r?.approvalStatus);
      setAlert(true);

      setTimeout(() => {
        setAlert();
      }, 2000);
    });
  }

  const onClickButtonRefused = () => {
    console.log("Rechazar Solicitud");

    updateRequestsSaleStatus(request?.id, 2).then((r) => {
      setStatus(r?.approvalStatus);
      setAlert(false);
      setTimeout(() => {
        setAlert();
      }, 2000);
    });
  }

  return (
    <Container maxWidth="md">
      <Typography align='left' variant='h5'>
        Solicitud de Venta
      </Typography>
      <hr />
      <p>
        <b>Nro Solicitud de venta: {request?.id}</b>
        <br />
        Fecha de solicitud: <b>{createdDate}</b>
        <br />
        Estado de solicitud: {
          (status === "ON_HOLD") && "En espera"
        }
        {
          (status === "PASSED") && "Aprobada"
        }
        {
          (status === "REFUSED") && "Rechazada"
        }
        <br />
        Destino: {request?.shippingAddress}
      </p>
      <Typography align='left' variant='h5' sx={{ mt: 5, mb: 5 }}>
        {request?.user.name}  {request?.user.lastName} - {request?.user.rut}
      </Typography>
      <hr />
      <Stack spacing={3} direction="row" sx={{ justifyContent: 'center' }}>
        {
          (alert == false) ? <Button variant="contained" onClick={onClickButtonPassed} color="success" disabled>Aprobar</Button>
            :
            (status == "ON_HOLD") ?
              <Button variant="contained" onClick={onClickButtonPassed} color="success">Aprobar</Button>
              : <Button variant="contained" onClick={onClickButtonPassed} color="success" disabled>Aprobar</Button>
        }

        {
          (alert == true) ? <Button variant="contained" onClick={onClickButtonRefused} color="error" disabled>Rechazar</Button>
            :
            (status == "ON_HOLD") ?
              <Button variant="contained" onClick={onClickButtonRefused} color="error">Rechazar</Button> :
              <Button variant="contained" onClick={onClickButtonRefused} color="error" disabled>Rechazar</Button>
        }


      </Stack>
      {
        (alert === true) && <Alert className='animate__animated animate__fadeIn' sx={{ m: 3 }} severity="success">Se ha aprobado la solicitud.</Alert>
      }
      {
        (alert === false) && <Alert className='animate__animated animate__fadeIn' sx={{ m: 3 }} severity="error">Se ha rechazado la solicitud.</Alert>
      }
      <hr />

      <Typography align='left' variant='h5' sx={{ mt: 5, mb: 5 }}>
        Productos seleccionados
      </Typography>


      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
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
