import { Devices } from "./Devices";

export class Tv extends Devices {
  constructor(name) {
    super(name);
    this._channel = 1;
    this._volume = 6;
    this._maxChannel = 70;
    this._minChannel = 1;
    this._maxVolume = 50;
    this._minVolume = 0;
  }
  get maxChannel() {
    return this._maxChannel;
  }
  get channel() {
    return this._channel;
  }
  set channel(channel) {
    if (channel <= this._maxChannel && channel >= this._minChannel) {
      this._channel = channel;
    } else {
      throw new Error("Incorrect parameter");
    }
  }
  get volume() {
    return this._volume;
  }
  set volume(volume) {
    if (volume <= this._maxVolume && channel >= this._minVolume) {
      this._volume = volume;
    } else {
      throw new Error("Incorrect parameter");
    }
  }
  increaseVolume() {
    if (this._volume === this._maxVolume) {
      this._volume = this._maxVolume;
    } else {
      this._volume++;
    }
  }
  decreaseVolume() {
    if (this._volume === this._minVolume) {
      this._volume = this._minVolume;
    } else {
      this._volume--;
    }
  }
  increaseChannel() {
    if (this._channel === this._maxChannel) {
      this._channel = this._minChannel;
    } else {
      this._channel++;
    }
  }
  decreaseChannel() {
    if (this._channel === this._minChannel) {
      this._channel = this._maxChannel;
    } else {
      this._channel--;
    }
  }
}
