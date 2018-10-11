import { Devices } from "./Devices";
import { runInThisContext } from "vm";

export class Conditioner extends Devices {
  constructor(name) {
    super(name);
    this._temperature = 21;
    this._modeList = ["cool", "heat", "dry", "fan"];
    this._mode = this._modeList[0];
    this._speed = 3;
    this._minTemperature = 16;
    this._maxTemperature = 30;
    this._maxSpeed = 5;
    this._minSpeed = 1;
    this._id;
  }
  get temperature() {
    return this._temperature;
  }
  set temperature(temperature) {
    this._temperature >= this._maxTemperature
      ? (this._temperature = this._maxTemperature)
      : this._temperature <= this._minTemperature
        ? (this._temperature = this._minTemperature)
        : (this._temperature = temperature);
  }
  get speed() {
    return this._speed;
  }
  set speed(speed) {
    this._speed >= this._maxSpeed
      ? (this._speed = this._maxSpeed)
      : this._speed <= this._minSpeed
        ? (this._speed = this._minSpeed)
        : (this._speed = speed);
  }
  get mode() {
    return this._mode;
  }
  get modeList() {
    return this._modeList;
  }
  set mode(mode) {
    this._modeList.indexOf(mode) !== -1
      ? (this._mode = mode)
      : (this._mode = this._mode);
  }
  increaseSpeed() {
    this._speed >= this._maxSpeed
      ? (this._speed = this._maxSpeed)
      : this._speed++;
  }
  decreaseSpeed() {
    this._speed <= this._minSpeed
      ? (this._speed = this._minSpeed)
      : this._speed--;
  }
  increaseTemperature() {
    this._temperature >= this._maxTemperature
      ? (this._temperature = this._maxTemperature)
      : this._temperature++;
  }
  decreaseTemperature() {
    this._temperature <= this._minTemperature
      ? (this._temperature = this._minTemperature)
      : this._temperature--;
  }
}
