import React from 'react'
import { ProductosList } from './components/ProductosList'

export const ProductosProducer = () => {
    return (
        <div>

            <h3 className='text-center'>Productos</h3>
            <hr />

            <div className='row'>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                    {/* AQUI PODRA AGREGAR PRODUCTOS */}
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>
                    {/* AQUI VAN TODOS LOS PRODUCTOS DEL PRODUCTOR */}
                    <ProductosList />
                </div>
            </div>

        </div>
    )
}
