import { makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    root: {
        maxWidth: '40%',
        paddingTop:'20%',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: '30%',
        

    },
    media: {
        height: 0,
        paddingTop:'56.25%',
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    Card: {
        marginTop: '100%',
        paddingTop: '100%',
        
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        align: 'center',
        marginTop:  '100%',
    },
   
    
}));

