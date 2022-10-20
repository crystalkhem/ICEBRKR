import express from "express";
import mongoose from "mongoose";    
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()
const app = express();
app.use(express.json())


// Accepts json data in req.body
app.use(express.json());
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to ICRBRKR'})
})


// Custom Error Handlers Through Middleware

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
