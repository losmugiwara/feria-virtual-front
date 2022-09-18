import { useContext } from 'react';
import { MaipoContext } from '../../context/maipoContext';
import { InfoAdmin, OperacionesAdmin } from '../components/IndexAuth';
import { permisos } from '../../context/roles';


export const AdminPage = () => {
    const {user} = useContext(MaipoContext);
    return (
        <div className='container d-flex f-row flex-wrap justify-content-center'>
            <InfoAdmin />
            
            <OperacionesAdmin />
        </div>
    )
}
