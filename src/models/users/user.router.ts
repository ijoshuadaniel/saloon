import express from 'express';
import UserController from './user.controller';

const UserRouter = express.Router();

UserRouter.get('/', UserController.signup); // handles signup request check username ,email and password

export default UserRouter;
