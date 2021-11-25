import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
//import useStyles from './Home' ;
import simpson from '../assets/simpson.png';

const Home = () => {
    //const classes = useStyles(); 

        return (
            <div>
            <img  src={simpson} style={{position:'relative',width:'100%',height:'100%'}} />
                <Typography variant= "h2" style= {{marginTop:"5rem",position:'absolute',left:'50%',top:'11%'}} > Welcome to our shop! <br/>
                Thank you for choosing us.<br/> Happy shopping!
                <br/>
                <Button variant = "contained" type= "button" size = 'large' >
            <Link to={{ pathname: `/`}}> <b>Go to products</b> </Link>
            </Button>
                </Typography>
            
            </div>
            
        )
}

export default Home
