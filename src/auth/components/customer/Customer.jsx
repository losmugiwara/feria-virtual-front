import { Button, Grid, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getWallet } from '../../../helpers/wallet';

export const Customer = () => {

    const { enqueueSnackbar } = useSnackbar();
    const { id } = useSelector(state => state.auth)
    const [wallet, setWallet] = useState();

    const dinero = wallet?.amount === undefined;


    const onClickWallet = async (e) => {
        e.preventDefault();
        const { ok, errorMessage, data } = await getWallet(id);
        setWallet(data);
        if (ok) {
            enqueueSnackbar(`Su cartera es visible`,
                {
                    variant: 'success', autoHideDuration: 1000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                }
            );
        } else {
            enqueueSnackbar('No se pudo mostrar su cartera',
                {
                    variant: 'error', autoHideDuration: 1000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                }
            );
        }
    }
    console.log(wallet)
    return (
        <Grid container
            justifyContent='center'
            direction='column'
            sx={{ border: '0.5px solid #2A5299', borderRadius: '5px' }}>
            <Typography variant='h4' textAlign='center'>Monedero</Typography>
            <Grid item>
                <Grid container
                    justifyContent='center'
                    direction='row'
                    spacing={10}>
                    <Grid item>
                        <Typography variant='h6' sx={{ color: '#2A5299' }}>Tu cartera:</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' sx={{ color: '#2A5299' }}>{`${(wallet?.amount === undefined) ? 'no hay dinero' : `$${wallet?.amount}`}`}</Typography>
                    </Grid>
                    <Grid item>
                        <Button disabled={!dinero} variant='contained' color='success' size='small' onClick={onClickWallet}>
                            Ver billetera
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container
                    justifyContent='center'>
                    <Grid item>
                        <Typography>Contratos</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
