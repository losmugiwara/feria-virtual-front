import { useContext, useState } from 'react';
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

const formValidations = {
    userName: [(value) => value.length > 1, 'Campo requerido.'],
    password: [(value) => value.length > 1, 'Campo requerido.'],
}
const formData = {
    userName: '',
    password: ''
}

export const Login = () => {

    const { status, errorMessage } = useSelector((state) => state.auth);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { setUser } = useContext(MaipoContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const {
        userName, password, formState, onInputChange,
        userNameValid, passwordValid, isFormValid
    } = useForm(formData, formValidations);

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        const user = {
            userName: formState.userName,
            password: formState.password
        }

        dispatch(startLogin(user));
        const token = await loginApi(user);

        localStorage.setItem('token', token);

        const dectoken = jwt_decode(token);
        console.log(dectoken);

        const { id, sub, roles } = dectoken;

        setUser({
            id: id,
            userName: sub,
            role: roles[0]?.authority,
            active: true
        });

        navigate('/home');

    }


    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', padding: 4 }}>
            <Grid
                item
                className='box-shadow'
                xs={3}
                sx={{
                    width: { sm: 450 },
                    padding: 3,
                    borderRadius: 2,
                    border: 0.5,
                    borderColor: '#224b73'
                }}>
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
                                name='userName'
                                value={userName}
                                onChange={onInputChange}
                                error={!!userNameValid && formSubmitted}
                                helperText={userNameValid}
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
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid}
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
            </Grid>
        </Grid>
    );
}
