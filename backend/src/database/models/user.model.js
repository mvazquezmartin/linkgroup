import mongoose, { mongo } from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model(userCollection, userSchema);

export default Users;
