// import { mongoClient } from '../db/connect.js';
import mongoose from "mongoose";

const TABLE = "stripeUser";
//
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const USER_DB = mongoose.model(TABLE, userSchema);
export async function addUser(data) {
  try {
    const user = await USER_DB.create(data);
    return user;
  } catch (error) {
    throw error;
  }
}
export async function getUser(data) {
  try {
    const user = await USER_DB.find({
      email: data.email,
      password: data.password,
    });
    return user;
  } catch (error) {
    throw error;
  }
}
