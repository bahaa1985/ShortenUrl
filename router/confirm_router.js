import express from 'express';

const ConfirmRouter=express.Router();

ConfirmRouter.get('/',(req,res)=>{
    res.send("Welcome to confirmation!")
})

export default ConfirmRouter;