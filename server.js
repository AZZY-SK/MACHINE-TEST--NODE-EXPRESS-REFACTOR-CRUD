


const cl = console.log;

// cl("Server is starting...");

const express = require("express");

const cors=require("cors");

const app = express();

const port = 5000;


//middleware
app.use(cors());
app.use(express.json());

// import router
const router=require("./routes/blogrouter");

app.use("/blogs",router);

app.listen(port,()=>{
       cl(`server is running on port ${port}`)
});