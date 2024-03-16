import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

// app.use(

//   cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// )

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Merns tack project");
});

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
  });
