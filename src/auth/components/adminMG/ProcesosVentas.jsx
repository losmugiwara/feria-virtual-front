import { Link as LinkR } from "react-router-dom"
import './adminMG.css'
import { useNavigate } from "react-router-dom";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const ProcesosVentas = () => {
  const navigate = useNavigate();

  return (
    <Grid container
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{ border: '0.5px solid #2A5299', borderRadius: '5px', width: '400px', height: '350px' }}>
      <Typography variant='h5' textAlign='center' sx={{ mt: '10px' }}>Proceso de ventas</Typography>

      <Grid container
        justifyContent='center'
        direction='column'
        spacing={1}
        sx={{ width: '300px', mt: '10px' }}>
        <Grid item
        >
          <Button fullWidth variant='contained' component={LinkR} to='solicitudes'>
            Solicitudes
          </Button>
        </Grid>

        <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='subastas'>
            Subastas
          </Button>
        </Grid>
        <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='contratos'>
            Contratos
          </Button>
        </Grid>
        {/* <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='ventas'>
            Ventas
          </Button>
        </Grid> */}
        <Grid item>
          <Button fullWidth variant='contained' onClick={() => { navigate(-1) }}>
            <ArrowBackIcon />
          </Button>
        </Grid>
      </Grid>

    </Grid>

  )
}
