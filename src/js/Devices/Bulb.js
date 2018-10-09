import { Devices } from "../Devices";

export class Bulb extends Devices {
  constructor(name, status, brightness = 6, maxBrightness = 10) {
    super(name, status);
    this._brightness = brightness;
    this._maxBrightness = maxBrightness;

    if (!status) this._brightness = 0;
  }
  get brightness() {
    return this._brightness;
  }
  plusBrightness() {
    this._brightness += 1;
    if (this._brightness > this._maxBrightness)
      this._brightness = this._maxBrightness;
  }
  minusBrightness() {
    this._brightness -= 1;
    if (this._brightness < 1) this._brightness = 1;
  }
}
