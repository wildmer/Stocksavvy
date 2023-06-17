import express from "express";
import dbConnection from "./database.js";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import routesUsers from "../routes/users.routes.js";

dotenv.config();
class server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.rutas();
    this.database();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        handlePreflightRequest: (req, res) => {
          const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true,
          };
          res.writeHead(200, headers);
          res.end();
        },
      })
    );
    this.app.use(morgan("dev"));
    this.app.use(express.static("public"));
  }

  rutas() {
    this.app.use("api/user", routesUsers);
    this.app.use("/", (req, res) => {
      res.send("life");
    });
  }

  async database() {
    await dbConnection();
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Listen port 4550");
    });
  }
}

export default server;
