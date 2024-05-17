import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/api/test", async (req: Request, res: Response) => {
    res.json("Test API working");
});

app.listen(7000, () => {
    console.log("Server successfully started on Port 7000");
})