import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({'actual_url':String,'user_id':{type:Types.ObjectId,ref:'Users'},
'short_url':String,'clicks_count':Number});

const Urls=mongoose.model('Models',schema);

export default Urls;
