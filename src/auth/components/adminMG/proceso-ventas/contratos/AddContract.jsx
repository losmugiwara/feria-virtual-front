import { faArrowAltCircleLeft, faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './contratos.css';


export const AddContract = () => {

    const nav = useNavigate();

    return (
        <>
            <div className='container'>
                <h3 className='text-center title-color'> Datos Productor</h3>
                <button className='btn' onClick={() => { nav(-1) }}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
                <div className='container'>
                    <div className='d-flex flex-column m-3 p-3 inp-datos'>
                        <div className='d-flex flex-row flex-wrap justify-content-center'>
                            <div className='m-1'>
                                <label>Razon social</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>R.U.T</label>
                                <input type='number' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>Fecha inicio de contrato</label>
                                <input type='date' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>Vigencia del contrato </label>
                                <input type='date' className='form-control' />
                            </div>
                        </div>
                        <div className='d-flex flex-row flex-wrap justify-content-center'>
                            <div className='m-1'>
                                <label>Telefono</label>
                                <input type='number' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>Correo</label>
                                <input type='email' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>Precio de producto</label>
                                <input type='number' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>Tipo de producto</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='m-1'>
                                <label>Direccion</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <button className='btn m-2 '>Guardar <FontAwesomeIcon className='btn-cl' icon={faSave} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
