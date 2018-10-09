"use strict";

class Home {
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

class Devices {
  constructor(name, status = false) {
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

class Bulb extends Devices {
  constructor(name, status, brightness = 6) {
    super(name, status);
    this._brightness = brightness;

    if (!status) this._brightness = 0;
  }
  get brightness() {
    return this._brightness;
  }
  plusBrightness() {
    this._brightness += 1;
    if (this._brightness > 9) this._brightness = 10;
  }
  minusBrightness() {
    this._brightness -= 1;
    if (this._brightness < 1) this._brightness = 1;
  }
}

class Conditioner extends Devices {
  constructor(name, status, temperature = 18, mode = "cold", speed = 5) {
    super(name, status);
    this._temperature = temperature;
    this._mode = mode;
    this._speed = speed;

    if (!status) {
      this._mode = "sleep";
      this._speed = 0;
    }
  }
  get temperature() {
    return this._temperature;
  }
  get speed() {
    return this._speed;
  }
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this._mode = mode;
  }
  temperatureUp() {
    this._temperature += 1;
  }
  temperatureDown() {
    this._temperature -= 1;
  }
  speedUp() {
    this._speed += 1;
  }
  speedDown() {
    this._speed -= 1;
  }
}

class Tv extends Devices {
  constructor(name, status, channel = 55, volume = 4) {
    super(name, status);
    this._channel = channel;
    this._volume = volume;
    if (!status) {
      this._channel = 0;
      this._volume = 0;
    }
  }
  get channel() {
    return this._channel;
  }
  set channel(channel) {
    this._channel = channel;
    if (this._channel > 70) this._channel = 1;
    if (this._channel < 1) this._channel = 70;
  }
  get volume() {
    return this._volume;
  }
  set volume(volume) {
    this._volume = volume;
    if (this._volume > 29) this._volume = 29;
    if (this._volume < 1) this._volume = 0;
  }
  volumeUp() {
    this._volume += 1;
    if (this._volume > 29) this._volume = 29;
  }
  volumeDown() {
    this._volume -= 1;
    if (this._volume < 1) this._volume = 0;
  }
  mute() {
    this._volume = 0;
  }
  channelNext() {
    this._channel += 1;
    if (this._channel > 70) this._channel = 1;
  }
  channelPrew() {
    this._channel -= 1;
    if (this._channel < 1) this._channel = 70;
  }
}

const home = new Home("My Home", "Ukraine");

home.addDevice(new Bulb("Bulb"));
home.addDevice(new Tv("Tv", true, 14, 6));
home.addDevice(new Conditioner("In sleeping room", true, 21, "cold", 3));
