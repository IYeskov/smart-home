import { Bulb } from "../Devices/Bulb/Bulb";
import { Tv } from "../Devices/Tv/Tv";
import { Conditioner } from "../Devices/Conditioner/Conditioner";

export class ViewHouse {
  constructor(house, root) {
    this._house = house;
    this._root = root;
  }
  _createElement(type, className, innerText = "") {
    const element = document.createElement(type);
    element.className = className;
    element.innerText = innerText;

    return element;
  }
  _addDevice(rootElement) {
    // this._name = name;
    // this._type = type;

    // switch(this._type) {
    //   case "Bulb":
    //     this._house.addDevice(new Bulb(this._name));
    //     break;
    //   case "Tv":
    //     this._house.addDevice(new Tv(this._name));
    //     break;
    //   case "Conditioner":
    //     this._house.addDevice(new Conditioner(this._name));
    //     break;

    // }
    rootElement.innerText =
      "Здесь будет контейнер с добавлением нового устройства!";
  }
  _removeDevice(device) {
    this._house.removeDeviceByName(device);
  }
  _showDevices(rootElement) {
    this._house.devicesArray.forEach(device => {
      let deviceContainer = this._createElement("div", "deviceContainer");
      let deviceType = this._createElement("div", "deviceContainer__type"),
        btnTurnOnOff = this._createElement(
          "button",
          "btn deviceContainer__btnOnOff",
          "On / Off"
        ),
        deviceName = this._createElement("div", "deviceContainer__name"),
        deviceState = this._createElement("div", "deviceContainer__state"),
        removeDeviceBtn = this._createElement(
          "button",
          "btn deviceContainer__btn",
          "Remove"
        );
      deviceState.innerText = `State: ${device.isOn ? "вкл." : "выкл."}`;

      deviceType.innerText = `Type: ${device.constructor.name}`;
      deviceName.innerText = `Name: ${device._name}`;

      deviceContainer.appendChild(deviceType);
      deviceContainer.appendChild(deviceName);
      deviceContainer.appendChild(deviceState);
      deviceContainer.appendChild(btnTurnOnOff);

      btnTurnOnOff.addEventListener("click", () => {
        if (device._isOn) {
          device.turnOff();
        } else {
          device.turnOn();
        }
        this.render();
      });

      removeDeviceBtn.addEventListener("click", () => {
        if (confirm("Maybe you do not need bro?")) {
          this._removeDevice(device._name);
          this.render();
        }
      });

      if (device.constructor.name === "Bulb") {
        let deviceBrightness = this._createElement(
            "div",
            "deviceContainer__brightness",
            `Brightness: ${device._brightness}`
          ),
          increaseBrightness = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Brightness +"
          ),
          decreaseBrightness = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Brightness -"
          );

        increaseBrightness.addEventListener("click", () => {
          device.increaseBrightness();
          this.render();
        });
        decreaseBrightness.addEventListener("click", () => {
          device.decreaseBrightness();
          this.render();
        });

        if (device._isOn === false) {
          increaseBrightness.setAttribute("disabled", "disabled");
          decreaseBrightness.setAttribute("disabled", "disabled");
        }

        deviceContainer.appendChild(deviceBrightness);
        deviceContainer.appendChild(increaseBrightness);
        deviceContainer.appendChild(decreaseBrightness);
      } else if (device.constructor.name === "Tv") {
        let deviceVolume = this._createElement(
            "div",
            "deviceContainer__volume",
            `Volume: ${device._volume}`
          ),
          deviceChannel = this._createElement(
            "div",
            "deviceContainer__channel",
            `Channel: ${device._channel}`
          ),
          increaseVolume = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Volume +"
          ),
          decreaseVolume = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Volume -"
          ),
          increaseChannel = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Channel +"
          ),
          decreaseChannel = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Channel -"
          );

        increaseChannel.addEventListener("click", () => {
          device.increaseChannel();
          this.render();
        });

        decreaseChannel.addEventListener("click", () => {
          device.decreaseChannel();
          this.render();
        });

        increaseVolume.addEventListener("click", () => {
          device.increaseVolume();
          this.render();
        });

        decreaseVolume.addEventListener("click", () => {
          device.decreaseVolume();
          this.render();
        });

        if (device._isOn === false) {
          increaseVolume.setAttribute("disabled", "disabled");
          decreaseVolume.setAttribute("disabled", "disabled");
          increaseChannel.setAttribute("disabled", "disabled");
          decreaseChannel.setAttribute("disabled", "disabled");
        }

        deviceContainer.appendChild(deviceVolume);
        deviceContainer.appendChild(deviceChannel);
        deviceContainer.appendChild(increaseVolume);
        deviceContainer.appendChild(decreaseVolume);
        deviceContainer.appendChild(increaseChannel);
        deviceContainer.appendChild(decreaseChannel);
      } else if (device.constructor.name === "Conditioner") {
        let deviceTemperature = this._createElement(
            "div",
            "deviceContainer__temperature",
            `Temperature: ${device._temperature}`
          ),
          deviceMode = this._createElement(
            "div",
            "deviceContainer__mode",
            `Mode: ${device.mode}`
          ),
          deviceSpeed = this._createElement(
            "div",
            "deviceContainer__speed",
            `Speed: ${device.speed}`
          ),
          changeMode = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Mode"
          ),
          increaseTemperature = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Temperature +"
          ),
          decreaseTemperature = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Temperature -"
          ),
          increaseSpeed = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Speed +"
          ),
          decreaseSpeed = this._createElement(
            "button",
            "btn deviceContainer__btn",
            "Speed -"
          );

        changeMode.addEventListener("click", () => {
          device.changeMode();
          this.render();
        });

        increaseTemperature.addEventListener("click", () => {
          device.increaseTemperature();
          this.render();
        });

        decreaseTemperature.addEventListener("click", () => {
          device.decreaseTemperature();
          this.render();
        });

        increaseSpeed.addEventListener("click", () => {
          device.increaseSpeed();
          this.render();
        });

        decreaseSpeed.addEventListener("click", () => {
          device.decreaseSpeed();
          this.render();
        });

        if (device._isOn === false) {
          increaseTemperature.setAttribute("disabled", "disabled");
          decreaseTemperature.setAttribute("disabled", "disabled");
          increaseSpeed.setAttribute("disabled", "disabled");
          decreaseSpeed.setAttribute("disabled", "disabled");
          changeMode.setAttribute("disabled", "disabled");
        }

        deviceContainer.appendChild(deviceTemperature);
        deviceContainer.appendChild(deviceMode);
        deviceContainer.appendChild(deviceSpeed);
        deviceContainer.appendChild(changeMode);
        deviceContainer.appendChild(increaseTemperature);
        deviceContainer.appendChild(decreaseTemperature);
        deviceContainer.appendChild(increaseSpeed);
        deviceContainer.appendChild(decreaseSpeed);
      }

      deviceContainer.appendChild(removeDeviceBtn);
      rootElement.appendChild(deviceContainer);
    });
  }
  _removeAllDevices() {
    this._house.removeAllDevices();
  }
  render(test) {
    let root = document.getElementById("root");
    root.innerText = "";

    let aside = this._createElement("aside", "aside"),
      main = this._createElement("main", "main");

    let houseInfoContainer = this._createElement("div", "houseInfo");
    houseInfoContainer.innerHTML = `<div class="houseInfo__item">House name: ${
      this._house.name
    }</div>
        <div class="houseInfo__item">House address: ${
          this._house.location
        }</div>
        <div class="houseInfo__item">House owner: ${this._house.owner}</div>
        <div class="houseInfo__item">Added devices: ${
          this._house.devices.size
        }</div>`;

    let addDeviceBtn = this._createElement(
      "button",
      "btn btn__addDevice",
      "Add Device"
    );
    let showDevicesBtn = this._createElement(
      "button",
      "btn btn__showDevices btn_active",
      "Show Devices"
    );
    let showActiveDevicesBtn = this._createElement(
      "button",
      "btn btn__showDevices",
      "Show Active Devices"
    );
    let showInactiveDevicesBtn = this._createElement(
      "button",
      "btn btn__showDevices",
      "Show Inactive Devices"
    );
    let removeAllDevicesBtn = this._createElement(
      "button",
      "btn btn__showDevices",
      "Remove All Devices"
    );

    aside.appendChild(houseInfoContainer);
    aside.appendChild(addDeviceBtn);
    aside.appendChild(showDevicesBtn);
    aside.appendChild(showActiveDevicesBtn);
    aside.appendChild(showInactiveDevicesBtn);
    aside.appendChild(removeAllDevicesBtn);

    // *Begin* Remove All Devices *Begin* //
    removeAllDevicesBtn.addEventListener("click", () => {
      if (confirm("Maybe you do not need bro?")) {
        this._removeAllDevices();
        this.render();
      }
    });
    // *End* Remove All Devices *End* //

    // *Begin* Show Devices *Begin* //
    showDevicesBtn.addEventListener("click", () => {
      this._showDevices(main);
      this.render();
    });
    // *End* Show Devices *End* //

    // *Begin* Add Device *Begin* //
    addDeviceBtn.addEventListener("click", () => {
      this._addDevice(main);
      this.render();
    });
    // *End* Add Device *End* //

    // *Begin* --- *Begin* //
    // *End* --- *End* //

    // *Begin* --- *Begin* //
    // *End* --- *End* //

    this._showDevices(main);
    root.appendChild(aside);
    root.appendChild(main);
  }
}
