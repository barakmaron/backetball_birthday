import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from './routes/index.js';
import { sequelize } from "./db/models/index.js";
import dotenv from 'dotenv';
import ValidationErrorMiddleware from "./middleware/ValidationErrorMiddleware.js";
import cookieParser from 'cookie-parser';
import ErrorHandler from './middleware/ErrorHandler.js';
import RunSeed from './db/seeders/20221002082012-admin_users.js';
dotenv.config();

Promise.resolve(sequelize.sync()).then(() => {
    const queryInterface = sequelize.getQueryInterface();
    RunSeed(queryInterface, sequelize);
});

const port = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use([morgan("common"), cors({ origin: true, credentials: true }), express.json()]);

app.use('/', routes);

app.get("/", (req, res) => {
    return res.status(200).json("ok");
});

app.use(ValidationErrorMiddleware);
app.use(ErrorHandler);

process.on('unhandledRejection', (reason, promise) => {
    console.log('Uncaught Rejection', reason.message);
    throw reason;
});

process.on('uncaughtException', (error) => {
    console.log("Uncaught Exception", error.message);
    process.exit(1);
});


app.listen(port, () => {
    console.log(`app is up and running on port ${port}`);
});