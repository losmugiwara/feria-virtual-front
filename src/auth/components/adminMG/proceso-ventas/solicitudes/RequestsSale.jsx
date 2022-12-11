import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react'
import { getRequestsSaleAPI } from '../../../../../helpers/requestsSale';
import { CardRequestSale } from '../components/CardRequestSale';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export const RequestsSale = () => {

    const [request, setRequest] = useState();
    const nav = useNavigate();

    useEffect(() => {
        getRequestsSaleAPI().then((r) => {
            setRequest(r);
        })
    }, [])

    return (
        <div>
            <h3>Solicitudes de Venta</h3>
            <hr />
            <Button sx={{mb:'10px'}}variant='contained' color='success' onClick={() => nav(-1)}><ArrowBackIcon /></Button>
            <Grid container spacing={2}>
                {
                    (request) ? request.map((r) => (
                        <Grid item xs={12} md={6} lg={4} >
                            <CardRequestSale
                                key={r.id}
                                request={r}
                            />
                        </Grid>
                    )) : ""
                }
            </Grid>

        </div>
    )
}
