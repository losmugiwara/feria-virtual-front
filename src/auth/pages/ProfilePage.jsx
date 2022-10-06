
import { useContext } from 'react';
import { MaipoContext } from '../../context/maipoContext';
import { permisos } from '../../context/roles';
import { InfoUsers, OperacionesAdmin } from '../components/IndexAuth';

export const ProfilePage = () => {

  const { user, setUser } = useContext(MaipoContext);

  return (
    <>
      <h3 className='d-flex justify-content-center'>Perfil {user.username}</h3>
      <hr />
      {user.role === permisos.ROLE_ADMIN ?
        <div className='container d-flex f-row flex-wrap justify-content-center p-2'>
          <InfoUsers />
          <OperacionesAdmin />
        </div> : ''}
    </>
  )
}
