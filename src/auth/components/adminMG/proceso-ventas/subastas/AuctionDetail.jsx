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
import { Typography } from '@mui/material';

export const AuctionDetail = () => {

    const { id } = useParams();
    const [auction, setAuction] = useState();

    useEffect(() => {

        getAuctionById(id).then((a) => {
            console.log(a);
            setAuction(a);
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


            <Typography align='center' variant='h5' sx={{mb: 3}}>
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
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.lastName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.offer}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
