import {Router} from 'express';
import {SiembraController} from './siembra.controller.js';

export const siembrasRouter = Router();
const controller = new SiembraController();

siembrasRouter.post('/', controller.create.bind(controller));