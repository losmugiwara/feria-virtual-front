import { Route, Routes} from "react-router-dom";

import { FeriaRoutes } from "../feriaVirtual/router/FeriaRoutes";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                
                

                <Route path="/*" element={<FeriaRoutes/>}/>

            </Routes>
        </>
    )
}
