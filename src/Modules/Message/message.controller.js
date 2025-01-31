


import { Router } from "express";
import * as messageService from "./Services/message.service.js";
import { authenticationMiddleware } from "../../Middleware/index.js";
import { errorHandler } from "../../Middleware/errr-handler.middleware.js";

const messageController = Router();
messageController.post('/send', errorHandler(messageService.sendMessageService))
// messageController.get('/list', errorHandler(messageService.listMessagesService))
messageController.get('/user-messages',authenticationMiddleware(), errorHandler(messageService.listMessagesService))
export {messageController}