"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("./user.controller"));
const user_router_1 = __importDefault(require("./user.router"));
const user_schema_1 = __importDefault(require("./user.schema"));
const UserModel = {
    controller: user_controller_1.default,
    routes: user_router_1.default,
    schema: user_schema_1.default,
};
exports.default = UserModel;
