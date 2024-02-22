import User from "../models/user_model.js";

export function findUser(user_email,user_name) {
  const user = User.findOne({ name: user_name, email: user_email}).exec();
  user.then((result) => {
    if (result) {
      return true;
    } else {
      return false;
    }
  });
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
  const foundUser = findUser(user_name, user_email);
  if (!foundUser) {
    const user = new User({
      name: user_name,
      email: user_email,
      password: user_password,
    });
    user
      .save()
      .then((result) => {
        if (result) {
          console.log(result);
          return result;
        }
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });
  }
}
