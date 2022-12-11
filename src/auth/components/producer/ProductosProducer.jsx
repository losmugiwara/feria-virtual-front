
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProductosForm } from './components/ProductosForm';
import { ProductosList } from './components/ProductosList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const ProductosProducer = () => {
    const nav = useNavigate()
    return (
        <div>

            <h3 className='text-center'>Productos</h3>
            <hr />
            <Button sx={{mb:'10px'}}variant='contained' color='success' onClick={() => nav(-1)}>
                <ArrowBackIcon />
            </Button>
            <div className='row'>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                    {/* AQUI PODRA AGREGAR PRODUCTOS */}
                    <ProductosForm />
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-8 col-xl-8'>
                    {/* AQUI VAN TODOS LOS PRODUCTOS DEL PRODUCTOR */}
                    <ProductosList />
                </div>
            </div>

        </div>
    )
}
