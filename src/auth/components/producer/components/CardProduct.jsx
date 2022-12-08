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

                <ul>
                    <li>Kilos: {product?.kilogram}</li>
                
                
                </ul>

            </div>



        </div>
    )
}
