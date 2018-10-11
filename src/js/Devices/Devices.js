export class Devices {
  constructor(name) {
    this._name = name;
    this._isOn = false;
    this._id = home._counterId + 1;
  }
  get name() {
    return this._name;
  }
  get isTurnedOn() {
    return this._isOn;
  }
  set turnOn(status) {
    this._isOn = status;
  }
  get id() {
    return this._id;
  }
}
