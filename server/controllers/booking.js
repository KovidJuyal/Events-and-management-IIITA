import { conn } from "../index.js"; 
import { v4 as uuidv4 } from 'uuid';
export const getBookings = async(req,res) =>{
    try {
        conn.query(`select * from bookings 
        inner join events on events.booking_id = bookings.booking_id
        inner join building on bookings.building_id = building.building_id;`,(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        })
    } catch (error) {
        res.send(error);
    }
}

export const getContacts = async(req,res)=>{
    try{
        conn.query(`select * from contacts`,(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        })
    }
    catch(error){
        res.send(error);
    }
}

export const requestContacts = async(req,res)=>{
    const body =req.body;
    const ques_id = uuidv4();
    const quesVal = [ques_id,body.question,body.emailId];
    const sql = "insert into contacts(ques_id,question,user_id) values (?)";
    try{
        conn.query(sql,[quesVal],(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                res.status(201).json("Number of records inserted: " + result.affectedRows);
            }
        });
    }
    catch(error){
        res.send(error);
    }
}

export const requestBooking = async(req,res)=>{
    const body = req.body;
    const booking_id = uuidv4();
    const bookValue = [booking_id,body.emailId,body.building_id,"REQUESTED"];
    const eventValue = [body.event_id,body.evDate,body.startTime,body.endTime,body.room,body.heading,body.body,booking_id];
    const sql1 =  "insert into bookings(booking_id,user_id,building_id,booking_status) values (?)";
    const sql2 = "insert into events(event_id,event_day,start_time,end_time,room_no,desc_heading,desc_body,booking_id) values (?)";
    try{
        conn.query(sql1,[bookValue],(err,result)=>{
            if (err){
                res.send(err);
            }
        });
        conn.query(sql2,[eventValue],(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                res.status(201).json("Number of records inserted: " + result.affectedRows);
            }
        });
    }
    catch(error){
        res.send(error);
    }
    
}

export const updateContact = async(req,res) =>{
    const body = req.body;
    const sql = "update contacts set answer = (?) where ques_id = (?)";
    const val = [body.answer,body.ques_id];
    try{
        conn.query(sql,val,(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                res.status(201).json("Number of records updated : " + result.affectedRows);
            }
        });
    }
    catch(error){
        console.error(error);
    }
}   



export const updateBooking = async(req,res) =>{
    const body = req.body;
    const sql = "update bookings set booking_status = (?) where booking_id = (?)";
    const val = [body.currStatus,body.booking_id];
    try{
        conn.query(sql,val,(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                res.status(201).json("Number of records updated : " + result.affectedRows);
            }
        });
    }
    catch(error){
        console.error(error);
    }
}   

