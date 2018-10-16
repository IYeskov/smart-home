import { Devices } from "./Devices";

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

export class ViewConditioner {
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
    let conditioner = document.createElement("div");
    conditioner.className = "device device__conditioner";

    let deviceType = document.createElement("div");
    deviceType.innerText = `Conditioner`;

    let name = document.createElement("div");
    name.className = "conditioner__name";
    name.innerText = `Device name: ${this._device.name}`;

    let temperature = document.createElement("div");
    temperature.className = "conditioner__temperature";
    temperature.innerText = `temperature: ${this._device.temperature}`;

    let mode = document.createElement("div");
    mode.className = "conditioner__mode";
    mode.innerText = `mode: ${this._device.mode}`;

    let speed = document.createElement("div");
    speed.className = "conditioner__speed";
    speed.innerText = `speed: ${this._device.speed}`;

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.innerHTML = "On";
    onBtn.className = "btn btn__conditioner";
    onBtn.addEventListener("click", () => {
      this._device.turnOn();
      this.stateChange();
    });

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.innerHTML = "Off";
    offBtn.className = "btn btn__conditioner";
    offBtn.addEventListener("click", () => {
      this._device.turnOff();
      this.stateChange();
    });
    let modeBtn = document.createElement("button");
    modeBtn.type = "button";
    modeBtn.innerHTML = "Mode";
    modeBtn.className = "btn btn__conditioner btn__conditioner_mode";
    modeBtn.addEventListener("click", () => {
      this._device.changeMode();
      mode.innerText = `mode: ${this._device.mode}`;
    });
    let increaseTemperature = document.createElement("button");
    increaseTemperature.type = "button";
    increaseTemperature.innerHTML = "tempUp";
    increaseTemperature.className = "btn btn__conditioner";
    increaseTemperature.addEventListener("click", () => {
      this._device.increaseTemperature();
      temperature.innerText = `temperature: ${this._device.temperature}`;
    });

    let decreaseTemperature = document.createElement("button");
    decreaseTemperature.type = "button";
    decreaseTemperature.innerHTML = "tempDown";
    decreaseTemperature.className = "btn btn__conditioner";
    decreaseTemperature.addEventListener("click", () => {
      this._device.decreaseTemperature();
      temperature.innerText = `temperature: ${this._device.temperature}`;
    });

    let increaseSpeed = document.createElement("button");
    increaseSpeed.type = "button";
    increaseSpeed.innerHTML = "speedUp";
    increaseSpeed.className = "btn btn__conditioner";
    increaseSpeed.addEventListener("click", () => {
      this._device.increaseSpeed();
      speed.innerText = `speed: ${this._device.speed}`;
    });

    let decreaseSpeed = document.createElement("button");
    decreaseSpeed.type = "button";
    decreaseSpeed.innerHTML = "speedDown";
    decreaseSpeed.className = "btn btn__conditioner";
    decreaseSpeed.addEventListener("click", () => {
      this._device.decreaseSpeed();
      speed.innerText = `speed: ${this._device.speed}`;
    });

    this.stateChange();
    conditioner.appendChild(deviceType);
    conditioner.appendChild(name);
    conditioner.appendChild(this._state);
    conditioner.appendChild(temperature);
    conditioner.appendChild(mode);
    conditioner.appendChild(speed);
    conditioner.appendChild(onBtn);
    conditioner.appendChild(offBtn);
    conditioner.appendChild(modeBtn);
    conditioner.appendChild(increaseTemperature);
    conditioner.appendChild(decreaseTemperature);
    conditioner.appendChild(increaseSpeed);
    conditioner.appendChild(decreaseSpeed);

    this._rootElement.appendChild(conditioner);
  }
}
