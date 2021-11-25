import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Tooltip,
  Button
} from "@material-ui/core";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./style";

//znaci go stai product namesto props da ne se povtoruva nadole
const Product = ({ product, onAddToCart, onAddToFav  }) => {
    // 
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom align="center">
            {product.name}
          </Typography>
          <Typography variant="h5" align="center">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>{" "}
        <br />
        <Typography
          // dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          align="center"
        />
        {/* ova dangerously znaci da go renderira kako html */}
      </CardContent>
      <CardActions className={classes.CardActions}>
        <ul align="center">
          <Button variant = "outlined" type= "button">
            <Link
              to={{
                pathname: `product/${product.id}`,
                query: { id: product.id },
              }}
            >
              View
            </Link>
          </Button>

          <Tooltip title="Add to cart" placement="top">
            <IconButton
              aria-label="Add to Cart"
              onClick={() => onAddToCart(product.id, 1)}
            >
              <AddShoppingCart />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Favorites" placement="top">
            <IconButton
              aria-label="Add to Favorites"
              onClick={() => onAddToFav(product)}>
              <Favorite />
            </IconButton>
          </Tooltip>
        </ul>
      </CardActions>
    </Card>
  );
};

export default Product;
