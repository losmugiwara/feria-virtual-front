
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../feriaVirtual/components/ui/NavBar';
import { InicioPage } from '../feriaVirtual/pages';

import { FeriaRoutes } from '../feriaVirtual/router/FeriaRoutes';

export const AppRoutes = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/*' element={<FeriaRoutes />} />
                <Route path='home' element={<InicioPage />} />
            </Routes>
        </>
    )
}
