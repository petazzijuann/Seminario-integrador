import {Router} from 'express';
import {LoteSemillaCampaniaController} from './loteSemillaCampania.controller.js';

export const loteSemillaCampania = Router();
const controller = new LoteSemillaCampaniaController();


loteSemillaCampania.get('/:id', controller.getOne.bind(controller));