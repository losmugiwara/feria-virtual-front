
import { Grid, InputBase, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import { productsApi } from "../../helpers/products";
import { CardImages } from "../components/ui/CardImages";
import { Loading } from "../components/ui/Loading";

export const InicioPage = () => {

    const [products, setProducts] = useState([]);
    const [tableProducts, setTableProducts] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [ready, setReady] = useState(false);

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar = (terminoBusqueda) => {
        const resultadosBusqueda = tableProducts.filter((elemento) => {
            if (elemento.nameProduct.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setProducts(resultadosBusqueda);
    }
    const onSumit = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value);
    }


    useEffect(() => {
        setTimeout(() => {
            productsApi().then((p) => { setProducts(p), setTableProducts(p) });
            setReady(true);
        }, 1000)

        return () => {
            setProducts();
            setReady(false);
        }
    }, [])
    productsApi();
    return (
        <Container>
            <Typography variant='h3' align='center'>Productos</Typography>
            <Grid container justifyContent='center' direction='column'>
                <Grid container justifyContent='center'
                    sx={{ marginTop: '10px' }}>
                    <Paper
                        component='form'
                        onSubmit={onSumit}
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder='Buscar productos...'
                            inputProps={{ 'aria-label': 'Productos...' }}
                            onChange={handleChange}
                            name='product'
                            value={busqueda}
                        />
                    </Paper>
                </Grid>
                <Grid item sx={{ marginTop: '20px' }}>
                    {
                        (!ready) ? <Loading /> :
                            <ul className='d-flex flex-wrap justify-content-center animate__animated animate__fadeIn'>
                                {

                                    (products?.length > 0) ? products.map((p) => (

                                        ( p.stock >= 1 ) ?  
                                        <li className="card marco m-1" >
                                            <CardImages
                                                key={p.id}
                                                product={p}
                                            />
                                        </li> : ""
                                    )) : <Typography>Producto no encontrado</Typography>

                                }
                            </ul>
                    }
                </Grid>
            </Grid>
        </Container>
    )
}
