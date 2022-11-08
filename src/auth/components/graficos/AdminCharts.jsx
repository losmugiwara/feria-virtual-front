import React from 'react'

export const AdminCharts = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <h3>Ventas por fecha</h3>
                        <hr />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <h3>Productos más vendidos</h3>
                        <hr />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <h3>Ranking Transportistas</h3>
                        <hr />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <h3>Ranking Clientes</h3>
                        <hr />
                    </div>
                </div>
            </div>

        </div>
    )
}
