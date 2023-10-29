import express from "express";
import { PORT, mongoDBURL } from './config.js '; 
import mongoose from "mongoose";
import { Customer } from './models/customerModel.js';
import customerRoute from  './routes/customerRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());
/*app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'], 
        allowedHeaders: ['Content-Type'],
    })
);*/


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to Admin');
});

app.use('/customer', customerRoute);




mongoose.connect(mongoDBURL).then(() =>{
    console.log('App is coonected to database');
    app.listen(PORT, () => {
       console.log('server is running at port : ${PORT}');
    });
})
.catch((error) => {
   console.log(error);

});