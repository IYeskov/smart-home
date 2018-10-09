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
  constructor(name, status, brightness = 6, maxBrightness = 10) {
    super(name, status);
    this._brightness = brightness;
    this._maxBrightness = maxBrightness;

    if (!status) this._brightness = 0;
  }
  get brightness() {
    return this._brightness;
  }
  plusBrightness() {
    this._brightness += 1;
    if (this._brightness > this._maxBrightness)
      this._brightness = this._maxBrightness;
  }
  minusBrightness() {
    this._brightness -= 1;
    if (this._brightness < 1) this._brightness = 1;
  }
}

class Conditioner extends Devices {
  constructor(
    name,
    status,
    temperature = 18,
    mode = "cold",
    speed = 5,
    minTemp = 16,
    maxTemp = 30,
    maxSpeed = 5
  ) {
    super(name, status);
    this._temperature = temperature;
    this._mode = mode;
    this._speed = speed;
    this._minTemp = minTemp;
    this._maxTemp = maxTemp;
    this._maxSpeed = maxSpeed;

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
  set temperature(temperature) {
    this._temperature = temperature;
    if (this._temperature < this._minTemp) this._temperature = this._minTemp;
    if (this._temperature > this._maxTemp) this._temperature = this._maxTemp;
  }
  set speed(speed) {
    this._speed = speed;
    if (this._speed > this._maxSpeed) this._speed = this._maxSpeed;
    if (this._speed < 1) this._speed = 1;
  }
  set mode(mode) {
    this._mode = mode;
  }
  temperatureUp() {
    this._temperature += 1;
    if (this._temperature > this._maxTemp) this._temperature = this._maxTemp;
  }
  temperatureDown() {
    this._temperature -= 1;
    if (this._temperature < this._minTemp) this._temperature = this._minTemp;
  }
  speedUp() {
    this._speed += 1;
    if (this._speed > this._maxSpeed) this._speed = this._maxSpeed;
  }
  speedDown() {
    this._speed -= 1;
    if (this._speed < 1) this._speed = 1;
  }
}

class Tv extends Devices {
  constructor(
    name,
    status,
    bassboosted = false,
    channel = 55,
    volume = 4,
    maxChannel = 70,
    maxVolume = 30
  ) {
    super(name, status);
    this._bassboosted = bassboosted;
    this._channel = channel;
    this._volume = volume;
    this._maxChannel = maxChannel;
    this._maxVolume = maxVolume;
    if (!status) {
      this._channel = 0;
      this._volume = 0;
    }
    if (bassboosted) {
      this._maxVolume += 20;
    }
  }
  get channel() {
    return this._channel;
  }
  set channel(channel) {
    this._channel = channel;
    if (this._channel > this._maxChannel) this._channel = 1;
    if (this._channel < 1) this._channel = this._maxChannel;
  }
  get volume() {
    return this._volume;
  }
  set volume(volume) {
    this._volume = volume;
    if (this._volume > this._maxVolume) this._volume = this._maxVolume;
    if (this._volume < 1) this._volume = 0;
  }
  volumeUp() {
    this._volume += 1;
    if (this._volume > this._maxVolume) this._volume = this._maxVolume;
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
    if (this._channel > this._maxChannel) this._channel = 1;
  }
  channelPrew() {
    this._channel -= 1;
    if (this._channel < 1) this._channel = this._maxChannel;
  }
}

const home = new Home("My Home", "Ukraine");

home.addDevice(new Bulb("Bulb"));
home.addDevice(new Tv("Tv", true, true));
home.addDevice(new Conditioner("In sleeping room", true, 21, "cold", 3));
