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
    this._devices.set(this._counterId + 1, device);
    this._counterId++;
  }
  getDeviceById(id) {
    return this._devices.get(id) || null;
  }
  getDeviceByName(name) {
    return (
      Array.from(this._devices.values()).filter(
        device => ~device.name.indexOf(name)
      )[0] || null
    );
  }
  removeDeviceById(id) {
    this._devices.delete(id);
  }
  removeAllDevices() {
    this._devices.clear();
  }
  turnOffAllDevices() {
    this._devices.forEach(device => device.turnOff());
  }
}
