import { default as Express } from "express";
import cors from "cors";
import weatherController from "./controllers/weatherController";
import geoLocationController from "./controllers/geoLocationController";

// Class for a server application using ExpressJS
class App {
  private app: Express.Application;

  constructor() {
    this.app = Express();
    this.config();
  }

  // Configures the middleware for the server
  config() {
    this.app.use(cors());
    this.app.use(Express.json());
    this.routes();
  }

  // Defines the routes for the server
  routes() {
    this.app.get("/currentWeather", weatherController);
    this.app.get("/getGeoLocation", geoLocationController);
  }

  // Starts the server
  start() {
    this.app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  }
}

export default App;
