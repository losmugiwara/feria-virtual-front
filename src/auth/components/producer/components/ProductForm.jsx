import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from '../../../../hooks/useForm';

export const ProductForm = () => {

    const [quality, setQuality] = useState();

    const { nameProduct, priceProduct, stockProduct, imageProduct, kilogramProduct, formState, onInputChange } = useForm({
        nameProduct: '',
        priceProduct: '',
        priceProduct: '',
        imageProduct: '',
        kilogramProduct: 0,

    });

    const handleChangeSelect = (e) => {

    }

    const onSubmit = () => {

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
                <InputLabel id="demo-simple-select-label">Calidad Producto</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quality}
                    label="Calidad Producto"
                    onChange={handleChangeSelect}
                    sx={{ m: 1 }}
                >
                    <MenuItem value={1}>Extra</MenuItem>
                    <MenuItem value={2}>De Primera</MenuItem>
                    <MenuItem value={3}>De Segunda</MenuItem>
                </Select>
            </FormControl>

            <FormControl >

            <Button variant="contained" color='success' sx={{m: 1}}>Guardar Producto</Button>
            </FormControl>
        </form>

    )
}
