import { Login, CreateAccount } from '../components';
import './pageAuth.css';

export const SesionPage = () => {
  return (
    <div className='container formulario'>
      <Login/>
      <CreateAccount/>      
    </div>
  )
}
