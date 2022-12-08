import { useContext } from 'react';
import jwt_decode from "jwt-decode";

import { Link as LinkR, useNavigate } from 'react-router-dom';
import './login.css';
import { useForm } from '../../../hooks/useForm';
import { loginApi } from '../../../helpers/auth';
import { MaipoContext } from '../../../context/maipoContext';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../../store/auth';
import { useMemo } from 'react';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

export const Login = () => {

    const { status, errorMessage } = useSelector((state) => state.auth);
    const { setUser } = useContext(MaipoContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const { username, password, formState, onInputChange } = useForm({
        username: '',
        password: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            userName: formState.username,
            password: formState.password
        }

        dispatch(startLogin(user));
        const token = await loginApi(user);

        localStorage.setItem('token', token);

        const dectoken = jwt_decode(token);
        console.log(dectoken);

        const { sub, roles } = dectoken;

        setUser({
            username: sub,
            role: roles[0]?.authority,
            active: true
        });

        navigate('/home');

    }


    return (
        <form
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={onSubmit}>
            <Grid container direction='column'>
                <Typography variant='h4' textAlign='center'>Iniciar sesión</Typography>
                <Grid item xs={2} sx={{ mt: 2 }}>
                    <TextField
                        label='Nombre de usuario'
                        type='text'
                        placeholder='Su nombre de usuario'
                        fullWidth
                        name='username'
                        value={username}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={2} sx={{ mt: 2 }}>
                    <TextField
                        label='Contraseña'
                        type='password'
                        placeholder='Contraseña'
                        fullWidth
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid container
                    display={!!errorMessage ? '' : 'none'}
                    sx={{ mt: 1 }}>
                    <Grid
                        item
                        xs={6}>

                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent='center' sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={6} sm={6}>
                        <Button
                            disabled={isAuthenticating}
                            type='submit'
                            variant='contained'
                            fullWidth>
                            Login
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction='row' justifyContent='center'>
                    <Link component={LinkR} color='inherit' to='/crearcuenta'>
                        Crear cuenta
                    </Link>

                </Grid>
            </Grid>
        </form>
    );
}
