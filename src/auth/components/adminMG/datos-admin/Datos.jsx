import { Delete, Edit } from '@mui/icons-material';
import { Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allUsers } from '../../../../helpers/auth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../adminMG.css';
import { ModalAddUser } from './components/ModalAddUser';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'white',
    border: '0.5px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export const Datos = () => {

    const [user, setUser] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const nav = useNavigate();
    const [inputSelected, setInputSelected] = useState({
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
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputSelected(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(inputSelected)
    }


    const openCloseModal = () => {
        setActiveModal(!activeModal);
    }

    const selectUser = (u, cases) => {
        setInputSelected(u);
        (cases === 'Editar') && setActiveModal(true)
    }
    useEffect(() => {
        allUsers().then((data) => {
            setUser(data);
        });
    }, []);

    const upUser = (
        <div>
            <Box sx={{ ...style, width: 900, height: 550 }}>

                <Typography variant='h4' sx={{ mt: '40px' }} textAlign='center'>Modificar datos de usuarios</Typography>
                <Grid container
                    direction='column'
                    spacing={2}
                    sx={{ mt: '20px' }}>
                    <Grid item>
                        <Grid container spacing={2}
                            justifyContent='center'
                            direction='row'>
                            <Grid item>
                                <TextField
                                    name='userName'
                                    label='Nombre de usuario'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.userName}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='name'
                                    label='Nombres'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.name}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='lastName'
                                    label='Apellidos'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.lastName}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}
                            direction='row'
                            justifyContent='center'>
                            <Grid item>
                                <TextField
                                    name='email'
                                    label='Correo'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.email}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='password'
                                    label='Contraseña'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.password}
                                />
                            </Grid>
                            <Grid item>
                                <Box sx={{ minWidth: 220 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id='demo-simple-select-label'>Rol del usuario</InputLabel>
                                        <Select
                                            labelId='demo-simple-select-label'
                                            id='demo-simple-select'
                                            label='Rol del usuario'
                                            onChange={handleChange}
                                            value={inputSelected && inputSelected.roles}
                                            name='roles'
                                        >
                                            <MenuItem value={['ROLE_CUSTOMER_INTERNAL']}>Cliente Interno</MenuItem>
                                            <MenuItem value={['ROLE_CUSTOMER_EXTERNAL']}>Cliente externo</MenuItem>
                                            <MenuItem value={['ROLE_CARRIER']}>Transportista</MenuItem>
                                            <MenuItem value={['ROLE_CONSULTANT']}>Consultor</MenuItem>
                                            <MenuItem value={['ROLE_ADMIN']}>Administrador</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}
                            direction='row'
                            justifyContent='center'>
                            <Grid item>
                                <TextField
                                    name='rut'
                                    label='Rut'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.rut}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='businessName'
                                    label='Razón social'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.businessName}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='country'
                                    label='País'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.country}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}
                            direction='row'
                            justifyContent='center'>
                            <Grid item>
                                <TextField
                                    name='city'
                                    label='Ciudad'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.city}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='commune'
                                    label='Comuna'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.commune}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name='address'
                                    label='Dirección'
                                    onChange={handleChange}
                                    value={inputSelected && inputSelected.address}
                                />
                            </Grid>
                        </Grid>
                        <Grid container
                            justifyContent='center'
                            alignItems='center'
                            spacing={8}
                        >
                            <Grid item
                                sx={{ mt: '40px' }}>
                                <Button variant='contained' color='warning'> Modificar</Button>

                            </Grid>
                            <Grid item
                                sx={{ mt: '40px' }}>
                                <Button variant='contained' color='success' onClick={() => openCloseModal()}> Cancelar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
    return (
        <>
            <Grid container justifyContent='center'
                direction='column'>
                <Grid item
                    sx={{ mt: '20px' }}>
                    <Typography variant='h4'
                        textAlign='center'>
                        Lista de usuario
                    </Typography>
                </Grid>
                <Grid container
                    direction='row'
                    justifyContent='center'
                    spacing={10}
                >
                    <Grid item
                        sx={{ mt: '15px' }}>
                        <Button variant='contained' onClick={()=>nav(-1)} color='success'><ArrowBackIcon /></Button>
                    </Grid>
                    <Grid item
                        sx={{ mt: '15px' }}>
                        <ModalAddUser />
                    </Grid>
                </Grid>
                <Grid item
                    sx={{ mt: '10px' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Rol del usuario</TableCell>
                                    <TableCell>Nombre completo</TableCell>
                                    <TableCell>Rut</TableCell>
                                    <TableCell>Razón social</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.map(u => (
                                    <TableRow key={u.id}>
                                        <TableCell>{u.id}</TableCell>
                                        <TableCell>{u.roles[0]?.roleName}</TableCell>
                                        <TableCell>{`${u.name} ${u.lastName}`}</TableCell>
                                        <TableCell>{u.rut}</TableCell>
                                        <TableCell>{u.businessName != null ? u.businessName : 'No posee " Razón social "'}</TableCell>
                                        <TableCell>
                                            <Edit className='btn-u' onClick={() => selectUser(u, 'Editar')} />
                                            &nbsp;&nbsp;&nbsp;
                                            <Delete className='btn-u' />
                                        </TableCell>
                                    </TableRow>
                                ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Modal
                    open={activeModal}
                    onClose={openCloseModal}>
                    {upUser}
                </Modal>
            </Grid>
        </>
    )
}
