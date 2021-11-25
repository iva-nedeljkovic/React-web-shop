import React, {useState, useEffect} from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  Button
} from "@material-ui/core";
import useStyles from "./fav";
import { Link } from "react-router-dom";

const Favorites = ({ favorites  }) => {
  // console.log(favorites.length);

  // const isEmpty = favorites.length >= 1 ? false : true;
  const classes = useStyles();
  let [isEmpty, setIsEmpty] = useState(favorites.length >= 1 ? false : true);
  const [allFav, setFav] = useState(favorites);
  const [deleteItem, setDeletedItem] = useState(null);


  useEffect(() => {
      setDeletedItem(deleteItem);
      const removeProduct = () => {
        if(deleteItem){
          setFav(allFav.filter(element  => element.id != deleteItem.id));
          setIsEmpty(allFav == [] ? true : false);
          // console.log(isEmpty)
          // if(allFav == []){
          //   setFav([]);
          // }
        }
      };
      removeProduct();
  }, [deleteItem]);

  const EmptyFav = () => (
    <Typography variant="subtitle1" style = {{marginTop:"5%"}}> You have no favorite items,  
    <Link to="/"> Start adding some ! </Link>
    </Typography>
  );
  // const {idd} = favorites;
  // const removeProduct = () => {
  //   let deleted = favorites.find(element => element.id==id);
  //  favorites.splice(deleted,1)
  //  console.log(favorites);
  // };
  // console.log(allFav);
  

  const FilledFav = () => (
    <>
      <Grid container spacing={6} style = {{marginTop:"5%"}}> 
        {allFav.map((item) => (
          <Grid item xs={10} sm={6} md={5} lg={4} justify="center" key={item.id} >
            <Card>
              <CardMedia image={item.media.source} className = {classes.media}/>
              <CardContent  align="center">
                <div >
                <Typography variant="h4"> {item.name} </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: item.description }} gutterBottom />
                  <Typography> {item.price.formatted_with_symbol}</Typography>
                </div>
                  <Button variant = "outlined" type= "button" onClick={()=> setDeletedItem(item) } > Remove</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
  console.log("vleze");
  return (
    <Container justify="center">
      <div  />
      <Typography variant="h4" >
        Your Favorites
      </Typography>
      {isEmpty ? <EmptyFav /> : <FilledFav />}
    </Container>
  );
};

export default Favorites;
