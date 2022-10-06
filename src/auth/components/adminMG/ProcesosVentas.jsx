import { Link } from "react-router-dom"
import './adminMG.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export const ProcesosVentas = () => {
  const navigate = useNavigate();

  return (
    <div className='container inp-datos m-6'>
      <h5 className='text-center'> Proceso de ventas </h5>
      <div>
        <ul className='nav d-flex flex-column flex-wrap align-items-center p-3'>
          <li className='nav-item m-1 '>
            <Link className='btn btn-w' to='contratos'>Contratos</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='ventas'>Ventas</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to=''>Transporte</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to=''>Tipo de ventas</Link>
          </li>
          <li>
            <button className="btn" onClick={() => { navigate(-1) }}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
