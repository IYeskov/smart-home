export class View {
  constructor(device, rootElement) {
    this._device = device;
    this._rootElement = rootElement;
    this._state = document.createElement("div");
  }

  stateChange() {
    this._state.innerText = `Состояние: ${
      this._fridge.state ? "вкл." : "выкл."
    }`;
  }

  render() {
    let device = documente.createElement("div");
    device.className = "device";
  }
}
