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
  button:{
    textAlign : "center",
    margin : "10px 60px 10px",
  },
  background : {
    width: "430px",
    height:" 600px",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    left: "50%",
    top: "50%",
}
  
}));