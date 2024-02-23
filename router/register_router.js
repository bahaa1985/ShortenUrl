import express from 'express';
import { newUser , findUser } from '../api/user.js';
import sendConfirmationMail from '../api/sendRegMail.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bodyParser from 'body-parser';
const urlEncoded=bodyParser.urlencoded({extended:false});

const secret_key=process.env.SECRET_KEY;

const RegisterRouter=express.Router();

RegisterRouter
.get('/',(req,res)=>{
   
})
.post('/',urlEncoded,(req,res)=>{
    const {user_name,user_email}=req.body;
    sendConfirmationMail(user_name,user_email).then((result) => {
        if(result){
            const secret_key=process.env.SECRET_KEY;
            const reg_token=jwt.sign({name:user_name,email:user_email},secret_key,{expiresIn:'1h'});
            res.cookie("reg_token",reg_token,{httpOnly:true});
            res.write("Email Sent!");
        }
    }).catch((err) => {
        console.log('register router get error: ', err.message);
    });

    // const foundUser=findUser(user_email,user_name);
    // if(foundUser){

    // }
    // else{
    //     const newUser=newUser(user_name,user_email,user_password);
    //     if(newUser){
            
    //     }
    //     else{
    
    //     }
    // }
    
})

export default RegisterRouter;