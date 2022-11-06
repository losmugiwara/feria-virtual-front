import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { permisos } from '../../../../../context/roles';
import { addUser } from '../../../../../helpers/auth';
import { useForm } from '../../../../../hooks/useForm';
import '../../adminMG.css';


// const roles = [permisos.ROLE_ADMIN, permisos.ROLE_CARRIER, permisos.ROLE_CONSULTANT, permisos.ROLE_CUSTOMER_EXTERNAL, permisos.ROLE_CUSTOMER_INTERNAL];

export const AddUser = ({ active, setActive }) => {



  const { formState, onInputChange } = useForm({
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    roles: [],
    rut: '',
    businessname: '',
    country: '',
    city: '',
    commune: '',
    address: ''
  });

  const onClickAdd = async (e) => {
    e.preventDefault();
    // console.log(formState);
    const user = {
      userName: formState.username,
      name: formState.name,
      lastName: formState.lastname,
      email: formState.email,
      password: formState.password,
      roles: formState.roles,
      rut: formState.rut,
      businessName: formState.businessname,
      country: formState.country,
      city: formState.city,
      commune: formState.commune,
      address: formState.address
    }

    const resp = await addUser(user);

    console.log(resp);
  }

  return (
    <>
      {active === 1 &&
        <div className='container'>
          <h3 className='text-center'> Datos de usuarios</h3>
          <div className='container p-1'>
            <form className='d-flex flex-column m-3 p-3 inp-datos'>
              <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Nombre de usuario'
                    name='username'
                    variant='outlined'
                    value={formState.username}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Nombres'
                    name='name'
                    variant='outlined'
                    value={formState.name}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Apellidos'
                    name='lastname'
                    variant='outlined'
                    value={formState.lastname}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Correo'
                    name='email'
                    variant='outlined'
                    value={formState.email}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Contraseña'
                    name='password'
                    variant='outlined'
                    value={formState.password}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className='m-1'>
                  <div>
                    <Box sx={{ minWidth: 220 }}>
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Rol del usuario</InputLabel>
                        <Select
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          value={formState.roles}
                          label='Rol del usuario'
                          onChange={onInputChange}
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
                  </div>
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Rut'
                    name='rut'
                    variant='outlined'
                    value={formState.rut}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Razón social'
                    name='businessname'
                    variant='outlined'
                    value={formState.businessname}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='País'
                    name='country'
                    variant='outlined'
                    value={formState.country}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Ciudad'
                    name='city'
                    variant='outlined'
                    value={formState.city}
                    onChange={onInputChange}
                  />
                </div><div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Comuna'
                    name='commune'
                    variant='outlined'
                    value={formState.commune}
                    onChange={onInputChange}
                  />
                </div>
                <div className='m-1'>
                  <TextField
                    id='outlined-basic'
                    label='Dirección'
                    name='address'
                    variant='outlined'
                    value={formState.address}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <button type='submit' onClick={onClickAdd} className='btn m-2 '>
                Guardar
                <FontAwesomeIcon className='btn-cl' icon={faSave} />
              </button>
            </form>
          </div>
        </div>
      }
    </>
  )
}
