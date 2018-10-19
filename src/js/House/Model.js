export class House {
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
  get devicesArray() {
    return Array.from(this._devices.values());
  }
  get activeDevices() {
    return Array.from(this._devices.values()).filter(devices => devices.isOn);
  }
  get inactiveDevices() {
    return Array.from(this._devices.values()).filter(devices => !devices.isOn);
  }
  get counterId() {
    return this._counterId;
  }
  addDevice(device) {
    this._counterId++;
    device.id = this._counterId;
    this._devices.set(device.name, device);
  }
  getDeviceByName(name) {
    return this._devices.get(name) || null;
  }
  removeDeviceByName(name) {
    this._devices.delete(name);
  }
  removeAllDevices() {
    this._devices.clear();
  }
  turnOffAllDevices() {
    this._devices.forEach(device => device.turnOff());
  }
}
