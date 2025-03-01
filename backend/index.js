import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.js';
dotenv.config({});
const app = express(); 

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
const corsOptions = {
    origin: "http://localhost:5173/",
    credentials: true,
};
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3000;
app.use('/api/v1/user', userRoute);

app.listen(PORT, ()=> { 
    connectDB();
    console.log(`Server listens at port ${PORT}`); 
});