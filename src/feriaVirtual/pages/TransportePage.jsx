import { Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getAuctions } from "../../helpers/auctions";
import { getSalesAndContractsByCarrier } from "../../helpers/sales";
import { CardAuction } from "../components/cards/CardAuction";
import { CardContract } from "../components/cards/CardContract";


export const TransportePage = () => {
  const { id } = useSelector((state) => state.auth);
  const [auctions, setAuctions] = useState();
  const [contracts, setContracts] = useState();

  useEffect(() => {
    console.log("componente motado!");

    getAuctions().then((a) => {
      setAuctions(a);
    });

    getSalesAndContractsByCarrier(id).then((s) => {
      setContracts(s);
      
    });

  }, []);

  // console.log(contracts[17].contract);
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

                (a?.endDateAuction == null) &&

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
          <Grid container spacing={2}>
            {
              (contracts) ? contracts.map((c) => (
              
                (c?.contract != null) && 

                <Grid item xs={12} md={12} lg={6}>
                  <CardContract
                    key={c.contract.id}
                    contract={c.contract}
                    sale={c.sale}
                  />
                </Grid>
              )) : ""
            }
          </Grid>

        </div>
      </div>



    </>
  )
}
