import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from './routes/index.js';
import { sequelize } from "./db/models/index.js";
import dotenv from 'dotenv';
import ValidationErrorMiddleware from "./middleware/ValidationErrorMiddleware.js";
import cookieParser from 'cookie-parser';
dotenv.config();

Promise.resolve(sequelize.sync());

const port = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use([morgan("common"), cors({ origin: true, credentials: true }), express.json()]);

app.use('/', routes);

app.get("/", (req, res) => {
    return res.status(200).json("ok");
});

app.use(ValidationErrorMiddleware);

app.listen(port, () => {
    console.log(`app is up and running on port ${port}`);
});