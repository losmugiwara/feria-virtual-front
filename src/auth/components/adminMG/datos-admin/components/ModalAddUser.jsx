import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { registerApi } from '../../../../../helpers/auth';
import { useForm } from '../../../../../hooks/useForm';

const formData = {
    userName: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    roles: [],
    rut: '',
    businessName: '',
    country: '',
    city: '',
    commune: '',
    address: ''
}

const formValidations = {
    userName: [(value) => value.length > 1, 'Campo requerido.'],
    name: [(value) => value.length > 1, 'Campo requerido.'],
    lastName: [(value) => value.length > 1, 'Campo requerido.'],
    email: [(value) => value.length > 1, 'Campo requerido.'],
    email: [(value) => value.includes('@'), 'Formato incorrecto, falta "@".'],
    password: [(value) => value.length > 1, 'Campo requerido.'],
    rut: [(value) => value.length > 1, 'Campo requerido.'],
    businessName: [(value) => value.length > 1, 'Campo requerido.'],
    country: [(value) => value.length > 1, 'Campo requerido.'],
    city: [(value) => value.length > 1, 'Campo requerido.'],
    commune: [(value) => value.length > 1, 'Campo requerido.'],
    address: [(value) => value.length > 1, 'Campo requerido.'],
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '0.5px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export const ModalAddUser = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [open, setOpen] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const {
        formState, onInputChange, isFormValid, userName, name, lastName, email, password, roles, rut, businessName, country, city, commune, address,
        userNameValid, nameValid, lastNameValid, emailValid, passwordValid, rutValid, businessNameValid, countryValid, cityValid, communeValid, addressValid
    } = useForm(formData, formValidations);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (e) => {
        console.log('esoooooooo')
        e.preventDefault();
        setFormSubmitted(true);
        // if (!isFormValid) return;
        console.log(formState);
        const { ok, infoMessage } = await registerApi(formState);
        if (ok) {
            enqueueSnackbar(`${infoMessage}`,
                {
                    variant: 'success', autoHideDuration: 1000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                }
            );
        } else {
            enqueueSnackbar('No se pudo agregar un usuario',
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
    return (

        <div>
            <Button variant='contained' color='success' onClick={handleOpen}>Agregar Producto</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h4' textAlign='center'>Datos del usuario</Typography>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <Grid container direction='column' justifyContent='center' alignContent='center' alignItems='center' >
                                            <Grid item>
                                                <TableCell>
                                                    <TextField label='Nombre de usuario'
                                                        name='userName'
                                                        value={userName}
                                                        onChange={onInputChange}
                                                        error={!!userNameValid && formSubmitted}
                                                        helperText={userNameValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Nombres'
                                                        name='name'
                                                        value={name}
                                                        onChange={onInputChange}
                                                        error={!!nameValid && formSubmitted}
                                                        helperText={nameValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Apellidos'
                                                        name='lastName'
                                                        value={lastName}
                                                        onChange={onInputChange}
                                                        error={!!lastNameValid && formSubmitted}
                                                        helperText={lastNameValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Correo'
                                                        name='email'
                                                        value={email}
                                                        onChange={onInputChange}
                                                        error={!!emailValid && formSubmitted}
                                                        helperText={emailValid}
                                                    />
                                                </TableCell>
                                            </Grid>
                                            <Grid item>
                                                <TableCell>
                                                    <TextField label='Contraseña'
                                                        name='password'
                                                        value={password}
                                                        onChange={onInputChange}
                                                        error={!!passwordValid && formSubmitted}
                                                        helperText={passwordValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Rut'
                                                        name='rut'
                                                        value={rut}
                                                        onChange={onInputChange}
                                                        error={!!rutValid && formSubmitted}
                                                        helperText={rutValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Box sx={{ minWidth: 220 }}>
                                                        <FormControl fullWidth>
                                                            <InputLabel id='demo-simple-select-label'>Rol del usuario</InputLabel>
                                                            <Select
                                                                labelId='demo-simple-select-label'
                                                                id='demo-simple-select'
                                                                value={roles}
                                                                label='Rol del usuario'
                                                                onChange={onInputChange}
                                                                name='roles'
                                                            >
                                                                <MenuItem value={['ROLE_CUSTOMER_INTERNAL']}>Cliente Interno</MenuItem>
                                                                <MenuItem value={['ROLE_CUSTOMER_EXTERNAL']}>Cliente externo</MenuItem>
                                                                <MenuItem value={['ROLE_CARRIER']}>Transportista</MenuItem>
                                                                <MenuItem value={['ROLE_CONSULTANT']}>Consultor</MenuItem>
                                                                <MenuItem value={['ROLE_ADMIN']}>Administrador</MenuItem>
                                                                <MenuItem value={['ROLE_PRODUCER']}>Productor</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Razón social'
                                                        name='businessName'
                                                        value={businessName}
                                                        onChange={onInputChange}
                                                        error={!!businessNameValid && formSubmitted}
                                                        helperText={businessNameValid}
                                                    />
                                                </TableCell>
                                            </Grid>
                                            <Grid item>
                                                <TableCell>
                                                    <TextField label='País'
                                                        name='country'
                                                        value={country}
                                                        onChange={onInputChange}
                                                        error={!!countryValid && formSubmitted}
                                                        helperText={countryValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Ciudad'
                                                        name='city'
                                                        value={city}
                                                        onChange={onInputChange}
                                                        error={!!cityValid && formSubmitted}
                                                        helperText={cityValid} />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Comuna'
                                                        name='commune'
                                                        value={commune}
                                                        onChange={onInputChange}
                                                        error={!!communeValid && formSubmitted}
                                                        helperText={communeValid}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <TextField label='Dirección'
                                                        name='address'
                                                        value={address}
                                                        onChange={onInputChange}
                                                        error={!!addressValid && formSubmitted}
                                                        helperText={addressValid}
                                                    />
                                                </TableCell>
                                            </Grid>
                                            <Grid container
                                                justifyContent='center'
                                                spacing={10}>
                                                <Grid item
                                                    sx={{ mt: '10px' }}>
                                                    <Button type='submit' variant='contained' color='success'>Agregar</Button>
                                                </Grid>
                                                <Grid item
                                                    sx={{ mt: '10px' }}>
                                                    <Button variant='contained' onClick={handleClose}>Cancelar</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </TableRow>
                                </TableBody>

                            </Table>
                        </TableContainer>
                    </form>
                </Box>
            </Modal>
        </div >
    );
}
