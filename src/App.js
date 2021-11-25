import React, {useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import DetailedView from './components/DetailedView';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@fontsource/roboto';
import Favorites from './components/Favorites';
import Homepage from './Homepage';


const App = () => {
  
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
   
   
    let favorites = [];
    const fetchProducts = async() => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async () => { 
       
        setCart(await commerce.cart.retrieve());
    }
    // const fetchFavorites = async () => {
    //     setFav( await commerce.fav.retrieve());
    // }
    // const onAddToFavorites = async (productId) => {
    //     const { fav } = await commerce.fav.add(productId);
        
    //     setFav(fav);

    // }

    const onAddToFav =  (product) => {
        // const { favorites } = await commerce.favorites.add(productId);
        
        // setProducts(products);

        favorites.push(product);
        console.log(favorites);
    }

    // const handleRemoveFromFav = async (productId) => {
    //     const { products } =await commerce.products.remove(productId);

    //     setProducts(products);
    // }

    const handleAddtoCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        console.log(productId);
        setCart (cart);
        
    } 
    const handleRemoveFromCart = async (productId) => {
        const { cart } =await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart); 
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
          refreshCart();
        } catch (error) {
            // console.log(error);
          setErrorMessage(error.data.error.message);
        }
      };
    

    useEffect(()=> {
        fetchProducts();
        fetchCart();
    }, []);


    console.log(cart);
  
    
        // za da gi prikazes produktite od chec moras 
        // da gi pass preku props na product component
        //console.log(products);
    return (
        
        <Router>
        <div  >
            <Navbar totalItems={cart.total_items} totalfav={favorites.length}/>
            <Switch>
                <Route exact path="/home">
                    <Homepage/>
                </Route>
                    <Route exact path ="/" >
                        <Products products={products} onAddToCart={handleAddtoCart} onAddToFav={onAddToFav}  /> 
                    </Route>
                <Route  path="/product/:id" >
                    <DetailedView products={products} onAddToCart={handleAddtoCart} ></DetailedView>
                </Route>
               <Route exact path="/favorites">
                   <Favorites  favorites = {favorites} />
               </Route>     
                <Route exact path="/cart">
                    <Cart
                        cart={cart}
                        handleUpdateCartQty = {handleUpdateCartQty}
                        handleRemoveFromCart = {handleRemoveFromCart}
                        handleEmptyCart = {handleEmptyCart}
                    />
                </Route>
                <Route exact path="/checkout" >
                <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                </Route>
            </Switch> 
            
        </div>
        </Router>
    );
}

export default App;

