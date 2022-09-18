import { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { SesionPage } from '../../auth/pages'
import { DashboardPage } from '../../auth/pages/DashboardPage'
import { ProfilePage } from '../../auth/pages/ProfilePage'
import { MaipoContext } from '../../context/maipoContext'

import { NavBar } from '../components/ui'
import { BuscarPage, InicioPage, ProductosPage, TransportePage, } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'


export const FeriaRoutes = () => {

    const {user} = useContext(MaipoContext);


    const nav = useNavigate();

    useEffect(() => {
        if (user.active === false){
            nav('/crearcuenta');
        }
    },[])

    return (
        <>

            

            {
                (user.active) ? <NavBar /> : null
            }

            
            <div className='container'>
                <Routes>
                    
                    <Route path="/" element={
                        <ProtectedRoute user={user}>
                            <InicioPage />
                        </ProtectedRoute>
                    } 
                    />

                    
                    <Route path="productos" element={
                        <ProtectedRoute user={user}>
                            <ProductosPage />
                        </ProtectedRoute>
                    } 
                    />

                    <Route path="transporte" element={
                        <ProtectedRoute user={user}>
                            <TransportePage />
                        </ProtectedRoute>
                    } 
                    />
                    
                    

                    <Route path="crearcuenta" element={
                        <ProtectedRoute user={user}>
                            <SesionPage />
                        </ProtectedRoute>
                    } 
                    />


                    <Route path='search' element={
                        <ProtectedRoute user={user}>
                            <BuscarPage />
                        </ProtectedRoute>
                    } 
                    />

                    <Route path='dashboard' element={
                        <ProtectedRoute user={user}>
                            <DashboardPage />
                        </ProtectedRoute>
                    } 
                    />


                    <Route path='profile' element={
                        <ProtectedRoute user={user}>
                            <ProfilePage />
                        </ProtectedRoute>
                    } 
                    />




                </Routes>
            </div>
        </>
    )
}
