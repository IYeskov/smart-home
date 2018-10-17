export class Devices {
  constructor(name) {
    this._name = name;
    this._isOn = false;
    this._isShow = true;
    this._id = null;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get isOn() {
    return this._isOn;
  }
  turnOn() {
    this._isOn = true;
  }
  turnOff() {
    this._isOn = false;
  }
  show() {
    this._isShow = true;
  }
  hide() {
    this._isShow = false;
  }
}
