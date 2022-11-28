import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAuctionById } from '../../../../../helpers/auctions';
//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const AuctionDetail = () => {

    const { id } = useParams();
    const [auction, setAuction] = useState();
    const [producer, setProducer] = useState();

    useEffect(() => {

        getAuctionById(id).then((a) => {
            console.log(a);
            setAuction(a);

            const product = a?.requestSale.products[0];
            setProducer(product.user);
        })

        return () => {
            setAuction();
        }
    }, []);

    function createData(name, lastName, offer) {
        return { name, lastName, offer };
    }

    let rows = [];

    auction?.carrierOffers.map((c) => {
        rows.push(createData(c.user.name, c.user.lastName, c.offer))
    });

    return (
        <div>
            <h3>Subasta</h3>
            <hr />

            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <Typography>Información Cliente:</Typography>
                    <Typography align='center' variant='p' sx={{ mb: 3 }}>
                        <b>Rut:</b> {auction?.requestSale.user.rut}
                        <br />
                        <b>Nombre de cliente:</b> {auction?.requestSale.user.name} {auction?.requestSale.user.lastName}
                        <br />
                        <b>Nombre negocio:</b> {auction?.requestSale.user.businessName}
                    </Typography>
                    <Typography sx={{ mt: 3 }}>Información Vendedor:</Typography>
                    <Typography align='center' variant='p' sx={{ mb: 3 }}>
                        <b>Rut:</b> {producer?.rut}
                        <br />
                        <b>Nombre de Vendedor:</b> {producer?.name} {producer?.lastName}
                        <br />
                        <b>Nombre negocio:</b> {producer?.businessName}
                    </Typography>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    <Box textAlign='right' sx={{mb:5}}>
                        <Button variant='contained' color='success' endIcon={<AttachMoneyIcon />}>
                            Seguir Venta
                        </Button>
                    </Box>                
                </div>
            </div>





            <Typography align='center' variant='h5' sx={{ mt:3, mb: 3 }}>
                Ofertas realizadas por transportistas
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>#</b></TableCell>
                            <TableCell><b>Nombre</b></TableCell>
                            <TableCell><b>Apellido</b></TableCell>
                            <TableCell><b>Oferta</b></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <b>{index + 1}</b>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.lastName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    ${row.offer}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
