import dotenv from 'dotenv';
import express, { Express } from 'express';
import sqlConnection from './database';
import UserModel from './models/users';
const { Sequelize } = require('sequelize');
dotenv.config();

const baseRouter = express.Router();

sqlConnection
    .sync({ alter: true })
    .then((res) => {
        console.log('Syncronization Successful!');
    })
    .catch((err: Error) => {
        console.log('Synchronization Failed!', err);
    });

const app: Express = express();
const port = process.env.PORT;

app.use('/', UserModel.routes);

app.listen(port, async () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
