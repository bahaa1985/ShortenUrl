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
   res.status(200).send('rtrtrtr')
})
.post('/',urlEncoded,(req,res)=>{
    const {name,email}=req.body;
    sendConfirmationMail(name,email).then((result) => {
        if(result){
            const reg_token=jwt.sign({name:name,email:email},secret_key,{expiresIn:'1h'});
             res.cookie("reg_token",reg_token,{httpOnly:true});
            res.status(200).send("Email Sent!");
            // next();
        }
    }).catch((err) => {
        console.log('register router get error: ', err.message);
        // next();
    });
    
    
})

export default RegisterRouter;