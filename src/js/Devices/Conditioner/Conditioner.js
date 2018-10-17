import { Devices } from "../Devices";

export class Conditioner extends Devices {
  constructor(name) {
    super(name);
    this._temperature = 21;
    this._modeList = ["cool", "heat", "dry", "fan"];
    this._mode = 1;
    this._speed = 3;
    this._minTemperature = 16;
    this._maxTemperature = 30;
    this._maxSpeed = 5;
    this._minSpeed = 1;
  }
  get temperature() {
    return this._temperature;
  }
  set temperature(temperature) {
    if (
      temperature <= this._maxTemperature &&
      temperature >= this._minTemperature
    ) {
      this._temperature = temperature;
    } else {
      throw new Error("Incorrect parameter");
    }
  }
  get speed() {
    return this._speed;
  }
  set speed(speed) {
    if (speed <= this._maxSpeed && speed >= this._minSpeed) {
      this._speed = speed;
    } else {
      throw new Error("Incorrect parameter");
    }
  }
  get mode() {
    return this._modeList[this._mode - 1];
  }
  get modeList() {
    return this._modeList;
  }
  set mode(mode) {
    if (~this._modeList.indexOf(mode)) {
      this._mode = mode;
    } else {
      throw new Error("Incorrect parameter");
    }
  }
  changeMode() {
    if (this._mode === this._modeList.length) {
      this._mode = 0;
    }
    this._mode++;
  }
  increaseSpeed() {
    if (this._speed === this._maxSpeed) {
      this._speed = this._maxSpeed;
    } else {
      this._speed++;
    }
  }
  decreaseSpeed() {
    if (this._speed === this._minSpeed) {
      this._speed = this._minSpeed;
    } else {
      this._speed--;
    }
  }
  increaseTemperature() {
    if (this._temperature === this._maxTemperature) {
      this._temperature = this._maxTemperature;
    } else {
      this._temperature++;
    }
  }
  decreaseTemperature() {
    if (this._temperature === this._minTemperature) {
      this._temperature = this._minTemperature;
    } else {
      this._temperature--;
    }
  }
}
