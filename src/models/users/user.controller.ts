import { Request, Response } from 'express';

class UserController {
    static signup = async (req: Request, res: Response) => {
        try {
        } catch (err) {
            console.log('UserController -> signup -> Error:', err);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    };
}

export default UserController;
