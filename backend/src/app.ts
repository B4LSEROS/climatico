import { default as Express } from "express";

// Class for a server application using ExpressJS
class App {
  private app: any;

  constructor() {
    this.app = Express();
  }

  // Configures the middelware for the server
  config() {
    this.app.use(Express.json());
  }

  // Defines the routes for the server
  routes() {}

  // Starts the server
  start() {
    this.app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  }
}

export default App;
