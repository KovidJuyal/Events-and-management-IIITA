import useStyles from "./styles"
import { Grid,Container,Card,Typography,CardMedia,CardActions,Button, Paper } from "@mui/material";
import sac from "./images/sac.jpeg";
import aaa from "./images/aaa.jpeg";
import audi from "./images/auditorium.jpeg";
import bas from "./images/basketball_court.jpeg";
import clock from "./images/clock_tower.jpeg";
import ground from "./images/main_ground.jpeg";
import lt from "./images/lecture_threature.jpeg";
import cf from "./images/cafeteria.jpeg";
import {
    Link,
    useLocation,
    useNavigate,
    useParams,
 } from "react-router-dom";
import Navbarr from "../Navbarr/Navbarr";
import AdminNavbar from "../AdminNavbarr/AdminNavbarr";
function Buildings({user,setUser,buttonValue}){
    const {emailId,track} = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    if (!(user.auth == 1 && user.emailId == emailId && user.track == track)){
        console.log("in");
        navigate("/user/login");
    };
    const location = useLocation();
    const url = location.pathname;
    console.log(url);
    const small = 12,med = 6,larg = 3.6;
    return (
        <div className="backgroundBuilding">
        <div class="marginDisclaimer"></div>
        {user.type == "admin" ? <AdminNavbar user = {user} setUser={setUser} ></AdminNavbar> : <Navbarr user={user} setUser={setUser}/>}
        <Container sx={{mt : 8}}>
            <Grid container spacing = {2}>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "1"})
                            navigate(url + "/1");
                        }}>
                        <CardMedia className= {classes.media}image = {sac} />
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">SAC</Typography>
                        <Typography variant="body" component="div">Student Activity Center</Typography>
                        </div>
                    
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "2"})
                            navigate(url + "/2");
                        }}>
                        <CardMedia className= {classes.media}image = {aaa}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">AAA</Typography>
                        <Typography variant="body" component="div">Administration Block</Typography>
                        </div>
                        
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "3"})
                            navigate(url + "/3");
                        }}>
                        <CardMedia className= {classes.media}image = {audi}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">Auditorium</Typography>
                        <Typography variant="body" component="div"></Typography>
                        </div>
                       
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "4"})
                            navigate(url + "/4");
                        }}>
                        <CardMedia className= {classes.media}image = {bas}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">BasketBall Court</Typography>
                        <Typography variant="body" component="div"></Typography>
                        </div>
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "5"})
                            navigate(url + "/5");
                        }}>
                        <CardMedia className= {classes.media}image = {cf}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">Cafeteria</Typography>
                        <Typography variant="body" component="div"></Typography>
                        </div>
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "6"})
                            navigate(url + "/6");
                        }}>
                        <CardMedia className= {classes.media}image = {lt}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">LT</Typography>
                        <Typography variant="body" component="div">Lecture Threature</Typography>
                        </div>
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "7"})
                            navigate(url + "/7");
                        }}>
                        <CardMedia className= {classes.media}image = {clock}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">Clock Tower</Typography>
                        <Typography variant="body" component="div"></Typography>
                        </div>
                    </Card>
                </Paper>
                </Grid>
                <Grid className={classes.grid} item xs = {small} md={med} lg={larg}>
                <Paper elevation={4}>
                    <Card  className={classes.card} onClick={()=>{
                            setUser({...user,building : "8"})
                            navigate(url + "/8");
                        }}>
                        <CardMedia className= {classes.media}image = {ground}/>
                        <div className={classes.overlay}>
                        <Typography variant="h6" component="div">Main Ground</Typography>
                        <Typography variant="body" component="div"></Typography>
                        </div>
                    </Card>
                </Paper>
                </Grid>
                
            </Grid>
        </Container>
        </div>
    )
}
export default Buildings;