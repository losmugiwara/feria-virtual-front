import './ui.css'
import palta from '../../../img/paltas.jpg';
import { Select } from './Select';

export const CardImages = ({ product }) => {
    return (
        <>


            <img src={product.urlImage} className="card-img" />
            <div className="card-body grid text-center d-grid">
                <h5 className="card-title uno">{product.nameProduct}</h5>
                <p className="card-text dos">$ {product.price}</p>
                <Select />
                <button className="btn btn-color fw-semibold color-text tres">Agregar</button>
            </div>


        </>
    )
}
