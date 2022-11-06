import { useState } from 'react';
import { NavAdmin } from '../../../ui';
import { AddUser, ListUsers } from '../datos-admin/components/IndexDatos';
import '../adminMG.css';


export const Datos = () => {
    const [active, setActive] = useState(1);

    return (
        <div className='container d-flex flex-column'>
            <NavAdmin
                active={active}
                setActive={setActive}
            />

            <AddUser
                active={active}
                setActive={setActive}
            />
            <ListUsers
                active={active}
                setActive={setActive}
            />

        </div>
    )
}
