
import './contratos.css';

export const Contract = ({ active, setActive }) => {

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">ID</th>
            <th scope="col">PRODUCTOR</th>
            <th scope="col">PRODUCTOS</th>
            <th scope="col">CALIDAD</th>
            <th scope="col">INICIO DE CONTRATO</th>
            <th scope="col">VIGENCIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <input type='checkbox' onClick={() => {
              if (!active) {
                return setActive(active = true);
              }
              setActive(active = false)
            }} />
            <th scope="row">1</th>
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
