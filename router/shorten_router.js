import express from 'express';
import https from 'https';

const shortenRouter=express.Router();

async function validateHost(req,res,next){
    var options = {
        hostname: 'github.com',
        port: 443,
        path: '/',
        method: 'GET',
        rejectUnauthorized: true
      };
      
    https.request(options,(result)=>{
        console.log("statusCode: ", result.statusCode);
        console.log("headers: ", result.headers);
    })
    .on('error',(e)=>{
        console.error(e)
    })
    .end();

    next();
}


