import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import bookingRouter from "./router/booking.js"
import authRouter from "./router/auth.js"
import cors from "cors";
dotenv.config();
const conn = mysql.createConnection({
host : "localhost",
user : "root",
password : process.env.PASSWORD,
database : "basDB"
});

const app = express();   

app.use(bodyParser.urlencoded({ limit :"30mb",   extended : true}))
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(cors());
app.use("/auth",authRouter)
app.use("/booking",bookingRouter);
const port = process.env.PORT || 5000;
//setting connection with mysql and preparing basic interface;
conn.connect((err)=>{
    if (err){
        console.log("Connection Falied");
        console.log(err);
    }
    else{
        console.log("Connected to database");
        app.listen(port,()=>{
            console.log("Successfully connected to port " + port);
        })
    }
})
export {conn};

