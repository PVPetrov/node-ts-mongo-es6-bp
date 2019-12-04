import * as express from "express";
import * as mongoose from "mongoose";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";

import logger from "middleware/Logger";
import router from "router";

dotenv.config();

const { PORT: port } = process.env;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(port || 3000, () => logger.success(`Listening to port ${port}`));

mongoose
  .connect("mongodb://127.0.0.1:27017/pos", { useNewUrlParser: true })
  .then(() => logger.success("MongoDB connected successfully"))
  .catch(err => logger.error(err));

mongoose.connection.on("error", error => logger.error(error));
