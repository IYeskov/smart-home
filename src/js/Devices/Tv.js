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
    channel >= this._maxChannel
      ? (this._channel = this._maxChannel)
      : channel <= this._minChannel
        ? (this._channel = this._minChannel)
        : (this._channel = channel);
  }
  get volume() {
    return this._volume;
  }
  set volume(volume) {
    volume >= this._maxVolume
      ? (this._volume = this._maxVolume)
      : volume <= this._minVolume
        ? (this._volume = this._minVolume)
        : (this._volume = volume);
  }
  increaseVolume() {
    this._volume >= this._maxVolume
      ? (this._volume = this._maxVolume)
      : this._volume++;
  }
  decreaseVolume() {
    this._volume <= this._minVolume
      ? (this._volume = this._minVolume)
      : this._volume--;
  }
  increaseChannel() {
    this._channel >= this._maxChannel
      ? (this._channel = this._minChannel)
      : this._channel++;
  }
  decreaseChannel() {
    this._channel <= this._minChannel
      ? (this._channel = this._maxChannel)
      : this._channel--;
  }
}
