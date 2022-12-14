import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ui.css'
import { Delete } from '@mui/icons-material';
import { deleteItem } from '../../../store/auth';
import { useSnackbar } from 'notistack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const ModalShopping = () => {

    const { cartItems, totalQuantity } = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDirecc = () => {
        setOpen(false);
        nav('/shop')
    }
    const deleteItems = (id, variant) => {
        dispatch(deleteItem(id));
        enqueueSnackbar('Producto eliminado del carrito',
            {
                variant, autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
        )

    }
    return (
        <div>
            <IconButton aria-label='cart' onClick={handleOpen}>
                <StyledBadge badgeContent={totalQuantity} color='secondary'>
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800 }}>
                    <h2 id="parent-modal-title">Su carrito de compras</h2>
                    <TableContainer >
                        {cartItems.length != 0 ?
                            <Table>
                                <TableHead  >
                                    <TableRow>
                                        <TableCell>Imagen</TableCell>
                                        <TableCell>Producto</TableCell>
                                        <TableCell>Precio</TableCell>
                                        <TableCell>Cantidad</TableCell>
                                        <TableCell>Accion</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {cartItems.map((c) => (
                                        <TableRow key={c.id} >
                                            <TableCell><img className='imgFrut' src={c.img} /></TableCell>
                                            <TableCell>{c.productName}</TableCell>
                                            <TableCell>{`$ ${c.totalPrice}`}</TableCell>
                                            <TableCell>{`${c.quantity} kg`}</TableCell>
                                            <TableCell>
                                                <IconButton sx={{ color: '#f44336' }} onClick={() => deleteItems(c, 'error')}>
                                                    <Delete />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>
                            : <Typography>No hay productos en el carro</Typography>}
                    </TableContainer>
                    <Button variant='contained' sx={{ backgroundColor: '#2A5299' }} onClick={handleDirecc}>
                        Ir al carro
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
