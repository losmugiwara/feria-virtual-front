
import { useSelector } from 'react-redux';
import { permisos } from '../../context/roles';
import { InfoUsers, ProcesosVentas } from '../components/IndexAuth';


export const AdminProcesos = () => {

    const { roles, userName } = useSelector(state => state.auth);

    return (
        <>
            <h3 className='d-flex justify-content-center'>Perfil {userName}</h3>
            <hr />
            {roles[0]?.authority === permisos.ROLE_ADMIN ?
                <div className='container d-flex f-row flex-wrap justify-content-center p-2'>
                    <InfoUsers />
                    <ProcesosVentas />
                </div> : ''}
        </>
    )
}
