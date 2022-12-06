import './ui.css'
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Zoom } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/auth';
import { useSnackbar } from 'notistack';

export const CardImages = ({ product }) => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const addCart = (variant) => () => {
        dispatch(addItem({
            id: product.id,
            productName: product.nameProduct,
            img: product.urlImage,
            price: product.price,
        }))
        enqueueSnackbar('producto agregado al carro',
            {
                variant, autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
    }
    return (
        <>
            <Card sx={{ naxWidth: 345 }}>
                <CardMedia
                    component='img'
                    height='140'
                    image={product.urlImage} />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {product.nameProduct}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography>
                        $ {product.price}
                    </Typography>
                    <Button onClick={addCart('success')}><Add /></Button>
                </CardActions>
            </Card>


        </>
    )
}
