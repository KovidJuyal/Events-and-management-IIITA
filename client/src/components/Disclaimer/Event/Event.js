import React from "react";
import { Divider,ListItemText,ListItemButton,Collapse,List,Paper} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from "./styles";

function Event({event}){
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  function handleClick(){
    setOpen(!open)
  }
  if (event === undefined) return;
    const venue = "Venue : " + event.building_name;
    console.log(venue); 
    const date = "Date : " + new Date(event.event_day).toLocaleDateString();
    const time = "Time : " + new Date(event.start_time).toLocaleTimeString() + " - " + new Date(event.end_time).toLocaleTimeString();
    const status = "Status : " + event.booking_status;

    return (
        <Paper className={classes.paper}>
        <ListItemButton className={classes.buttonList}  onClick={handleClick}>
        <ListItemText  primary={event.desc_Heading}/>
            {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText sx={{ m: 0,p : 0,mt : -1}}secondary={venue} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4}}>
            <ListItemText sx={{ m : 0, p : 0,mt : -1}}secondary={date} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4}}>
            <ListItemText sx={{ m : 0, p : 0,mt : -1}}secondary={time} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4}}>
            <ListItemText sx={{ m : 0, p : 0,mt : -1}}secondary={status} />
          </ListItemButton>
        </List>
      </Collapse>
        <Divider variant="middle" />
        </Paper>

    );
}

export default Event;