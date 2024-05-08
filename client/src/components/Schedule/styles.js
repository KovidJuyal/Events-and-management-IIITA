import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "8px",
    },
  },
  paper: {
      maxWidth : "60%",
      margin : "10px auto",
    padding: "16px",
  },
  form: {
    display: 'flex',
    direction : 'column',
    justifyContent: 'space-around',
  },
}));