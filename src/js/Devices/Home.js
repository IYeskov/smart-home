export class Home {
  constructor(name, location, owner) {
    this._name = name;
    this._location = location;
    this._owner = owner;
    this._devices = new Map();
    this._counterId = 0;
  }
  get name() {
    return this._name;
  }
  get location() {
    return this._location;
  }
  get owner() {
    return this._owner;
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
  getDeviceById(id) {
    return this._devices.get(id) || null;
  }
  removeDeviceById(id) {
    this._devices.delete(id);
  }
  getDevicesByName(name) {
    return Array.from(this._devices.values()).filter(
      device => ~device.name.indexOf(name)
    )[0];
  }
  getActiveDevices() {
    return Array.from(this._devices.values()).filter(devices => devices.isOn);
  }
  getInactiveDevices() {
    return Array.from(this._devices.values()).filter(devices => !devices.isOn);
  }
}
