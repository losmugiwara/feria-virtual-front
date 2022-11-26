import { useState } from 'react';
import { NavAdmin } from '../../../ui';
import { AddUser, ListUsers } from '../datos-admin/components/IndexDatos';
import '../adminMG.css';
import { useSelector } from 'react-redux';
import { permisos } from '../../../../context/roles';


export const Datos = () => {
    const [active, setActive] = useState(1);
    const { roles } = useSelector(state => state.auth);
    return (
        <>
            {roles[0]?.authority === permisos.ROLE_ADMIN ?
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

                </div> : ''}

        </>
    )
}
