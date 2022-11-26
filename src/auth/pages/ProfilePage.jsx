
import { useSelector } from 'react-redux';
import { permisos } from '../../context/roles';
import { InfoUsers, OperacionesAdmin } from '../components/IndexAuth';

export const ProfilePage = () => {

  const { roles, userName } = useSelector(state => state.auth);
  console.log({ roles });

  return (
    <>
      <h3 className='d-flex justify-content-center'>Perfil {userName}</h3>
      <hr />
      {roles[0]?.authority === permisos.ROLE_ADMIN ?
        <div className='container d-flex f-row flex-wrap justify-content-center p-2'>
          <InfoUsers />
          <OperacionesAdmin />
        </div> : ''}
    </>
  )
}
