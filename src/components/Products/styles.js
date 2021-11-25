import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(3),
    
  },
  root: {
    flexGrow: 1,
  },
  sort: {
    width: "20%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  
 
  },
  
}));