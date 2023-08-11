import express from "express";
import bodyParser from "body-parser";
import { createUser, signIn } from "./controllers/account.js";
// import { connect } from './db/connect.js';
import { connectDB } from "./db/connect.js";
import { getSubscriptionData } from "./controllers/subscription.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  cors({
    exposedHeaders: ["Date"],
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send(`Hi, i'm live`);
});
app.post("/sign-up", createUser);
app.post("/sign-in", signIn);
app.get("/subscription-plan", getSubscriptionData);
(async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
})();
