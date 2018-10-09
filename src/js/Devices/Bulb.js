import { Devices } from "../Devices";

export class Bulb extends Devices {
  constructor(name, status, brightness = 6) {
    super(name, status);
    this._brightness = brightness;

    if (!status) this._brightness = 0;
  }
  get brightness() {
    return this._brightness;
  }
  plusBrightness() {
    this._brightness += 1;
    if (this._brightness > 9) this._brightness = 10;
  }
  minusBrightness() {
    this._brightness -= 1;
    if (this._brightness < 1) this._brightness = 1;
  }
}
