import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "8px auto",
    },
  },
  paper: {
    width : "30%",
    height : "100%",
    padding: "16px",
    margin : "40px auto",
    textAlign : "center"
  },
  datetime : {
    display : "flex",
    flexDirection : "column",
  },
  entryField : {
    width : "100%",
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
  }
}));
