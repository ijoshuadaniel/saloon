"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database"));
const UserSchema = database_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: sequelize_1.DataTypes.STRING(255),
    name: sequelize_1.DataTypes.STRING(255),
    username: sequelize_1.DataTypes.STRING(255),
    password: sequelize_1.DataTypes.STRING(255),
    token: sequelize_1.DataTypes.TEXT('long'),
}, {
    name: {
        singular: 'user',
        plural: 'user',
    },
    modelName: 'user',
    tableName: 'user',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
});
exports.default = UserSchema;
