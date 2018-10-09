export class Devices {
  constructor(name, status) {
    this._name = name;
    this._status = status;
  }
  get name() {
    return this._name;
  }
  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }
}
