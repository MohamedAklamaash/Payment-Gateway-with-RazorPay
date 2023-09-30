const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const paymentRoute = require("./routes/paymenRoute");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",paymentRoute);
app.get("/api/apikey",async(req,res)=>{
    return res.status(200).json({ key: process.env.razorpay_api_key_id });
})
app.listen(2000,()=>{
    console.log(`Server is listening on port ${process.env.port}`);
})