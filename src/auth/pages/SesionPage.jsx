import { useMemo } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login, CreateAccount } from '../components/IndexAuth';
import './pageAuth.css';

export const SesionPage = () => {

  const { status } = useSelector(state => state.auth);
  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
  const nav = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      nav('/home');
    }
  }, [])

  return (
    <div className='container formulario'>
      <Login />
      <CreateAccount />
    </div>
  )
}
