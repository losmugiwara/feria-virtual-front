import React from 'react'
import { SaleDateChart } from './admin-chart-components/SaleDateChart'
import "./admin-chart.css";


export const AdminCharts = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <SaleDateChart />
                    
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <SaleDateChart />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <SaleDateChart />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-xl-6'>
                    <div className='chart'>
                        <SaleDateChart />
                    </div>
                </div>
            </div>

        </div>
    )
}
