import { Delete, Edit } from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Modal, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { allUsers } from '../../../../../helpers/auth';
import { useForm } from '../../../../../hooks/useForm';
import '../../adminMG.css';


export const ListUsers = ({ active, setActive }) => {

  const [user, setUser] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
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
      console.log(data)
    });
  }, []);

  const upUser = (
    <div className='container modal-up'>
      <div className='modal-center'>
        <h3 className='tittle-modal'>Modificar datos de usuario</h3>
        <div className='modal-in'>
          <TextField
            className=''
            name='userName'
            label='Nombre de usuario'
            onChange={handleChange}
            value={inputSelected && inputSelected.userName}
          />
          <TextField
            className=''
            name='name'
            label='Nombres'
            onChange={handleChange}
            value={inputSelected && inputSelected.name}
          />
          <TextField
            className=''
            name='lastName'
            label='Apellidos'
            onChange={handleChange}
            value={inputSelected && inputSelected.lastName}
          />
          <TextField
            className=''
            name='email'
            label='Correo'
            onChange={handleChange}
            value={inputSelected && inputSelected.email}
          />
          <TextField
            className=''
            name='password'
            label='Contraseña'
            onChange={handleChange}
            value={inputSelected && inputSelected.password}
          />
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
          <TextField
            className=''
            name='rut'
            label='Rut'
            onChange={handleChange}
            value={inputSelected && inputSelected.rut}
          />
          <TextField
            className=''
            name='businessName'
            label='Razón social'
            onChange={handleChange}
            value={inputSelected && inputSelected.businessName}
          />
          <TextField
            className=''
            name='country'
            label='País'
            onChange={handleChange}
            value={inputSelected && inputSelected.country}
          />
          <TextField
            className=''
            name='city'
            label='Ciudad'
            onChange={handleChange}
            value={inputSelected && inputSelected.city}
          />
          <TextField
            className=''
            name='commune'
            label='Comuna'
            onChange={handleChange}
            value={inputSelected && inputSelected.commune}
          />
          <TextField
            className=''
            name='address'
            label='Dirección'
            onChange={handleChange}
            value={inputSelected && inputSelected.address}
          />
          <div className='btn-modal'>
            <Button> Modificar</Button>
            <Button onClick={() => openCloseModal()}> Cancelar</Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {active === 2 &&
        <div className='container'>
          <div className='mt-4'>
            <div className='m-3 p-2 '>
            </div>
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
            <Modal
              open={activeModal}
              onClose={openCloseModal}>
              {upUser}
            </Modal>
          </div>
        </div>
      }
    </>
  )
}
