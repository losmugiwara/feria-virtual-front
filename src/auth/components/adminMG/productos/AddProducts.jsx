import { ArrowCircleLeftRounded, Delete, Edit } from '@mui/icons-material';
import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsApi } from '../../../../helpers/products';
import { ModalAddProduct } from './ModalAddProduct';
import './products.css';




export const AddProducts = () => {

  const nav = useNavigate();
  const [prod, setProd] = useState([])
  const [activeAdd, setActiveAdd] = useState(false);

  const openCloseAdd = () => {
    setActiveAdd(!activeAdd);
  }

  useEffect(() => {
    productsApi().then((data) => {
      setProd(data);
    });
    console.log(prod)
  }, []);

  const addProduct = (
    <div>
      <div>
        <h3>Agregar Producto</h3>
        <div>
          <TextField
            label='Categoría'
          />
          <TextField
            label='Producto'
          />
          <TextField
            label='Stock'
          />
          <TextField
            label='Calidad'
          />
          <TextField
            label='Precio'
          />
        </div>
        <Button>Modificar</Button>
        <Button
          onClick={() => { openCloseAdd() }}>
          Cancelar
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <TableContainer>
        <div className='container cont'>
          <h2 className='product'>Productos</h2>
          <div >
            <Button
              onClick={() => { nav(-1) }}>
              <ArrowCircleLeftRounded />
            </Button>
            <ModalAddProduct />
          </div>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Calidad</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prod.map(p => (
              <TableRow key={p.id} >
                <TableCell>{p?.id}</TableCell>
                <TableCell>{p?.category}</TableCell>
                <TableCell>{p?.nameProduct}</TableCell>
                <TableCell>{p?.stock}</TableCell>
                <TableCell>{p?.quality}</TableCell>
                <TableCell>{`$${p?.price}`}</TableCell>
                <TableCell>
                  <Edit className='btn-u' onClick={''} />
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
        open={activeAdd}
        onClose={openCloseAdd}>
        {addProduct}
      </Modal>
    </>
  )
}
