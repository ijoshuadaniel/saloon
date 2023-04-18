import { Sequelize } from 'sequelize';

import mysql from 'mysql2/promise';

let sqlConnection: Sequelize;

mysql
    .createConnection({
        user: 'root',
        password: '',
    })
    .then((connection) => {
        connection.query('CREATE DATABASE IF NOT EXISTS saloon;');
    });

sqlConnection = new Sequelize('saloon', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});

export default sqlConnection;
