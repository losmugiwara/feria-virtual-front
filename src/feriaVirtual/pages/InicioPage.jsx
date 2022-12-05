import './pages.css'
import { CardImages } from '../components/ui/CardImages';
import { productsApi } from '../../helpers/products';
import { useEffect } from 'react';
import { useState } from 'react';
import { Loading } from '../components/ui/Loading';

export const InicioPage = () => {

    const [products, setProducts] = useState([]);
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            productsApi().then((p) => { setProducts(p) });
            setReady(true);
        }, 1000)

        return () => {
            setProducts();
            setReady(false);
        }
    }, [])


    productsApi();

    return (
        <>

            {
                (!ready) ? <Loading /> : 
            <ul className='d-flex flex-wrap justify-content-center animate__animated animate__fadeIn'>
                {

                    (products.length > 0) ? products.map((p) => (
                        <li className="card marco m-1" >
                            <CardImages
                                key={p.id}
                                product={p}
                            />
                        </li>
                    )) : <Loading />
                    
                }
            </ul>
            }


        </>
    )
}
