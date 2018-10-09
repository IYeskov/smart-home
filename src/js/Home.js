export class Home {
  constructor(name, location) {
    this._name = name;
    this._location = location;
    this._devices = [];
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
  addDevice(device) {
    this._devices.push(device);
  }
  removeDevice(device) {
    let index = this._devices.indexOf(device);
    this._devices.splice(index, 1);
  }
  getDeviceByName(name) {
    let res;
    this._devices.forEach(device => {
      if (device.name === name) {
        res = device;
      }
    });
    return res;
  }
}
