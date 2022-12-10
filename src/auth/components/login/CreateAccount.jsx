import './login.css'
import { useForm } from '../../../hooks/useForm';
import { registerApi } from '../../../helpers/auth';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as LinkR } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useState } from 'react';

const formData = {
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
}

const formValidations = {
    name: [(value) => value.length > 1, 'Campo requerido.'],
    lastName: [(value) => value.length > 1, 'Campo requerido.'],
    username: [(value) => value.length > 1, 'Campo requerido.'],
    email: [(value) => value.includes('@'), 'Formato incorrecto, falta "@".'],
    password: [(value) => value.length >= 6, 'Debe tener más de 6 caracteres'],
}

export const CreateAccount = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage } = useSelector((state) => state.auth);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);
    const {
        formState, userName, name, lastName, email, password, onInputChange,
        isFormValid, usernameValid, nameValid, lastNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);


    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        const user = {
            name: formState.name,
            lastName: formState.lastName,
            userName: formState.username,
            email: formState.email,
            password: formState.password,
            roles: ["ROLE_CUSTOMER_EXTERNAL"]
        }
        const resp = await registerApi(user);
        console.log(resp);
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
                    borderColor: '#2A5299',
                    mb: '200px'
                }}>
                <form
                    className='animate__animated animate__fadeIn animate__faster'
                    onSubmit={onSubmit}>
                    <Typography variant='h4' textAlign='center'>Crear tu cuenta</Typography>
                    <Grid container>
                        <Grid container direction='row' justifyContent='center' spacing={3}>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                                <TextField
                                    label='Nombre '
                                    type='text'
                                    placeholder='Su nombre'
                                    fullWidth
                                    name='name'
                                    value={name}
                                    onChange={onInputChange}
                                    error={!!nameValid && formSubmitted}
                                    helperText={nameValid}
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ mt: 2 }}>
                                <TextField
                                    label='Apellido '
                                    type='text'
                                    placeholder='Su apellido'
                                    fullWidth
                                    name='lastName'
                                    value={lastName}
                                    onChange={onInputChange}
                                    error={!!lastNameValid && formSubmitted}
                                    helperText={lastNameValid}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='center'>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <TextField
                                    label='Nombre de usuario'
                                    type='text'
                                    placeholder='Su nombre de usuario'
                                    fullWidth
                                    name='userName'
                                    value={userName}
                                    onChange={onInputChange}
                                    error={!!usernameValid && formSubmitted}
                                    helperText={usernameValid}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <TextField
                                    label='Correo'
                                    type='email'
                                    placeholder='Su correo '
                                    fullWidth
                                    name='email'
                                    value={email}
                                    onChange={onInputChange}
                                    error={!!emailValid && formSubmitted}
                                    helperText={emailValid}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
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
                        </Grid>
                        <Grid container justifyContent='center' spacing={2} sx={{ mb: 2, mt: 1 }}>
                            <Grid
                                item
                                xs={8}
                                display={!!errorMessage ? '' : 'none'}>
                                <Alert severity='error'>{errorMessage}</Alert>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    disabled={isCheckingAuth}
                                    type='submit'
                                    variant='contained'
                                    fullWidth>
                                    Crear Cuenta
                                </Button>
                            </Grid>
                            <Grid sx={{ mt: '5px' }} container direction='row' justifyContent='center'>
                                <Typography>¿Ya tienes una cuenta?</Typography>
                                <Link component={LinkR} sx={{ ml: 1 }} color='inherit' to='/iniciarsesion'>
                                    Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form >
            </Grid>
        </Grid>
    );
}
