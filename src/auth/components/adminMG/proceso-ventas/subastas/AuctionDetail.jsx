import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAuctionById } from '../../../../../helpers/auctions';

export const AuctionDetail = () => {

    const { id } = useParams();
    const [auction, setAuction] = useState();

    useEffect(() => {

        getAuctionById(id).then((a) => {
            console.log(a);
            setAuction(a);
        })

        return () => {
            setAuction();
        }
    }, []);
    



    return (
        <div>
            <h3>Subasta</h3>
            <hr />

          

        </div>
    )
}
