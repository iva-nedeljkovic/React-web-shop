import React, {useState, useEffect} from "react";
import { Grid, Container } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";


const Products = ({ products, onAddToCart, onAddToFav  }) => {

  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let [isEmpty, setIsEmpty] = useState(false);
  const [allProducts, setSorted] = useState(products);
  const [sortType, setSortType] = useState();
  const [catType, setCatType] = useState();
  let results = [];
  useEffect(() => {
    setSorted(products);
  }, [products]);
  
  useEffect(() => {
    const catFilter = type => {
      if(type === 'default') {
        setSorted(products);
      } else {
        setSorted(products.filter(el => el.categories[0] ? el.categories[0].slug === type : false));
      }
    }
    catFilter(catType);
  },[catType])

  useEffect(() => {
    const priceSort = type => {
      if (type === 'asc') {
        setSorted(allProducts.sort((a, b) => b.price.raw - a.price.raw));
      } else if (type === 'desc') {
        setSorted(allProducts.sort((a, b) => a.price.raw - b.price.raw));
      } else {
        setSorted(allProducts);
      }
    }
    priceSort(sortType);
  },[sortType])

  const handleChange = event => {
    // results = [];
    setSearchTerm(event.target.value);
     results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
     setSearchResults(results);

     isEmpty = searchTerm.length == 1 ? false : true;
     setIsEmpty(isEmpty);
  };
  
  const SearchedResults = () => (
    <>
    <main className={classes.content}>
      <div className={classes.toolbar}/> 
      
      <Grid container spacing={5}>
        {
        searchResults.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
   
            <Product product={product} onAddToCart={onAddToCart} onAddToFav={onAddToFav}  ></Product>
            
          </Grid>
        ))
        }
      
      </Grid>
     
    </main>
     </>
  );

  const AllResults = () => (
    <>
    <main className={classes.content}>
    <div>
        <select className={classes.sort} style = {{marginBottom:"-1%", float:"right", marginTop:"-2%",width:'21%'}} onChange={(e) => setSortType(e.target.value)}  >
          Sort
          <option>Sort by Price</option>
          <option value={'default'}>All Prices</option>
          <option value={'asc'}> Ascending </option>
          <option value={'desc'}> Descending </option>
        </select>
      </div>
      <div>
        <select className={classes.sort} style = {{marginBottom:"-1%", float:"left", marginTop:"-2%",width:'21%'}} onChange={(e) => setCatType(e.target.value)}  >
          Sort
          <option>Sort by category</option>
          <option value={'default'}>All products</option>
          <option value={'headphones'}> Headphones </option>
          <option value={'mouses'}> Mouses </option>
          <option value = {'laptops'}> Laptops</option>
          <option value = {'tv'}> TV</option>
          <option value = {'keyboards'}> Keyboards</option>
        </select>
      </div>
    
      <Grid container spacing={5}>
        {
          allProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} onAddToFav={onAddToFav}></Product>
          </Grid>
          ))
        }
      
      </Grid>
     
    </main> 
    </>
  );
  
  return (
    <Container className={classes.content}>
     <div> <input className={classes.sort} type="text" variant="outlined" value={searchTerm} onChange = {handleChange} placeholder="Search by product name" style={{marginTop:"5rem", marginLeft:"24px", outlineColor:"gray",width:'20%'}}>
        </input> 
      </div>
      {!isEmpty ? <AllResults /> : <SearchedResults />}
    </Container>
  );
};

export default Products;
