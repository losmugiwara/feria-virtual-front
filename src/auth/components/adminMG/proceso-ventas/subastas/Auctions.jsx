import { Grid } from '@mui/material';
import { useEffect, useState } from 'react'
import { getAuctions } from '../../../../../helpers/auctions';
import { CardAuction } from '../components/CardAuction';

export const Auctions = () => {

    const [auctions, setAuctions] = useState();

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
