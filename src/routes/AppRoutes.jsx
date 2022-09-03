import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/router/AuthRoutes';

import { FeriaRoutes } from '../feriaVirtual/router/FeriaRoutes';

export const AppRoutes = () => {
    return (
        <>
            <Routes>

                <Route path='/cuenta/*' element={<AuthRoutes/>}/>
                <Route path="/*" element={<FeriaRoutes />} />

            </Routes>
        </>
    )
}
