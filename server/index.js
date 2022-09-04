import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use([morgan("common"), cors(), express.json()]);

app.get("/", (req, res) => {
    return res.status(200).json("ok");
});

app.listen(port, () => {
    console.log(`app is up and running on port ${port}`);
});