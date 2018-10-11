export class Home {
  constructor(name, location) {
    this._name = name;
    this._location = location;
    this._devices = new Map();
    this._counterId = 0;
    // this._devices = [];
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
    this._devices.set(this._counterId + 1, device);
    this._counterId++;
  }
}
