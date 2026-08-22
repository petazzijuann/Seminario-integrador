import {Router} from 'express';
import {LoteController} from './lote.controller.js';

export const loteRouter = Router();
const controller = new LoteController();

loteRouter.get('/', controller.getAll.bind(controller));
loteRouter.get('/:id', controller.getOne.bind(controller));
loteRouter.put('/:id', controller.update.bind(controller));
loteRouter.post('/', controller.create.bind(controller));
loteRouter.delete('/:id', controller.delete.bind(controller));