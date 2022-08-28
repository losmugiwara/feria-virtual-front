import { Login, CreateAccount } from '../login';
import './pageAuth.css';

export const Sesion = () => {
  return (
    <div className='container formulario'>
      <Login/>
      <CreateAccount/>      
    </div>
  )
}
