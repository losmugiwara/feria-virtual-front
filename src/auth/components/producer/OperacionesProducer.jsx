import React from 'react'
import { Link } from 'react-router-dom'

export const OperacionesProducer = () => {
  return (
    <div className='container inp-datos m-6'>
      <h5 className='text-center'> Menú de operaciones </h5>
      <div>
        <ul className='nav d-flex flex-column flex-wrap align-items-center p-3'>
          <li className='nav-item m-1 '>
            <Link className='btn btn-w' to='productos'>Productos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
