import mongoose from "mongoose";
import 'dotenv/config';

const URI=process.env.URI

const  db_connection=mongoose.connect(URI,{dbName:'shortenUrl'}).then(result=>{
    return result.connection;
})
.catch(err=>{
    console.log(err.message);
});

export default db_connection;