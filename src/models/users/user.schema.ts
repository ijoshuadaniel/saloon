import { DataTypes } from 'sequelize';
import sqlConnection from '../../database';

const UserSchema = sqlConnection.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER(),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        email: DataTypes.STRING(255),
        name: DataTypes.STRING(255),
        username: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        token: DataTypes.TEXT('long'),
    },
    {
        name: {
            singular: 'user',
            plural: 'user',
        },
        modelName: 'user',
        tableName: 'user',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
    }
);

export default UserSchema;
