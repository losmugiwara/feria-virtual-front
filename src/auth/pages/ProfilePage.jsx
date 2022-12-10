
import { useSelector } from 'react-redux';
import { permisos } from '../../context/roles';
import { InfoUsers, OperacionesAdmin } from '../components/IndexAuth';
import { OperacionesProducer } from '../components/producer/OperacionesProducer';
import { Profile } from '../components/Profile';

export const ProfilePage = () => {

  const { roles, userName } = useSelector(state => state.auth);
  console.log({ roles });

  return (
    <>
      <h3 className='d-flex justify-content-center'>Perfil {userName}</h3>
      <hr />
      {/* adminstrador */}
      {roles[0]?.authority === permisos.ROLE_ADMIN ?
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
            <Profile />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>
            <OperacionesAdmin />
          </div>
        </div> 
          : ''
        }
      {/* productor */}
      {roles[0]?.authority === permisos.ROLE_PRODUCER ?
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
            <Profile />
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>
            <OperacionesProducer />
          </div>
        </div> 
          : ''
        }


        
    </>
  )
}
