import { faBox, faCheck, faTruck, faTruckRampBox, faUserCheck, faWarehouse, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getContractByIdAPI } from '../../helpers/contracts';

//importaciones
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './contratodetalle.css';
import { updateSaleByIdStatus } from '../../helpers/sales';


export const ContractsCarrierDetail = () => {
    const { id } = useParams();
    const [contract, setContract] = useState();
    const startDate = new Date(contract?.startDate).toLocaleDateString();
    const endDate = new Date(contract?.endDate).toLocaleDateString();

    useEffect(() => {

        getContractByIdAPI(id).then((c) => {
            console.log(c);

            setContract(c);
        });

    }, [])


    function createData(nameProduct, price) {
        return { nameProduct, price };
    }

    let rows = [];

    contract?.sale.requestSale.products.map((p) => {
        rows.push(createData(p.nameProduct, p.price))
    })

    const onClickBack = async () => {
        

        if(contract?.sale.saleStatusEnum == "WAREHOUSE"){
            await updateSaleByIdStatus(contract?.sale.id, 0).then((s) => {
                console.log(s);
                window.location.reload(false);
                
            });
        }
        if(contract?.sale.saleStatusEnum == "PACKAGE"){
            await updateSaleByIdStatus(contract?.sale.id, 0).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "DISPATCH_PORT"){
            await updateSaleByIdStatus(contract?.sale.id, 1).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "IN_TRANSIT"){
            await updateSaleByIdStatus(contract?.sale.id, 2).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "CUSTOMER_REVISION"){
            await updateSaleByIdStatus(contract?.sale.id, 3).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "ACCEPTED"){
            await updateSaleByIdStatus(contract?.sale.id, 4).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "REJECTED"){
            await updateSaleByIdStatus(contract?.sale.id, 5).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }


    }

    const onClickNext = async () => {
        if(contract?.sale.saleStatusEnum == "WAREHOUSE"){
            await updateSaleByIdStatus(contract?.sale.id, 1).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "PACKAGE"){
            await updateSaleByIdStatus(contract?.sale.id, 2).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "DISPATCH_PORT"){
            await updateSaleByIdStatus(contract?.sale.id, 3).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "IN_TRANSIT"){
            await updateSaleByIdStatus(contract?.sale.id, 4).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "CUSTOMER_REVISION"){
            await updateSaleByIdStatus(contract?.sale.id, 5).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "ACCEPTED"){
            await updateSaleByIdStatus(contract?.sale.id, 6).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
        if(contract?.sale.saleStatusEnum == "REJECTED"){
            await updateSaleByIdStatus(contract?.sale.id, 6).then((s) => {
                console.log(s);
                window.location.reload(false);
            });
        }
    }

    return (

        <div>
            <h3>Detalle de contrato: {id}</h3>
            <hr />

            <div className='row'>
                {/* CONTRATO */}
                <div className='col-xs-12 col-sm-12 col-lg-6 col-xl-6'>
                    <h5 className=''>Contrato</h5>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-lg-12 col-xl-12'>

                            {
                                (contract?.sale.saleStatusEnum == "WAREHOUSE") &&
                                <div className='contrato-detalle'>
                                    <h5>En Bodega</h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faWarehouse} />
                                </div>
                            }
                            {
                                (contract?.sale.saleStatusEnum == "PACKAGE") &&
                                <div className='contrato-detalle'>
                                    <h5>Preparando</h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faBox} />
                                </div>
                            }
                            {
                                (contract?.sale.saleStatusEnum == "DISPATCH_PORT") &&
                                <div className='contrato-detalle'>
                                    <h5>Saliendo a despacho </h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faTruckRampBox} />
                                </div>
                            }
                            {
                                (contract?.sale.saleStatusEnum == "IN_TRANSIT") &&
                                <div className='contrato-detalle'>
                                    <h5>En transito</h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faTruck} />
                                </div>

                            }
                            {
                                (contract?.sale.saleStatusEnum == "CUSTOMER_REVISION") &&
                                <div className='contrato-detalle'>
                                    <h5>Revisión del cliente</h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faUserCheck} />
                                </div>

                            }
                            {
                                (contract?.sale.saleStatusEnum == "ACCEPTED") &&
                                <div className='contrato-detalle'>
                                    <h5>Aceptado</h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faCheck} />
                                </div>

                            }
                            {
                                (contract?.sale.saleStatusEnum == "REJECTED") &&
                                <div className='contrato-detalle'>
                                    <h5>Rechazado</h5>
                                    <FontAwesomeIcon className='icon-sale' icon={faX} />

                                </div>

                            }

                        </div>
                    </div>

                    <div className='contrato-detalle-fecha'>

                        <div>
                            <label className='contrato-detalle-label'>Inicio de contrato</label>
                            <p className='contrato-detalle-p'>{startDate}</p>
                        </div>
                        <div>
                            <label className='contrato-detalle-label'>Termino de contrato</label>
                            <p className='contrato-detalle-p'>{endDate}</p>
                        </div>

                    </div>


                    <div className='contrato-detalle-etapa'>
                        <Button onClick={onClickBack} color='error' variant="contained">Retroceder estado</Button>
                        <Button onClick={onClickNext} color='success' variant="contained">Avanzar estado</Button>
                    </div>

                </div>


                {/* VENTAS */}
                <div className='col-xs-12 col-sm-12 col-lg-6 col-xl-6'>
                    <h5 className=''>Venta</h5>

                    <div className='contrato-detalle-users'>

                        <div className=''>
                            <label className='contrato-detalle-label'>Cliente</label>
                            <div className='contrato-detalle-info-user'>
                                <p className='contrato-detalle-p'>{contract?.sale?.requestSale?.user.name} {contract?.sale?.requestSale.user.lastName}</p>
                                <p className='contrato-detalle-p'>{contract?.sale?.requestSale?.user.rut}</p>
                            </div>
                        </div>

                        <div className=''>
                            <label className='contrato-detalle-label'>Productor</label>
                            <div className='contrato-detalle-info-user'>
                                <p className='contrato-detalle-p'>{contract?.sale?.producer.name} {contract?.sale?.producer.lastName}</p>
                                <p className='contrato-detalle-p'>{contract?.sale?.producer.rut}</p>
                            </div>
                        </div>
                    </div>

                    <div className='contrato-detalle-sale'>

                        <div className=''>
                            <h5 className='text-center'>Información de venta</h5>

                            <label className='contrato-detalle-label'>Total valor productos</label>
                            <p className='contrato-detalle-p'>${contract?.sale?.totalPriceProducts}</p>
                            <label className='contrato-detalle-label'>Total de transportista</label>
                            <p className='contrato-detalle-p'>${contract?.sale?.totalCarrier}</p>
                            <label className='contrato-detalle-label'>Total de venta</label>
                            <p className='contrato-detalle-p'>${contract?.sale?.total}</p>
                            <label className='contrato-detalle-label'>Dirección de envío</label>
                            <p className='contrato-detalle-p'>${contract?.sale?.total}</p>

                        </div>

                    </div>

                </div>
            </div>

            <div className='row mt-5 mb-5'>
                <div className='col-xs-12 col-sm-12 col-lg-12 col-xl-12'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>#</b></TableCell>
                                    <TableCell align="right">Nombre Producto</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={row.nameProduct}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        
                                        <TableCell align="">{index + 1}</TableCell>
                                        <TableCell align="right">{row.nameProduct}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

        </div>
    )
}
