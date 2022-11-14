import { Alert, AlertTitle, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getContractByIdAPI } from '../../../../../helpers/contracts';

export const ContractDetail = () => {
    const [contract, setContract] = useState();
    const startDate = new Date(contract?.startDate);
    const endDate = new Date(contract?.endDate).toLocaleDateString();
    const { id } = useParams();

    useEffect(() => {

        getContractByIdAPI(id).then((c) => {
            setContract(c);
        })

        return () => {
            setContract(null);
        }

    }, [id])


    return (
        <Container maxWidth="sm">
            <Typography align='left' variant='h5'>
                Detalle Contrato
            </Typography>
            <hr />

            {
                (contract?.endDate == null) &&
                <Alert severity="success">
                    <AlertTitle>Contrato Vigente</AlertTitle>
                    Fecha de creacion: <strong>{startDate.toLocaleDateString()}</strong>
                </Alert>
            }
            {
                (contract?.endDate != null) &&
                <Alert severity="error">
                    <AlertTitle>Contrato Expirado</AlertTitle>
                    Fecha de creacion: <strong>{startDate.toLocaleDateString()}</strong>
                    <br />
                    Fecha de termino: <strong>{endDate}</strong>
                </Alert>
            }

            <Typography align='left' variant='h4' sx={{ mt: 2 }}>
                Proceso de venta
            </Typography>




        </Container>

    )
}
