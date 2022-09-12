import { useState } from 'react';
import { NavAdmin } from '../../../ui';
import { ProductorAd, ClienteIntAd, ClienteExtAd, TransportistaAd } from '../datos-admin/components/IndexDatos';
import '../adminMG.css';


export const Datos = () => {
    const [active, setActive] = useState(0);

    return (
        <div className='container d-flex flex-column'>
            <NavAdmin
                active={active}
                setActive={setActive}
            />

            <ProductorAd
                active={active}
                setActive={setActive}
            />
            <ClienteIntAd
                active={active}
                setActive={setActive}
            />
            <ClienteExtAd
                active={active}
                setActive={setActive}
            />
            <TransportistaAd
                active={active}
                setActive={setActive}
            />

        </div>
    )
}
