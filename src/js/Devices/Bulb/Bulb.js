import { Devices } from "../Devices";

export class Bulb extends Devices {
  constructor(name) {
    super(name);
    this._brightness = 5;
    this._maxBrightness = 15;
    this._minBrightness = 1;
  }
  get brightness() {
    return this._brightness;
  }
  set brightness(brightness) {
    if (
      brightness <= this._maxBrightness &&
      brightness >= this._minBrightness
    ) {
      this._brightness = brightness;
    } else {
      throw new Error("Incorrect parameter");
    }
  }
  increaseBrightness() {
    if (this._brightness === this._maxBrightness) {
      this._brightness = this._maxBrightness;
    } else {
      this._brightness++;
    }
  }
  decreaseBrightness() {
    if (this._brightness === this._minBrightness) {
      this._brightness = this._minBrightness;
    } else {
      this._brightness--;
    }
  }
}
