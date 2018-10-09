import { Devices } from "../Devices";

export class Tv extends Devices {
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
