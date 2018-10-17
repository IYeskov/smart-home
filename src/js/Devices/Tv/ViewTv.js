export class ViewTv {
  constructor(device, rootElement) {
    this._device = device;
    this._rootElement = rootElement;
    this._state = document.createElement("div");
  }
  stateChange() {
    this._state.className = "state";
    this._state.innerText = `State: ${this._device.isOn ? "вкл." : "выкл."}`;
  }
  render() {
    let tv = document.createElement("div");
    tv.className = "device device__tv";

    let deviceType = document.createElement("div");
    deviceType.innerText = `Tv`;

    let name = document.createElement("div");
    name.className = "tv__name";
    name.innerText = `Device name: ${this._device.name}`;

    let channel = document.createElement("div");
    channel.className = "tv__channel";
    channel.innerText = `Channel: ${this._device.channel}`;

    let volume = document.createElement("div");
    volume.className = "tv__volume";
    volume.innerText = `Volume: ${this._device.volume}`;

    let onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.innerHTML = "On";
    onBtn.className = "btn btn__tv";
    onBtn.addEventListener("click", () => {
      this._device.turnOn();
      this.stateChange();
    });

    let offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.innerHTML = "Off";
    offBtn.className = "btn btn__tv";
    offBtn.addEventListener("click", () => {
      this._device.turnOff();
      this.stateChange();
    });

    let increaseVolumeBtn = document.createElement("button");
    increaseVolumeBtn.type = "button";
    increaseVolumeBtn.innerHTML = "VolumeUp";
    increaseVolumeBtn.className = "btn btn__tv";
    increaseVolumeBtn.addEventListener("click", () => {
      this._device.increaseVolume();
      volume.innerText = `Volume: ${this._device.volume}`;
    });

    let decreaseVolumeBtn = document.createElement("button");
    decreaseVolumeBtn.type = "button";
    decreaseVolumeBtn.innerHTML = "VolumeDown";
    decreaseVolumeBtn.className = "btn btn__tv";
    decreaseVolumeBtn.addEventListener("click", () => {
      this._device.decreaseVolume();
      volume.innerText = `Volume: ${this._device.volume}`;
    });

    let increaseChannelBtn = document.createElement("button");
    increaseChannelBtn.type = "button";
    increaseChannelBtn.innerHTML = "ChannelUp";
    increaseChannelBtn.className = "btn btn__tv";
    increaseChannelBtn.addEventListener("click", () => {
      this._device.increaseChannel();
      channel.innerText = `Channel: ${this._device.channel}`;
    });

    let decreaseChannelBtn = document.createElement("button");
    decreaseChannelBtn.type = "button";
    decreaseChannelBtn.innerHTML = "ChannelDown";
    decreaseChannelBtn.className = "btn btn__tv";
    decreaseChannelBtn.addEventListener("click", () => {
      this._device.decreaseChannel();
      channel.innerText = `Channel: ${this._device.channel}`;
    });

    this.stateChange();
    tv.appendChild(deviceType);
    tv.appendChild(name);
    tv.appendChild(this._state);
    tv.appendChild(channel);
    tv.appendChild(volume);
    tv.appendChild(onBtn);
    tv.appendChild(offBtn);
    tv.appendChild(increaseVolumeBtn);
    tv.appendChild(decreaseVolumeBtn);
    tv.appendChild(increaseChannelBtn);
    tv.appendChild(decreaseChannelBtn);
    this._rootElement.appendChild(tv);
  }
}
