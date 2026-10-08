import {Router} from 'express';
import {SiembraController} from './siembra.controller.js';

export const siembrasRouter = Router();
const controller = new SiembraController();

siembrasRouter.get('/lotes-disponibles', controller.lotesDisponibles.bind(controller));
siembrasRouter.get('/', controller.getAll.bind(controller));
siembrasRouter.get('/:id', controller.getOne.bind(controller));
siembrasRouter.post('/', controller.create.bind(controller));
