import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Contract } from './contratos/Contract';
import './procesos.css';

export const ContractsCustomer = () => {

    const nav = useNavigate();
    const [active, setActive] = useState(false);


    return (
        <>
            <h1 className='title-color d-flex justify-content-center'>Contratos</h1>
            <div className='d-flex justify-content-between'>
                <button className='btn' onClick={() => nav(-1)}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </button>
                <Link className='btn' to='add' >AGREGAR</Link>
                <button className='btn btn-warning' to='' disabled={(active) ? false : true}>MODIFICAR</button>
                <button className='btn btn-danger' to='' disabled={(active) ? false : true}>ELIMINAR</button>
            </div>
            <Contract
                active={active}
                setActive={setActive}
            />
        </>
    )
}
