import UserController from './user.controller';
import UserRouter from './user.router';
import UserSchema from './user.schema';

const UserModel = {
    controller: UserController,
    routes: UserRouter,
    schema: UserSchema,
};

export default UserModel;
