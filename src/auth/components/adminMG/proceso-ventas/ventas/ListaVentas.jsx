import './ventas.css';

export const ListaVentas = () => {
  return (
    <>
      <table className='table marco'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>PRODUCTOR</th>
            <th scope='col'>PRODUCTOS</th>
            <th scope='col'>CALIDAD</th>
            <th scope='col'>INICIO DE CONTRATO</th>
            <th scope='col'>VIGENCIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>FRANCISCO</td>
            <td>FRUTA</td>
            <td>5/10</td>
            <td>03/08/22</td>
            <td>12/12/22</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
