import React from 'react'

export const Contract = () => {
  return (
    <table className='table'>
      <thead>
        <th >ID</th>
        <th >Productor</th>
        <th >Categoria de productos</th>
        <th >Productos</th>
        <th >Inicio de contrato</th>
        <th >Vigencia</th>
      </thead>
      <tbody>
        <tr>
          <th >1</th>
          <td>Camila</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th >2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th >3</th>
          <td colspan='2'>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )
}
