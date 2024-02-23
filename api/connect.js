import mongoose from "mongoose";
import 'dotenv/config';

const URI=process.env.URI

const  db_connection=mongoose.connect(URI,{dbName:'shortenUrl'});

export default db_connection;