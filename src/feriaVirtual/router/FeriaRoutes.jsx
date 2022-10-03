import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AdminProcesos, SesionPage } from '../../auth/pages/IndexPages';
import { DashboardPage } from '../../auth/pages/DashboardPage';
import { ProfilePage } from '../../auth/pages/ProfilePage';
import { MaipoContext } from '../../context/maipoContext';

import { Datos, Contratos } from '../../auth/components/adminMG/IndexAdmin';
import { NavBar } from '../components/ui/IndexUi'
import { BuscarPage, InicioPage, ProductosPage, TransportePage, } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'


export const FeriaRoutes = () => {

    const { user } = useContext(MaipoContext);


    const nav = useNavigate();

    useEffect(() => {
        if (user.active === false) {
            nav('/crearcuenta');
        }
    }, [])

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
                    {/* RUTAS DE ADMINISTRADOR */}

                    <Route path='profile/procesoventas' element={
                        <ProtectedRoute user={user}>
                            <AdminProcesos />
                        </ProtectedRoute>
                    }
                    />
                    <Route path='profile/procesoventas/contratos' element={
                        <ProtectedRoute user={user}>
                            <Contratos />
                        </ProtectedRoute>
                    }
                    />
                    <Route path='profile/datos' element={
                        <ProtectedRoute user={user}>
                            <Datos />
                        </ProtectedRoute>
                    }
                    />
                </Routes>
            </div>
        </>
    )
}
