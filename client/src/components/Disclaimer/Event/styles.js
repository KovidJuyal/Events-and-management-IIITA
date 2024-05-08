import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "8px auto",
    },
  },
  paper: {
    width : "60%",
    height : "100%",
    margin :  "10px auto ",
    textAlign : "center"
  },
  entryField : {
    width : "100%",
    margin : "0px 0px 10px",
    textAlign : "left", 
  },
  entryFieldT : {
    width : "100%",
  },
  entryFieldI : {
    position : "relative",
    display : "block",
    // width : "100%",
    display : "flex",
  },
  showInfo:{
    width : "30%",
    height : "100%",
    padding: "16px",
    margin : "40px",
  },
  showInfoEntry:{
    width : "50%",
    margin : "40px",

  },
  details:{
    paddingLeft : "13px",
  },
  
}));
