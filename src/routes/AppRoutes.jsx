import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../feriaVirtual/components/ui/NavBar';
import { InicioPage } from '../feriaVirtual/pages';

import { FeriaRoutes } from '../feriaVirtual/router/FeriaRoutes';

export const AppRoutes = () => {

    const { status } = useSelector(state => state.auth);
    const isLoading = useMemo(() => status === 'authenticated', [status]);
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
