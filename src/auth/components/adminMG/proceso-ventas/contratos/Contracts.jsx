import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { getContractsAPI } from '../../../../../helpers/contracts';
import { CardContract } from '../components/CardContract';

export const Contracts = () => {

    const [contracts, setContracts] = useState();

    useEffect(() => {
        getContractsAPI().then((c) => {
            setContracts(c);
        });
    }, [])



    return (
        <div>
            <h2>Contratos</h2>
            <hr />
            <Grid container spacing={2}>
                {
                    (contracts) ? contracts.map((c) => (
                        <Grid item xs={4}>
                            <CardContract
                                key={c.id}
                            />
                        </Grid>
                    )) : ""
                }
            </Grid>




        </div>
    )
}
