import { useContext, useEffect, useState } from 'react';
import { MaipoContext } from '../../../../context/maipoContext';
import { productsApiByUser } from '../../../../helpers/products';
import { CardProduct } from './CardProduct';
import './products.css';

export const ProductosList = () => {


    const { user, productsCtx, setProductsCtx } = useContext(MaipoContext);

    useEffect(() => {
        productsApiByUser(user.id).then((p) => {
            setProductsCtx(p);
        })

        return () => {
            console.log("Componente desmontado!");
            setProductsCtx(null);
        }

    }, []);


    return (
        <div className='inp-datos'>
            <h5 className='text-center'> Lista de Productos </h5>

            <div className='product-list'>
                {
                (productsCtx) ? productsCtx.map((p) => (
                    <CardProduct
                    key={p?.id}
                    product={p}/>
                )) : ''
            }
            </div>

        </div>
    )
}
