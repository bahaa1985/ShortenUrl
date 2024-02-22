import express from 'express';
import https from 'https';
import 'dotenv/config';
import db_connection from './api/connect.js'
import RegisterRouter from './router/register_router.js';
import ConfirmRouter from './router/confirm_router.js';
const app=express();

const URI= process.env.URI;

app.get('/',(req,res)=>{

    db_connection.then(result=>{
        if(result){
            console.log(`${result.db.databaseName} is connected!`);
            res.write(`<h1>Welcome!</h1></b>${URI}`)
        }
    })
 

})

app.use('/register',RegisterRouter);
app.use('/confirm',ConfirmRouter);
app.listen(5000,()=>{
    console.log('app is listening on port 5000')
})