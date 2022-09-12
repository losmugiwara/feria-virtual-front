import { InfoAdmin, Operaciones } from '../components/IndexAuth';


export const AdminPage = () => {
    return (
        <div className='container d-flex f-row flex-wrap'>
            <InfoAdmin />
            <Operaciones />
        </div>
    )
}
