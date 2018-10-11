export class Home {
  constructor(name, location) {
    this._name = name;
    this._location = location;
    this._devices = new Map();
    this._counterId = 0;
  }
  get name() {
    return this._name;
  }
  get location() {
    return this._location;
  }
  get devices() {
    return this._devices;
  }
  get counterId() {
    return this._counterId;
  }
  addDevice(device) {
    this._devices.set(this._counterId + 1, device);
    this._counterId++;
  }
  removeDeviceById(id) {
    this.devices.delete(id);
  }
  getDeviceById(id) {
    return this.devices.get(id);
  }
}
