import { Route, Routes} from "react-router-dom";

import { Sesion } from "../auth/pages/Sesion";
import { Productos } from "../feriaVirtual/pages/Productos";
import { Transporte } from "../feriaVirtual/pages/Transporte";
import { Inicio } from "../feriaVirtual/pages/Inicio";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="productos" element={<Productos />} />
                <Route path="transporte" element={<Transporte />} />
                <Route path="login" element={<Sesion />} />

            </Routes>
        </>
    )
}
