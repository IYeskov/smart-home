import { Devices } from "../Devices";

export class Tv extends Devices {
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
