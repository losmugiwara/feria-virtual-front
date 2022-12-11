import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MaipoContext } from '../../../../context/maipoContext';
import { productsApiByUser } from '../../../../helpers/products';
import { CardProduct } from './CardProduct';
import './products.css';

export const ProductosList = () => {

    const { id } = useSelector((state) => state.auth);
    const { user, productsCtx, setProductsCtx } = useContext(MaipoContext);

    useEffect(() => {
        productsApiByUser(id).then((p) => {
            setProductsCtx(p.data);
        })

        return () => {
            console.log("Componente desmontado!");
            setProductsCtx(null);
        }

    }, []);

    console.log(productsCtx.data)

    return (
        <div className='inp-datos'>
            <h5 className='text-center'> Lista de Productos </h5>

            <div className='product-list'>
                {
                    (productsCtx.data) ? productsCtx?.data.map((p) => (
                        <CardProduct
                            key={p?.id}
                            product={p} />
                    )) : ''
                }
            </div>

        </div>
    )
}
