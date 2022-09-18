import { InfoAdmin, Operaciones } from '../components/IndexAuth';


export const AdminPage = () => {
    return (
        <div className='container d-flex f-row flex-wrap justify-content-center'>
            <InfoAdmin />
            <Operaciones />
        </div>
    )
}
