import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { MaipoContext } from '../../../../context/maipoContext';
import { productCreate, productsApiByUser } from '../../../../helpers/products';
import { useForm } from '../../../../hooks/useForm';

export const ProductForm = () => {

    const { user, setProductsCtx } = useContext(MaipoContext);
    const [quality, setQuality] = useState();
    const [category, setCategory] = useState();
    const { id } = useSelector((state) => state.auth);

    const { nameProduct, priceProduct, stockProduct, imageProduct, kilogramProduct, formState, onInputChange } = useForm({
        nameProduct: '',
        priceProduct: '',
        stockProduct: '',
        imageProduct: '',
        kilogramProduct: 0,

    });

    const handleChangeSelectCategory = async (e) => {
        const dataCategory = e.target.value;

        setCategory(dataCategory);
    }
    const handleChangeSelectQuality = (e) => {
        const dataQuality = e.target.value;

        setQuality(dataQuality);
    }

    const onSubmit = async (e) => {

        e.preventDefault();

        const p = {
            nameProduct: formState.nameProduct,
            price: formState.priceProduct,
            stock: formState.stockProduct,
            urlImage: formState.imageProduct,
            kilogram: formState.kilogramProduct
        };

        await productCreate(id, category, quality, p);


        const productResp = await productsApiByUser(id);

        setProductsCtx(productResp);


    }
    return (

        <form className='form-product'>
            <FormControl fullWidth>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Nombre Producto"
                    maxRows={1}
                    name="nameProduct"
                    value={nameProduct}
                    onChange={onInputChange}
                    sx={{ m: 1 }}
                />
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Precio Producto"
                    maxRows={1}
                    name="priceProduct"
                    value={priceProduct}
                    onChange={onInputChange}
                    sx={{ m: 1 }}
                />
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Stock Producto"
                    maxRows={1}
                    name="stockProduct"
                    value={stockProduct}
                    onChange={onInputChange}
                    sx={{ m: 1 }}
                />
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Imagen Producto"
                    maxRows={1}
                    name="imageProduct"
                    value={imageProduct}
                    onChange={onInputChange}
                    sx={{ m: 1 }}
                />
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    id="outlined-number"
                    label="Kilogramos"
                    name="kilogramProduct"
                    value={kilogramProduct}
                    onChange={onInputChange}
                    sx={{ m: 1 }}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria Producto</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Categoria Producto"
                    onChange={handleChangeSelectCategory}
                    sx={{ m: 1 }}
                >
                    <MenuItem value={1}>Frutas</MenuItem>
                    <MenuItem value={2}>Frutas Secos</MenuItem>
                    <MenuItem value={3}>Verduras</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Calidad Producto</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quality}
                    label="Calidad Producto"
                    onChange={handleChangeSelectQuality}
                    sx={{ m: 1 }}
                >
                    <MenuItem value={1}>Extra</MenuItem>
                    <MenuItem value={2}>De Primera</MenuItem>
                    <MenuItem value={3}>De Segunda</MenuItem>
                </Select>
            </FormControl>

            <FormControl >

                <Button onClick={onSubmit} variant="contained" color='success' sx={{ m: 1 }}>Guardar Producto</Button>
            </FormControl>
        </form>

    )
}
