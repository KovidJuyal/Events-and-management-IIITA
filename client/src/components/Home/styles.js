import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  margin : '10px 10px',
  padding: '6px 12px',
  border: '1px solid',
  width : "30%",
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  color : 'white',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: "8px auto",
      background : "#080710",
    },
  },
  paper: {
    width : "80%",
    height : "100%",
    padding: "16px",
    margin : "100px auto",
    textAlign : "center"
  },
  heading: {
      margin : "30px",
      fontFamily : "cursive",
  },
  button : {  
    width : "30%",
    
  },
}));