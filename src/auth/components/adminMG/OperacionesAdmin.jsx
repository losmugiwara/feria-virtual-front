import { Button, Grid, Typography } from "@mui/material"
import { Link as LinkR } from "react-router-dom"
import './adminMG.css'

export const OperacionesAdmin = () => {
  return (
    <Grid container
      justifyContent='center'
      alignItems='center'
      direction='column'
      sx={{ border: '0.5px solid #2A5299', borderRadius: '5px', width:'400px', height:'350px'}}>
      <Typography variant='h5' textAlign='center' sx={{ mt: '10px' }}>Menú de operaciones</Typography>

      <Grid container
        justifyContent='center'
        direction='column'
        spacing={1}
        sx={{ width: '300px', mt: '10px' }}>
        <Grid item
        >
          <Button fullWidth variant='contained' component={LinkR} to='datos'>
            Datos
          </Button>
        </Grid>

        <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='procesoventas'>
            Procesos de ventas
          </Button>
        </Grid>
        <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='pay'>
            Pagos
          </Button>
        </Grid>
        <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='informeventas'>
            Informe de ventas
          </Button>
        </Grid>
        <Grid item>
          <Button fullWidth variant='contained' component={LinkR} to='addProducts'>
            Agregar productos
          </Button>
        </Grid>
      </Grid>

    </Grid>
  );
}