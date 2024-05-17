import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';


// mongoose.connect('mongodb+srv://rahul:rahul@mern-cluster.cvkqpl5.mongodb.net/?retryWrites=true&w=majority&appName=mern-cluster').then(() => {
//     console.log('Mongodb is connected');
// }).catch((err) => {
//     console.log(err);
// })

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