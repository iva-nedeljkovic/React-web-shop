import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const isEmpty = !cart.line_items?.length;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant = "subtitle1"> You have no items in your cart,
        <Link to="/" className={classes.link} to ="/"> Start adding some</Link>!
        </Typography>
        
    );
 
    if(!cart.line_items) return 'Loading';
    console.log(cart);
    const FilledCart = () => (
        <> 
        <Grid container spacing={6} >
            {cart.line_items.map((item)=>(
                <Grid item xs={10} sm={6} md={5} lg={4} justify="center"  key={item.id} >
                    <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart = {handleRemoveFromCart} />
                 </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails} style = {{marginTop:"3%"}} >
            <Typography variant ="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Cart</Button>
                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" >Checkout</Button>
            </div>
        </div>
        </>
    )
    return (
        <Container  justify="center">
            <div className={classes.toolbar} style = {{marginTop:"-3%"}}/>
            <Typography className={classes.title} variant ="h4" gutterBottom >
                Your Shopping Cart
            </Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
            
        </Container>
    )
}

export default Cart;
