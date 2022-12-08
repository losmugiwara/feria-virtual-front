import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CardProduct = ({ product }) => {
    return (
        <div className='card-product'>

            <div>
                <img className='imgProduct' src={product?.urlImage} alt="productImg" />
            </div>
            <div className='card-info'>
                <h5 className='text-center'>{product?.nameProduct}</h5>
                <hr />

                <label className='label-product'>Kilogramos</label>
                <p className='p-product'>{product?.kilogram} kg</p>
                <label className='label-product'>Precio</label>
                <p className='p-product'>${product?.price}</p>
                <label className='label-product'>Calidad</label>
                <p className='p-product'>{product?.quality.name}</p>
                <label className='label-product'>Unidades</label>
                <p className='p-product'>{product?.stock}</p>

            </div>



        </div>
    )
}
