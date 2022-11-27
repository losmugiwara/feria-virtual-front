import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AdminProcesos, SesionPage } from '../../auth/pages/IndexPages';
import { DashboardPage } from '../../auth/pages/DashboardPage';
import { ProfilePage } from '../../auth/pages/ProfilePage';
import { MaipoContext } from '../../context/maipoContext';

import { Datos, Sales, Payments, AddProducts } from '../../auth/components/adminMG/IndexAdmin';
import { NavBar } from '../components/ui/IndexUi'
import { BuscarPage, InicioPage, ProductosPage, TransportePage, } from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
import { AddContract } from '../../auth/components/adminMG/proceso-ventas/contratos/AddContract';
import { AddSales } from '../../auth/components/adminMG/proceso-ventas/ventas/AddSales';
import { Contracts } from '../../auth/components/adminMG/proceso-ventas/contratos/Contracts';
import { ContractDetail } from '../../auth/components/adminMG/proceso-ventas/contratos/ContractDetail';
import { RequestsSale } from '../../auth/components/adminMG/proceso-ventas/solicitudes/RequestsSale';
import { RequestSaleDetail } from '../../auth/components/adminMG/proceso-ventas/solicitudes/RequestSaleDetail';
import { Auctions } from '../../auth/components/adminMG/proceso-ventas/subastas/Auctions';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AuctionDetail } from '../../auth/components/adminMG/proceso-ventas/subastas/AuctionDetail';


export const FeriaRoutes = () => {

    const { user } = useContext(MaipoContext);

    const { status } = useSelector(state => state.auth);

    const isAuthenticating = useMemo(() => status === 'not-authenticated', [status]);


    const nav = useNavigate();

    useEffect(() => {
        if (isAuthenticating) {
            nav('/crearcuenta');
        }
    }, [])

    return (
        <>


            <div className='container'>
                <Routes>

                    <Route path='productos' element={
                        <ProtectedRoute user={user}>
                            <ProductosPage />
                        </ProtectedRoute>
                    } />

                    <Route path='transporte' element={
                        <ProtectedRoute user={user}>
                            <TransportePage />
                        </ProtectedRoute>
                    } />

                    <Route path='crearcuenta' element={
                        <ProtectedRoute user={user}>
                            <SesionPage />
                        </ProtectedRoute>
                    } />


                    <Route path='search' element={
                        <ProtectedRoute user={user}>
                            <BuscarPage />
                        </ProtectedRoute>
                    } />

                    <Route path='dashboard' element={
                        <ProtectedRoute user={user}>
                            <DashboardPage />
                        </ProtectedRoute>
                    } />

                    <Route path='profile' element={
                        <ProtectedRoute user={user}>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    {/* RUTAS DE ADMINISTRADOR */}

                    <Route path='profile/procesoventas' element={
                        <ProtectedRoute user={user}>
                            <AdminProcesos />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/contratos' element={
                        <ProtectedRoute user={user}>
                            {/* <ContractsCustomer /> */}
                            <Contracts />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/contratos/detalle/:id' element={
                        <ProtectedRoute user={user}>
                            {/* <ContractsCustomer /> */}
                            <ContractDetail />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/contratos/add' element={
                        <ProtectedRoute user={user}>
                            <AddContract />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/datos' element={
                        <ProtectedRoute user={user}>
                            <Datos />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/ventas' element={
                        <ProtectedRoute user={user}>
                            <Sales />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/ventas/crear-venta' element={
                        <ProtectedRoute user={user}>
                            <AddSales />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/solicitudes' element={
                        <ProtectedRoute user={user}>
                            <RequestsSale />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/solicitudes/detalle/:id' element={
                        <ProtectedRoute user={user}>
                            <RequestSaleDetail />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/subastas' element={
                        <ProtectedRoute user={user}>
                            <Auctions />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/procesoventas/subastas/detalle/:id' element={
                        <ProtectedRoute user={user}>
                            <AuctionDetail />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/pay' element={
                        <ProtectedRoute user={user}>
                            <Payments />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/addProducts' element={
                        <ProtectedRoute user={user}>
                            <AddProducts />
                        </ProtectedRoute>
                    } />
                </Routes>
            </div>
        </>
    )
}
