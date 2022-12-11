import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AdminProcesos } from '../../auth/pages/IndexPages';
import { ProfilePage } from '../../auth/pages/ProfilePage';
import { MaipoContext } from '../../context/maipoContext';

import { Datos, Sales, Payments } from '../../auth/components/adminMG/IndexAdmin';
import { Shop, TransportePage, } from '../pages/Index';
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
import { AuctionCarrier } from '../components/AuctionCarrier';
import { CreateAccount, Login } from '../../auth/components/IndexAuth';
import { ProductosProducer } from '../../auth/components/producer/ProductosProducer';


export const FeriaRoutes = () => {

    const { user } = useContext(MaipoContext);

    const { status } = useSelector(state => state.auth);

    const isAuthenticating = useMemo(() => status === 'not-authenticated', [status]);


    const nav = useNavigate();

    useEffect(() => {
        if (isAuthenticating) {
            nav('/iniciarsesion');
        }
    }, [])

    return (
        <>


            <div className='container'>
                <Routes>
                    <Route path='shop' element={
                        <ProtectedRoute user={user}>
                            <Shop />
                        </ProtectedRoute>
                    } />
                    <Route path='transporte' element={
                        <ProtectedRoute user={user}>
                            <TransportePage />
                        </ProtectedRoute>
                    } />
                    <Route path='transporte/detalle/:id' element={
                        <ProtectedRoute user={user}>
                            <AuctionCarrier />
                        </ProtectedRoute>
                    } />

                    <Route path='crearcuenta' element={
                        <ProtectedRoute user={user}>
                            <CreateAccount />
                        </ProtectedRoute>
                    } />
                    <Route path='iniciarsesion' element={
                        <ProtectedRoute user={user}>
                            <Login />
                        </ProtectedRoute>
                    } />

                    <Route path='profile' element={
                        <ProtectedRoute user={user}>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path='profile/productos' element={
                        <ProtectedRoute user={user}>
                            <ProductosProducer />
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
                            <ProductosProducer />
                        </ProtectedRoute>
                    } />
                </Routes>
            </div>
        </>
    )
}
