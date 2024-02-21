import mongoose from "mongoose";

const schema = new mongoose.Schema({'name':String,'email':String,'password':String});

const Users=mongoose.model('Users',schema);

export default Users;

