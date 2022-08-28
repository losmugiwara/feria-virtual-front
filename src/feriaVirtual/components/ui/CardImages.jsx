import './ui.css'
import palta from '../../../img/paltas.jpg';
import { Select } from './Select';

export const CardImages = () => {
    return (
        <>
            <ul className='d-flex flex-wrap justify-content-center '>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body grid text-center d-grid">
                        <h5 className="card-title uno">Palta</h5>
                        <p className="card-text dos">$ 2.500</p>
                        <Select />
                        <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                <img src={palta} className="card-img" />
                    <div className="card-body grid text-center d-grid">
                        <h5 className="card-title uno">Palta</h5>
                        <p className="card-text dos">$ 2.500</p>
                        <Select />
                        <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                     <img src={palta} className="card-img" />
                    <div className="card-body grid text-center d-grid">
                        <h5 className="card-title uno">Palta</h5>
                        <p className="card-text dos">$ 2.500</p>
                        <Select />
                        <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                     <img src={palta} className="card-img" />
                    <div className="card-body grid text-center d-grid">
                        <h5 className="card-title uno">Palta</h5>
                        <p className="card-text dos">$ 2.500</p>
                        <Select />
                        <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                     <img src={palta} className="card-img" />
                    <div className="card-body grid text-center d-grid">
                        <h5 className="card-title uno">Palta</h5>
                        <p className="card-text dos">$ 2.500</p>
                        <Select />
                        <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                     <img src={palta} className="card-img" />
                    <div className="card-body grid text-center d-grid">
                        <h5 className="card-title uno">Palta</h5>
                        <p className="card-text dos">$ 2.500</p>
                        <Select />
                        <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
                    </div>
                </li>
                
                
            </ul>
        </>
    )
}
