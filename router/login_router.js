import express from 'express';
import { loginUser } from '../api/user';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bodyParser from 'body-parser';
const urlEncoded=bodyParser.urlencoded({extended:false});

const secret_key=process.env.SECRET_KEY;

const LoginRouter= express.Router();

LoginRouter.post('/',urlEncoded,(req,res)=>{
    const {user_email,user_password}= req.body;
    loginUser(user_email,user_password)
    .then((result) => {
        const token = jwt.sign({user_id:result._id,user_name:result.user_name},secret_key,{expiresIn:'3h'});
        if(token){
            res.cookie("token",token,{httpOnly:true}).status(201).json(token);
        }
        else{
            res.status(400).send('Error 400: تأكد من الايميل و كلمة المرور!');
        }
    })
    .catch((err) => {
        res.status(500).send(`login router error ${err.message}`);
    });
})

export default LoginRouter;

