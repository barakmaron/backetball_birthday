import express from 'express';
import EventsRouter from './Events.js';
import ImagesRouter from './Images.js';
import AuthRouter from './auth.js';
import ContactRouter from './Contact.js';
import RecommendationRouter from './Recommendation.js';

const routes = express.Router();

routes.use('/auth', AuthRouter);
routes.use('/images', ImagesRouter);
routes.use('/events', EventsRouter);
routes.use('/contact', ContactRouter);
routes.use('/recommendation', RecommendationRouter);

export default routes;