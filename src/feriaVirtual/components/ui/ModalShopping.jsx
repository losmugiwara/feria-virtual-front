import React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
    const [open, setOpen] = useState(false);
    const { totalQuantity } = useSelector(state => state.cart);
    const nav = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        nav('/shop')
    };
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
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <TableContainer>
                        <Table>
                            <TableHead  >
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Accion</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                    <Button onClick={handleClose}>
                        Ir al carro
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
