import { useEffect, useState } from 'react';
import { userProfile } from '../../../../helpers/auth';
import { productsApiByUser } from '../../../../helpers/products';
import { CardProduct } from './CardProduct';
import './products.css';

export const ProductosList = () => {
    
    const [products, setProducts] = useState();
    const [id, setId] = useState();

    useEffect(() => {

      
        userProfile().then((user) => {
            setId(user?.id);
        });

        setTimeout(() => {
            productsApiByUser(id).then((p) => {
                setProducts(p);
            })

        },3000)

        return () => {
            setId();
            setProducts();
        }

    }, []);
  
  
    return (
    <div className='inp-datos'>
        <h5 className='text-center'> Lista de Productos </h5>
        
        <div className='product-list'>
            {
                (products) ? products.map((p) => (
                    <CardProduct
                    key={p?.id}
                    product={p}/>
                )) : ''
            }
        </div>

    </div>
  )
}
