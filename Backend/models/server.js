import express from "express";
import dbConnection from "./database.js";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";

//routes
import routesUsers from "../routes/users.routes.js";
import routesBusiness from "../routes/business.routes.js";
import routesCategories from "../routes/categories.routes.js";
import routesEntries from "../routes/entries.routes.js";
import routesOuts from "../routes/outs.routes.js";
import routesProducts from "../routes/products.routes.js";
import routesProviders from "../routes/providers.routes.js";
import routesRefunds from "../routes/refunds.routes.js";
import routesRoles from "../routes/roles.routes.js";
import routesUnitmeasurements from "../routes/unitmeasurements.routes.js";

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
    this.app.use("/api/user", routesUsers);
    this.app.use("/api/business", routesBusiness);
    this.app.use("/api/categories", routesCategories);
    this.app.use("/api/entries", routesEntries);
    this.app.use("/api/outs", routesOuts);
    this.app.use("/api/products", routesProducts);
    this.app.use("/api/providers", routesProviders);
    this.app.use("/api/refunds", routesRefunds);
    this.app.use("/api/roles", routesRoles);
    this.app.use("/api/unitmeasurements", routesUnitmeasurements);
    this.app.use("/", (req, res) => {
      res.send("life");
    });
  }

  async database() {
    await dbConnection();
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`listen http://localhost:${process.env.PORT}`);
    });
  }
}

export default server;
