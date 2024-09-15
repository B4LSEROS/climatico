/**
 * Converts Kelvin temperature into Celsius and Fahrenheit
 *
 * @param temperature A number property from the response object
 * @returns - An object containing two weather temperature units: Celsius and Fahrenheit
 */

export default function tempConverter(temperature: number): Object {
  return {
    celsius: Math.floor(temperature - 273.15) + "C",
    fahrenheit: Math.floor((temperature - 273.15) * (9 / 5) + 32) + "F",
  };
}
