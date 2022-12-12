import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MaipoContext } from '../../context/maipoContext';
import { generateBid, getAuctionById } from '../../helpers/auctions';
import { userProfile } from '../../helpers/auth';

export const AuctionCarrier = () => {

    const { id } = useParams();

    const [auction, setAuction] = useState();
    const [user, setUser] = useState();
    const { id: idUser } = useSelector((state) => state.auth);
    const [valueAuction, setValueAuction] = useState();

    
    useEffect(() => {
        getAuctionById(id).then((a) => {
            setAuction(a);
        })        
    }, []);

    const onChangeValue = (e) => {
        const value = e.target.value;
        console.log(value);
        setValueAuction(value);


    }

    const onSubmitAction = (e) => {
        e.preventDefault();

        userProfile().then((u) => {
            setUser(u)
        });

        generateBid(auction?.id, idUser, valueAuction);
    }

    return (
        <>
            <h3>Subasta</h3>
            <hr />

            <div className='row'>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <b>Nro Solicitud de Venta: {auction?.requestSale.id}</b>
                    </Typography>

                    <h5>Información Cliente:</h5>
                    Rut Cliente: <b>{auction?.requestSale.user.rut}</b>
                    <br />
                    Nombre Cliente: <b>{auction?.requestSale.user.name} {auction?.requestSale.user.lastName}</b> 
                    <br />
                    Dirección de envío: <b>{auction?.requestSale.shippingAddress}</b>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <b>Generar puja para esta subasta</b>
                        <br />

                        <form>
                            <Button
                                variant="contained"
                                fullWidth={true}
                                type="submit"
                                sx={{mt:1}}
                                onClick={onSubmitAction}
                            >
                                Generar Puja
                            </Button>
                    
                            <TextField onChange={onChangeValue} type='number' fullWidth label="Valor" id="fullWidth" sx={{mt:2}}/>
                        </form>



                    </Typography>
                </div>
            </div>
        </>
    )
}
