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
    sendConfirmationMail().then((result) => {
        if(result){
            // console.log('Sent!')
            res.write("Email Sent!");
        }
    }).catch((err) => {
        console.log('register router get error: ', err.message);
    });
})
.post('/',urlEncoded,(req,res)=>{
    const {user_name,user_email,user_password}=req.body;
    const foundUser=findUser(user_email,user_name);
    if(foundUser){

    }
    else{
        const newUser=newUser(user_name,user_email,user_password);
        if(newUser){
            
        }
        else{
    
        }
    }
    
})

export default RegisterRouter;