import { faArrowAltCircleLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './ui.css';


export const NavAdmin = ({ active, setActive }) => {
    const navigate = useNavigate();

    return (
        <ul className='nav d-flex flex-wrap justify-content-around'>
            <li className='nav-item m-1'>
                <button className='btn' onClick={() => { navigate(-1) }}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </button>
            </li>
            <li className='nav-item m-1'>
                <button className={active === 1 ? 'btn btn-sl fw-semibold btn-sl fw-semibold' : 'btn'}
                    onClick={() => {
                        if (active === 0) {
                            return setActive(active + 1);
                        }
                        setActive(active = 0);

                    }}>
                    Agregar <FontAwesomeIcon icon={faPlus} />
                </button>
            </li>
            <li className='nav-item m-1'>
                <button className={active === 2 ? 'btn btn-sl fw-semibold' : 'btn'}
                    onClick={() => {
                        if (active === 0) {
                            return setActive(active + 2);
                        }
                        setActive(active = 0);

                    }}>
                    Listar
                </button>
            </li>
        </ul>

    )
}
