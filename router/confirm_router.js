import { error } from 'console';
import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { newUser , findUser } from '../api/user.js';

const ConfirmRouter=express.Router();

ConfirmRouter.use(cookieParser());

function authenticateToken(req,res,next){
    const token=req.cookies.reg_token;
    const secret_key=process.env.SECRET_KEY;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
   
    jwt.verify(token,secret_key,(err,user)=>{
        if(err) return err.message;
        req.user=user;
        console.log("user",req.user)
    })
    next();
}

ConfirmRouter.get('/',authenticateToken,(req,res)=>{
    try{
        
    const user=req.user;
        console.log("name",user.name);
        console.log("email",user.email);
        const users_count=findUser(user.email,user.name);
        console.log("users count:",users_count);
        users_count.then(result=>{
            if(result.length>0){
                res.status(400).send("user is already exist!");
            }
            else{
                const new_User=newUser(user.name,user.email,'123456');
                if(new_User){
                    // res.write(`<b>Registration is complete!</b><b/>name:${user.name},email:${user.email}`)
                    res.status(200).send("registration is successfull!");
                }
                else{
                    res.status(400).send("registration is failed!");
                }
        }
    })
    // res.send(`<b>Welcome to confirmation!</b><b/>name:${user_name},email:${user_email}`)
    }
    catch(error){
        console.log("registration error: ",error.message)
    }
})

export default ConfirmRouter;