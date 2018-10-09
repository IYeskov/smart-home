import { Devices } from "../Devices";

export class Conditioner extends Devices {
  constructor(name, status, temperature = 18, mode = "cold", speed = 5) {
    super(name, status);
    this._temperature = temperature;
    this._mode = mode;
    this._speed = speed;

    if (!status) {
      this._mode = "sleep";
      this._speed = 0;
    }
  }
  get temperature() {
    return this._temperature;
  }
  get speed() {
    return this._speed;
  }
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
  }
  temperatureUp() {
    this._temperature += 1;
  }
  temperatureDown() {
    this._temperature -= 1;
  }
  speedUp() {
    this._speed += 1;
  }
  speedDown() {
    this._speed -= 1;
  }
}
