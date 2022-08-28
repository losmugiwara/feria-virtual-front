import './inicio.css'
import palta from '../../../img/paltas.jpg';

export const CardImages = () => {
    return (
        <>
            <ul className='d-flex'>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title ">Palta</h5>
                        <p className="card-text  ">$ 2.500</p>
                        <button className="btn btn-color fw-semibold color-text ">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title ">Palta</h5>
                        <p className="card-text ">$ 2.500</p>
                        <button className="btn btn-color fw-semibold color-text ">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title ">Palta</h5>
                        <p className="card-text ">$ 2.500</p>
                        <button className="btn btn-color fw-semibold color-text ">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title ">Palta</h5>
                        <p className="card-text  ">$ 2.500</p>
                        <button className="btn btn-color fw-semibold color-text ">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title ">Palta</h5>
                        <p className="card-text ">$ 2.500</p>
                        <button className="btn btn-color fw-semibold color-text ">Agregar</button>
                    </div>
                </li>
                <li className="card marco m-1" >
                    <img src={palta} className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title ">Palta</h5>
                        <p className="card-text ">$ 2.500</p>
                        <button className="btn btn-color fw-semibold color-text ">Agregar</button>
                    </div>
                </li>
                
                
            </ul>
        </>
    )
}
