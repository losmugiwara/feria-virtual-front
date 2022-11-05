import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const AddSales = () => {

    const nav = useNavigate()
    return (
        <Grid
            container
            justifyContent='center'
            direction='column'>
            <Grid
                justifyContent='center'
                container>
                <h3>Crear nueva venta</h3>
            </Grid>
            <Grid
                justifyContent='center'
                container
                spacing={2}>
                <Grid item>
                    <TextField label='RUT' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField label='Razón social' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField label='País' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField label='N° Factura' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField label='Ciudad' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField label='Comuna' variant='outlined' />
                </Grid>
                <Grid item>
                    <TextField label='Dirección' variant='outlined' />
                </Grid>
                <Grid
                    container item
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                >
                    <Grid item>
                        <Button size='large' className='btn' onClick={() => { nav(-1) }}>
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className='btn' variant='contained'>Crear venta</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            className='btn-warning'
                            variant='contained'
                            disabled={true}>
                            Modificar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
