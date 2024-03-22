import User from "../models/user_model.js";

export function findUser(user_email,user_name) {
  let users_count=0;
  console.log("find user:",user_email,user_name);
  const user = User.find({ name: user_name, email: user_email}).exec();
  return user;
}

export function loginUser(user_email,user_password) {
    const user = User.findOne({ email: user_email , password: user_password}).exec();
    user.then((result) => {
      if (result) {
        return result;
      } else {
        return false;
      }
    })
    .catch(err=>{

    });
}

export function newUser(user_name, user_email, user_password) {
    const user = new User({
      name: user_name,
      email: user_email,
      password: user_password,
    });
    user.save();
    return user;
}
