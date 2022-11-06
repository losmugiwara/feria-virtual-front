import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { allUsers, userProfile } from '../../../../../helpers/auth';
import '../../adminMG.css';

export const ListUsers = ({ active, setActive }) => {

  const [user, setUser] = useState({});


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'role', headerName: 'Role del Usuario', width: 130 },
    {
      field: 'fullName',
      headerName: 'Nombre Completo',
      width: 160
    },
    {
      field: 'rut',
      headerName: 'RUT',
      type: 'text',
      width: 90,
    },
    { field: 'razonSocial', headerName: 'Razón social', width: 130 },

  ];

  const rows = [
    {
      id: user.id, razonSocial: user.businessName === null ? 'No tiene' : user.businessName,
      fullName: `${user.name} ${user.lastName}`, role: user.roles, rut: user.rut
    },
  ];
  useEffect(() => {
    allUsers().then((data) => {
      setUser(data);
      console.log(data)
    });
  }, [])
  // allUsers()

  return (
    <>
      {active === 2 &&
        <div className='container'>
          <div className='mt-4 inp-datos'>
            <div className='m-3 p-3 d-flex justify-content-around '>
              <button
                className='btn btn-warning m-1'>
                Modificar
              </button>
              <button
                className='btn btn-danger m-1'>
                ELiminar
              </button>
            </div>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                getRowId={user.id}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}
