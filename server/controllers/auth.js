import bcrypt, { hash } from "bcrypt";
import { conn } from "../index.js"; 
const secret = "test";
export const signUp = async(req,res)=>{
    const body = req.body;
    const {emailId,Name,type,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,12);
    const userValue = [emailId,Name,hashedPassword];
    const userId = [emailId];
    const sql1 = "select (count(user_id)) as cnt from user where user_id = (?)";
    const sql2 = "insert into user(user_id,user_name,user_password) values(?)"
    try{
        conn.query(sql1,[userId],(err,result)=>{
            if (err){
                res.send(err);
            }
            else{
                if (result[0].cnt > 0){
                    res.status(201).json({ found  : 1});
                }
                else{
                    conn.query(sql2,[userValue],(err2,result2) => {
                        if (err2){
                            res.send(err2);
                        }
                        else{
                            res.status(201).json({found : 0,str : "Number of records inserted: " + result2.affectedRows,emailId : emailId,type : type});
                        }
                    });
                }
            }
        });
    }
    catch(error){
        res.send(error);
    }
}
export const signIn = async(req,res)=>{
    const body = req.body;
    const {emailId,type,password} = req.body;
    if (type === "user"){
        const hashedPassword = await bcrypt.hash(password,12);
        const userValue = [emailId,hashedPassword];
        const sql1 = "select *  from user where user_id = (?)";
        try{
            conn.query(sql1,[emailId],async (err,result)=>{
                if(err){
                    res.send(err);
                }
                else{
                    if (result.length == 0){
                        res.status(201).json({ found  : 0});
                    }
                    else{
                        const isPasswordCorrect = await bcrypt.compare(password,result[0].user_password);
                        if (isPasswordCorrect){
                            res.status(201).json({found : 1,emailId : emailId,password : result[0].user_password,type : type});
                        }
                        else{
                            res.status(201).json({ found  : 0});
                        }
                    }
                }
            });
        }
        catch(error){
            res.send(error);
        }    
    }
    else{
        const hashedPassword = await bcrypt.hash(password,12);
        const userValue = [emailId,hashedPassword];
        const sql1 = "select *  from admin where admin_id = (?)";
        try{
            conn.query(sql1,[emailId],async (err,result)=>{
                if(err){
                    res.send(err);
                }
                else{
                    if (result.length == 0){
                        res.status(201).json({ found  : 0});
                    }
                    else{
                        const isPasswordCorrect = await bcrypt.compare(password,result[0].admin_password);
                        if (isPasswordCorrect){
                            res.status(201).json({found : 1,emailId : emailId,password : result[0].admin_password,type : type});
                        }
                        else{
                            res.status(201).json({ found  : 0});
                        }
                    }
                }
            });
        }
        catch(error){
            res.send(error);
        }    
    }
}
