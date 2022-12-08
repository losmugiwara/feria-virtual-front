import React from 'react'
import { ProductosForm } from './components/ProductosForm'
import { ProductosList } from './components/ProductosList'

export const ProductosProducer = () => {
    return (
        <div>

            <h3 className='text-center'>Productos</h3>
            <hr />

            <div className='row'>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                    {/* AQUI PODRA AGREGAR PRODUCTOS */}
                    <ProductosForm />
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>
                    {/* AQUI VAN TODOS LOS PRODUCTOS DEL PRODUCTOR */}
                    <ProductosList />
                </div>
            </div>

        </div>
    )
}
