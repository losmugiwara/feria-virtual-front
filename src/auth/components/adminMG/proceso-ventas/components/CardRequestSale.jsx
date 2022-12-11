import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CardRequestSale = ({ request }) => {

    const navigate = useNavigate();

    const startDate = new Date(request.createdDate);
    const approvalDate = new Date(request?.approvalDate).toLocaleDateString();

    const onClickRequestSaleDetail = () => {
        navigate('./detalle/' + request.id);
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <b>Nro Solicitud de venta: {request.id}</b>
                    <br />
                    Estado de solicitud:
                    {
                        (request.approvalStatus == "ON_HOLD") && <b> En espera</b>
                    }
                    {
                        (request.approvalStatus == "PASSED") && <b> Aprobada</b>
                    }
                    {
                        (request.approvalStatus == "REFUSED") && <b> Rechazada</b>
                    }
                </Typography>
                <Typography variant="h5" component="div">
                    {request.user.name} {request.user.lastName} - {request.user.rut}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Fecha de creacion: <b>{startDate.toLocaleDateString()}</b>
                    <br />
                    Fecha aprobado: {
                        (request?.endDate != null) ?

                            <strong>{approvalDate}</strong> : "Aun no se aprueba esta solicitud"
                    }
                </Typography>
                <hr />
                <Typography variant="body2">
                    Observacion:
                    <br />
                    {request.shippingAddress}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClickRequestSaleDetail} size="small">Ver detalle</Button>
            </CardActions>
        </Card>
    )

}
