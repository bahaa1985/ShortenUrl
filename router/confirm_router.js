import { error } from 'console';
import express from 'express';

const ConfirmRouter=express.Router();

function getCookie(){
    return document.cookie;
}

ConfirmRouter.get('/',(req,res)=>{
    try{
    // const {user_name,user_email}=req.body;
        // console.log("headers",req.headers);
    // res.send(`<b>Welcome to confirmation!</b><b/>name:${user_name},email:${user_email}`)
       console.log(getCookie())
    }
    catch{
        console.log(error)
    }
})

export default ConfirmRouter;