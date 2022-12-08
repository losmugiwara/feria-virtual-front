import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import { userProfile } from '../../helpers/auth';
import './profile.css';

export const Profile = () => {

  const [profile, setProfile] = useState();

  useEffect(() => {
    userProfile().then((u) => {
      setProfile(u);
    })
  }, []);

  return (
    <div className='inp-datos'>
      <h5 className='text-center'> Perfil </h5>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"

        >
          <Avatar sx={{ bgcolor: deepPurple[500] }}>HF</Avatar>
        </Box>
    

      <div className='div-profile'>
        <span className='span-profile'>Rut</span>
        <p className='p-profile'>{profile?.rut}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Nombre</span>
        <p className='p-profile'>{profile?.name} {profile?.lastName}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Email</span>
        <p className='p-profile'>{profile?.email}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Nombre Negocio</span>
        <p className='p-profile'>{profile?.businessName}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Pais</span>
        <p className='p-profile'>{profile?.country}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Ciudad</span>
        <p className='p-profile'>{profile?.city}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Comuna</span>
        <p className='p-profile'>{profile?.commune}</p>
      </div>
      <div className='div-profile'>
        <span className='span-profile'>Direccion</span>
        <p className='p-profile'>{profile?.address}</p>
      </div>
    </div>
  )
}
