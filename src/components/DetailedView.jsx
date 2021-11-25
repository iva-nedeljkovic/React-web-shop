import React  from "react";
import {Card, CardMedia, CardContent, Typography, Button, IconButton, Tooltip} from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './dvstyle';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';


const DetailedView = ({products, onAddToCart}) => {
  const classes = useStyles();
  let {id} = useParams();
   let product = products.find(element => element.id===id);
    const { description } = product;
    
    console.log(product);
    return (
      <div className={classes.root} align="center">
      <Card>
        <CardMedia image={product.media.source} className = {classes.media}/>
        <CardContent align="center"> 
          <div className={classes.CardContent} >
              <Typography variant="h4"> {product.name} </Typography>
              <Typography dangerouslySetInnerHTML={{ __html:description}} gutterBottom variant="subtitle1"/>
              <Typography variant="h5">  {product.price.formatted_with_symbol}</Typography>
          </div>
          <Button component={Link} to="/" variant = "outlined" type= "button"  > Back to home </Button>
          <Tooltip title="Add to cart" placement="top">
            <IconButton
              aria-label="Add to Cart"
              onClick={() => onAddToCart(product.id, 1)}
            >
              <AddShoppingCart />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
      </div>
    )
};
export default DetailedView;