import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.write('<h1>Welcome!</h1>')
})

app.listen(5000,()=>{
    console.log('app is listening on port 5000')
})