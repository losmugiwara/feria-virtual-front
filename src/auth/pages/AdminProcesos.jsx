
import { useSelector } from 'react-redux';
import { permisos } from '../../context/roles';
import { ProcesosVentas } from '../components/IndexAuth';
import { Profile } from '../components/Profile';


export const AdminProcesos = () => {

    const { roles, userName } = useSelector(state => state.auth);

    return (
        <>
            <h3 className='d-flex justify-content-center'>Perfil {userName}</h3>
            <hr />
            {roles[0]?.authority === permisos.ROLE_ADMIN ?
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                        <Profile />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>
                        <ProcesosVentas />
                    </div>
                </div>
                : ''}
        </>
    )
}
