import { default as Express } from "express";
import weatherController from "./controllers/weatherController";

// Class for a server application using ExpressJS
class App {
  private app: any;

  constructor() {
    this.app = Express();
    this.config();
  }

  // Configures the middleware for the server
  config() {
    this.app.use(Express.json());
    this.routes();
  }

  // Defines the routes for the server
  routes() {
    this.app.get("/currentWeather", weatherController);
  }

  // Starts the server
  start() {
    this.app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  }
}

export default App;
