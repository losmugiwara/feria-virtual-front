import { Routes, Route } from 'react-router-dom'
import { Sesion } from '../../auth/pages'
import { NavBar } from '../components/ui'
import { BuscarPage, InicioPage, ProductosPage, TransportePage,  } from '../pages'


export const FeriaRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<InicioPage />} />
                    <Route path="productos" element={<ProductosPage />} />
                    <Route path="transporte" element={<TransportePage />} />
                    <Route path="crearcuenta" element={<Sesion />} />

                    <Route path='search' element={<BuscarPage />} />

                </Routes>
            </div>
        </>
    )
}
