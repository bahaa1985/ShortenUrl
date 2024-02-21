import express from 'express';
import { newUser } from '../api/user';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bodyParser from 'body-parser';
const urlEncoded=bodyParser.urlencoded({extended:false});

const secret_key=process.env.SECRET_KEY;

const RegisterRouter=express.Router();

RegisterRouter.post('/',urlEncoded,(req,res)=>{
    const {user_name,user_email,user_password}=req.body;
    const newUser=newUser(user_name,user_email,user_password);
    if(newUser){
        
    }
    else{

    }
})