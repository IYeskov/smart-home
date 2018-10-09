import { Devices } from "../Devices";

export class Conditioner extends Devices {
  constructor(
    name,
    status,
    temperature = 18,
    mode = "cold",
    speed = 5,
    minTemp = 16,
    maxTemp = 30,
    maxSpeed = 5
  ) {
    super(name, status);
    this._temperature = temperature;
    this._mode = mode;
    this._speed = speed;
    this._minTemp = minTemp;
    this._maxTemp = maxTemp;
    this._maxSpeed = maxSpeed;

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
  set temperature(temperature) {
    this._temperature = temperature;
    if (this._temperature < this._minTemp) this._temperature = this._minTemp;
    if (this._temperature > this._maxTemp) this._temperature = this._maxTemp;
  }
  set speed(speed) {
    this._speed = speed;
    if (this._speed > this._maxSpeed) this._speed = this._maxSpeed;
    if (this._speed < 1) this._speed = 1;
  }
  set mode(mode) {
    this._mode = mode;
  }
  temperatureUp() {
    this._temperature += 1;
    if (this._temperature > this._maxTemp) this._temperature = this._maxTemp;
  }
  temperatureDown() {
    this._temperature -= 1;
    if (this._temperature < this._minTemp) this._temperature = this._minTemp;
  }
  speedUp() {
    this._speed += 1;
    if (this._speed > this._maxSpeed) this._speed = this._maxSpeed;
  }
  speedDown() {
    this._speed -= 1;
    if (this._speed < 1) this._speed = 1;
  }
}
