import { Routes, Route } from "react-router-dom";
import { NavAdmin, NavbarCuenta } from "../ui";
import { ProductorPage, PrincipalPage, AdminPage, 
    ClienteExtPage, ClienteIntPage, TransportistaPage } from "../pages/Index";
import { Datos, InformeVentas, Pagos, ProcesosVentas } from "../components";



export const AuthRoutes = () => {
    return (
        <>
            <div className='container'>
                <NavbarCuenta />
                <Routes>
                {/* PERFILES "MAQUETA" */}
                    <Route path='perfil' element={<PrincipalPage />} />
                    {/* ADMINISTRADOR */}
                    <Route path='perfil/admin' element={<AdminPage />} />
                    <Route path='perfil/admin/datos' element={<Datos />} />
                    <Route path='perfil/admin/procesoventas' element={<ProcesosVentas />} />
                    <Route path='perfil/admin/pagos' element={<Pagos />} />
                    <Route path='perfil/admin/informeventas' element={<InformeVentas />} />
                    {/* PRODUCTOR */}
                    <Route path='perfil/productor' element={<ProductorPage />} />
                    {/* CLIENTE EXTERNO */}
                    <Route path='perfil/clienteext' element={<ClienteExtPage />} />
                    {/* CLIENTE INTERNO */}
                    <Route path='perfil/clienteint' element={<ClienteIntPage />} />
                    {/* TRANSPORTISTA */}
                    <Route path='perfil/transportista' element={<TransportistaPage />} />
                </Routes>

            </div>
        </>
    )
}
