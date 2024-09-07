import request from "supertest";
import App from "../src/app";
import weatherController from "../src/controllers/weatherController";

// Mock the weatherController to avoid calling the actual weather API
jest.mock("../src/controllers/weatherController", () => {
  return jest.fn((req, res) => {
    res.status(200).json({ weather: "Sunny", temperature: 25 });
  });
});

describe("App", () => {
  let appInstance: App;

  beforeAll(() => {
    appInstance = new App();
  });

  it("should respond to /currentWeather with mocked weather data", async () => {
    const response = await request(appInstance["app"]).get("/currentWeather");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("weather", "Sunny");
    expect(response.body).toHaveProperty("temperature", 25);
  });
});
