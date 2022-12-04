import { Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { getAuctions } from "../../helpers/auctions";
import { CardAuction } from "../components/cards/CardAuction";


export const TransportePage = () => {

  const [ auctions, setAuctions ] = useState();
  const [ contracts, setContracts ] = useState();

  useEffect(() => {
    console.log("componente motado!");

    getAuctions().then((a) => {
      setAuctions(a);
    });


  }, []);


  return (
    <>
      <h3>Transporte</h3>
      <hr />

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h5>Subastas Activas</h5>
          <Grid container spacing={2}>
                {
                    (auctions) ? auctions.map((a) => (

                        (a?.endDateAuction != null) &&

                        <Grid item xs={12} md={12} lg={6}>
                            <CardAuction
                                key={a.id}
                                auction={a}
                            />
                        </Grid>
                    )) : ""
                }
            </Grid>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h5>Contratos</h5>
        </div>
      </div>



    </>
  )
}
