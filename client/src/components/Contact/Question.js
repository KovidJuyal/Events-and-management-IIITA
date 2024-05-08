import React from "react";
import { Divider,ListItemText,ListItemButton,Collapse,List,Paper} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from "./styles";

function Question({event}){
    const classes = useStyles();
    const [open,setOpen] = React.useState(false);
    function handleClick(){
        setOpen(!open)
    }
    if (event === undefined) return;
    const answer = (event.answer == undefined) ? "Not Answered yet...." : event.answer;
    return (
        <Paper className={classes.paper}>
        <ListItemButton className={classes.buttonList}  onClick={handleClick}>
        <ListItemText  primary={event.question}/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemText sx={{ m: 0,p : 0,mt : -1}}secondary={answer} />
            </ListItemButton>
        </List>
        </Collapse>
        <Divider variant="middle" />
        </Paper>

    );
}

export default Question;