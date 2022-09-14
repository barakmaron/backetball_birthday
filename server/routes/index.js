import express from 'express';
import EventsRouter from './Events.js';
import ImagesRouter from './Images.js';
import AuthRouter from './auth.js';

const routes = express.Router();

routes.use('/auth', AuthRouter);
routes.use('/images', ImagesRouter);
routes.use('/events', EventsRouter);

export default routes;