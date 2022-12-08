import { Box, Button, Grid, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { productsApi } from '../../../../helpers/products';

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

export const ModalAddProduct = () => {

    const [open, setOpen] = useState(false);
    const [prod, setProd] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        productsApi().then((data) => {
            setProd(data);
        })
    }, [])

    return (
        <div>
            <Button onClick={handleOpen}>Agregar Producto</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <Typography variant='h4' textAlign='center'>Datos del producto</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <Grid container direction='column' justifyContent='center' alignContent='center' alignItems='center' >
                                        <Grid item>
                                            <TableCell>
                                                <TextField label='Categoria' />
                                            </TableCell>
                                            <TableCell>
                                                <TextField label='Producto' />
                                            </TableCell>
                                            <TableCell>
                                                <TextField label='Stock' />
                                            </TableCell>
                                        </Grid>
                                        <Grid item>
                                            <TableCell>
                                                <TextField label='Calidad' />
                                            </TableCell>
                                            <TableCell>
                                                <TextField label='Precio' />
                                            </TableCell>
                                            <TableCell>
                                                <TextField label='URL imagen' />
                                            </TableCell>
                                        </Grid>
                                        <Grid item >
                                            <Button>Agregar</Button>
                                            <Button onClick={handleClose}>Cancelar</Button>
                                        </Grid>
                                    </Grid>
                                </TableRow>
                            </TableBody>

                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
        </div>
    );
}
