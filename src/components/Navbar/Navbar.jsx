import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart, Favorite } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/sss.png';
import useStyles from './styles';

const Navbar = ({totalItems, totalfav}) => {
    const classes = useStyles();
    
    const location = useLocation();

    
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/"  variant="h6" className={classes.title} color="inherit" alignItems="center">
                        <img src={logo} alt="Commerce.js" height= "50px" className={classes.image} />
                        E-commerce Shop 
                    </Typography>
                    <div className={classes.button} >
                        <IconButton component={Link} to="/favorites" aria-label="Show favorites" color="inherit">
                            <Badge badgeContent={totalfav} color="secondary">
                                <Favorite/>
                            </Badge>
                        </IconButton>
                    </div> 
                    <div className={classes.button} >
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div> 
                </Toolbar>
               
            </AppBar>   
        </>
    )
}

export default Navbar;
