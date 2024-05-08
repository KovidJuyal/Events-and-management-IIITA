import React from "react";
import { Divider,ListItemText,ListItemButton,Collapse,List,Paper} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { updateAnswer } from "../../actions/bookings";
import { useDispatch } from "react-redux";

function Question({user,setUser,event}){
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ans,setAns] = React.useState({
        answer : "",
        ques_id : (event == undefined ? "" : event.ques_id),
    });
    const [open,setOpen] = React.useState(false);
    function handleClick(){
        setOpen(!open)
    }

    const handleSubmit = ()=>{
        const formData ={...user,...ans};
        dispatch(updateAnswer(formData,navigate));
    }
    if (event === undefined) return;
    const answer = (event.answer == undefined) ? "Not Answered yet...." : event.answer;
    const by = "By : " + event.user_id;
    return (
        <Paper className={classes.paper}>
        <ListItemButton className={classes.buttonList}  onClick={handleClick}>
        <ListItemText  primary={event.question}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemText sx={{ m: 0,p : 0,mt : -1}}secondary={by} />
            </ListItemButton>
        </List>
        {event.answer == undefined ? <div> 
            <textArea rows = "5" class = "textAreaAdminContact" type="text" required id="ques" 
                   onChange={(e)=> setAns({...ans,answer : e.target.value})}
                />
                    <button class = "buttonAnswer" onClick={handleSubmit}>Answer</button>
                    </div>
                     :<List component="div" disablePadding> 
            
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemText sx={{ m: 0,p : 0,mt : -1}}secondary={"Answer : " + answer} />
            </ListItemButton>
        </List> }
        </Collapse>
        <Divider variant="middle" />
        </Paper>

    );
}

export default Question;