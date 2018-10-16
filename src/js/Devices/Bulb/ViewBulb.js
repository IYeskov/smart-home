export class ViewBulb {
  constructor(device, rootElement) {
    this._device = device;
    this._rootElement = rootElement;
    this._state = document.createElement("div");
  }
  stateChange() {
    this._state.innerText = `Состояние: ${
      this._device.isOn ? "вкл." : "выкл."
    }`;
  }
  render() {
    let bulb = document.createElement("div");
    bulb.className = "device device__bulb";

    let deviceType = document.createElement("div");
    deviceType.innerText = `Bulb`;

    let name = document.createElement("div");
    name.className = "bulb__name";
    name.innerText = `Device name: ${this._device.name}`;

    let brightness = document.createElement("div");
    brightness.className = "bulb__brightness";
    brightness.innerText = `Brightness: ${this._device.brightness}`;

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.innerHTML = "On";
    onBtn.className = "btn btn__bulb";
    onBtn.addEventListener("click", () => {
      this._device.turnOn();
      this.stateChange();
    });

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.innerHTML = "Off";
    offBtn.className = "btn btn__bulb";
    offBtn.addEventListener("click", () => {
      this._device.turnOff();
      this.stateChange();
    });

    let increaseBrightness = document.createElement("button");
    increaseBrightness.type = "button";
    increaseBrightness.innerHTML = "BrightnessUp";
    increaseBrightness.className = "btn btn_brightness";
    increaseBrightness.addEventListener("click", () => {
      this._device.increaseBrightness();
      brightness.innerText = `Brightness: ${this._device.brightness}`;
    });

    let decreaseBrightness = document.createElement("button");
    decreaseBrightness.type = "button";
    decreaseBrightness.innerHTML = "BrightnessDown";
    decreaseBrightness.className = "btn btn_brightness";
    decreaseBrightness.addEventListener("click", () => {
      this._device.decreaseBrightness();
      brightness.innerText = `Brightness: ${this._device.brightness}`;
    });

    this.stateChange();
    bulb.appendChild(deviceType);
    bulb.appendChild(name);
    bulb.appendChild(this._state);
    bulb.appendChild(brightness);
    bulb.appendChild(onBtn);
    bulb.appendChild(offBtn);
    bulb.appendChild(increaseBrightness);
    bulb.appendChild(decreaseBrightness);

    this._rootElement.appendChild(bulb);
  }
}
