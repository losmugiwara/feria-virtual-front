import { faTruck, faUser, faBox, faWarehouse, faTruckRampBox, faUserCheck, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, AlertTitle, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getContractByIdAPI } from '../../../../../helpers/contracts';
import "./contratos.css";

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

            <div className='statusSale row'>
                <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>

                    {
                        (contract?.sale.saleStatusEnum == "WAREHOUSE") && <p>Estado actual del pedido: <b>En bodega</b></p>
                    }
                    {
                        (contract?.sale.saleStatusEnum == "PACKAGE") && <p>Estado actual del pedido: <b>Preparando</b></p>
                    }
                    {
                        (contract?.sale.saleStatusEnum == "DISPATCH_PORT") && <p>Estado actual del pedido: <b>Saliendo de despacho</b></p>
                    }
                    {
                        (contract?.sale.saleStatusEnum == "IN_TRANSIT") && <p>Estado actual del pedido: <b>En transito</b></p>
                    }
                    {
                        (contract?.sale.saleStatusEnum == "CUSTOMER_REVISION") && <p>Estado actual del pedido: <b>Revision del cliente</b></p>
                    }
                    {
                        (contract?.sale.saleStatusEnum == "ACCEPTED") && <p>Estado actual del pedido: <b>Aceptado</b></p>
                    }
                    {
                        (contract?.sale.saleStatusEnum == "REJECTED") && <p>Estado actual del pedido: <b>Rechazado</b></p>
                    }

                </div>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>

                    {
                        (contract?.sale.saleStatusEnum == "WAREHOUSE") && <FontAwesomeIcon className='icon-sale' icon={faWarehouse} />
                    }
                    {
                        (contract?.sale.saleStatusEnum == "PACKAGE") && <FontAwesomeIcon className='icon-sale' icon={faBox} />
                    }
                    {
                        (contract?.sale.saleStatusEnum == "DISPATCH_PORT") && <FontAwesomeIcon className='icon-sale' icon={faTruckRampBox} />
                    }
                    {
                        (contract?.sale.saleStatusEnum == "IN_TRANSIT") && <FontAwesomeIcon className='icon-sale' icon={faTruck} />
                    }
                    {
                        (contract?.sale.saleStatusEnum == "CUSTOMER_REVISION") && <FontAwesomeIcon className='icon-sale' icon={faUserCheck} />
                    }
                    {
                        (contract?.sale.saleStatusEnum == "ACCEPTED") && <FontAwesomeIcon className='icon-sale' icon={faCheck} />
                    }
                    {
                        (contract?.sale.saleStatusEnum == "REJECTED") && <FontAwesomeIcon className='icon-sale' icon={faX} />
                    }

                </div>
            </div>


        </Container>

    )
}
