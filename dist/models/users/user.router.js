"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
const UserRouter = express_1.default.Router();
UserRouter.get('/', user_controller_1.default.signup); // handles signup request check username ,email and password
exports.default = UserRouter;
