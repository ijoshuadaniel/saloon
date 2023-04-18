"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const promise_1 = __importDefault(require("mysql2/promise"));
let sqlConnection;
promise_1.default
    .createConnection({
    user: 'root',
    password: '',
})
    .then((connection) => {
    connection.query('CREATE DATABASE IF NOT EXISTS saloon;');
});
sqlConnection = new sequelize_1.Sequelize('saloon', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});
exports.default = sqlConnection;
