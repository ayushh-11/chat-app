const express = require("express");
const app = express();
dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const session = require('express-session');
app.use(session({
    name : 'app.sid',
    secret: "1234567890QWERTY",
    resave: true,
    saveUninitialized: true
}));
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");
const connection = require("./db/connection")

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)

app.use("/api/",userRoutes)

port = process.env.port ;
app.listen(5000,()=>{
    connection()
    console.log(`Server stared on port ${port}`);
})