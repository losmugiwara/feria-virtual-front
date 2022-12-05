import { SearchOutlined } from "@mui/icons-material";
import { Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";
import { productsApi } from "../../helpers/products";
import { CardImages } from "../components/ui/CardImages";
import { Loading } from "../components/ui/Loading";


export const ProductosPage = () => {
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false)

  const productOnChange = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(products => products.nameProduct.toLowerCase().includes(searchTerm.toLowerCase()));

    if (products.length > 1) {
      setProducts(searchedProducts);
    } else {
      productsApi().then((p) => { setProducts(p) });
    }
    console.log(products)
  }



  useEffect(() => {
    setTimeout(() => {
      productsApi().then((p) => { setProducts(p) });
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
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Buscar productos...'
              inputProps={{ 'aria-label': 'Productos...' }}
              onChange={productOnChange}
            />
            <IconButton                        >
              <SearchOutlined />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item sx={{ marginTop: '20px' }}>
          {
            (!ready) ? <Loading /> :
              <ul className='d-flex flex-wrap justify-content-center animate__animated animate__fadeIn'>
                {

                  (products?.length > 0) ? products.map((p) => (
                    <li className="card marco m-1" >
                      <CardImages
                        key={p.id}
                        product={p}
                      />
                    </li>
                  )) : <Loading />

                }
              </ul>
          }
        </Grid>
      </Grid>
    </Container>
  )
}
