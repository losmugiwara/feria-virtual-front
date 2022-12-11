import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react'
import { getAuctions } from '../../../../../helpers/auctions';
import { CardAuction } from '../components/CardAuction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


export const Auctions = () => {

    const [auctions, setAuctions] = useState();
    const nav = useNavigate();

    useEffect(() => {
        getAuctions().then((a) => {
            setAuctions(a);
        });

        return () => {
            setAuctions();
        }
    }, []);

    return (
        <div>
            <h3>Subastas</h3>
            <hr />
            <Button sx={{ mb: '10px' }} variant='contained' color='success' onClick={() => nav(-1)}><ArrowBackIcon /></Button>
            <Grid container spacing={2}>
                {
                    (auctions) ? auctions.map((a) => (
                        <Grid item xs={12} md={6} lg={4} >
                            <CardAuction
                                key={a.id}
                                auction={a}
                            />
                        </Grid>
                    )) : ""
                }
            </Grid>

        </div>
    )
}
