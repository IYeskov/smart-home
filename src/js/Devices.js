export class Devices {
  constructor(name) {
    this._name = name;
    this._isOn = false;
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
  get lastId() {
    return this._lastId;
  }
  set lastId(lastId) {
    this._lastId = lastId;
  }
}
