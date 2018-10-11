import { Devices } from "./Devices";

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
    brightness >= this._maxBrightness
      ? (this._brightness = this._maxBrightness)
      : brightness <= this._minBrightness
        ? (this._brightness = this._minBrightness)
        : (this._brightness = brightness);
  }
  increaseBrightness() {
    this._brightness >= this._maxBrightness
      ? (this._brightness = this._maxBrightness)
      : this._brightness++;
  }
  decreaseBrightness() {
    this._brightness <= this._minBrightness
      ? (this._brightness = this._brightness)
      : this._brightness--;
  }
}
