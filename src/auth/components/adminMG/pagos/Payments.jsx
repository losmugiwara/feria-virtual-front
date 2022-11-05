import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";


export const Payments = () => {

  const nav = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Role del Usuario', width: 130 },
    {
      field: 'fullName',
      headerName: 'Nombre Completo',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'age',
      headerName: 'RUT',
      type: 'number',
      width: 90,
    },
    { field: 'lastName', headerName: 'Razón social', width: 130 },

  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return (
    <div className='container mt-5'>
      <div style={{ height: 400, width: '100%' }}>
        <Grid
          container
          justifyContent='center'>
          <Grid item>
            <h1>Recibo de pagos</h1>
          </Grid>
        </Grid>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={() => { nav('result') }}
        />
      </div>
    </div>
  )
}
