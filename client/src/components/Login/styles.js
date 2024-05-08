import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "8px auto",
      background : "#080710",
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
  button:{
    textAlign : "center",
    margin : "10px 60px 10px",
  }
}));