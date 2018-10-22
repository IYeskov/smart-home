import { Bulb } from "../Devices/Bulb/Bulb";
import { Tv } from "../Devices/Tv/Tv";
import { Conditioner } from "../Devices/Conditioner/Conditioner";

export class ViewHouse {
  constructor(house, root) {
    this._house = house;
    this._root = root;
    this._currentState = "Show Devices";
  }
  _createElement(type, className, innerText = "") {
    const element = document.createElement(type);
    element.className = className;
    element.innerText = innerText;

    return element;
  }
  _addDevice(rootElement) {
    let addDeviceHeading = this._createElement("h2", "addDevice__heading"),
      chooseDeviceToAdd = this._createElement("div", "addDevice");
    addDeviceHeading.innerText = "Choose device";

    let addTv = this._createElement("div", "addDevice__device"),
      tvHeading = this._createElement("h4", "addDevice__deviceHeading"),
      tvButton = this._createElement(
        "button",
        "addDevice__deviceButton addDevice__deviceButton_tv"
      );
    tvButton.value = "Tv";
    tvHeading.innerText = "Tv";
    addTv.appendChild(tvHeading);
    addTv.appendChild(tvButton);
    let addBulb = this._createElement("div", "addDevice__device"),
      bulbHeading = this._createElement("h4", "addDevice__deviceHeading"),
      bulbButton = this._createElement(
        "button",
        "addDevice__deviceButton addDevice__deviceButton_bulb"
      );
    bulbButton.value = "Bulb";
    bulbHeading.innerText = "Bulb";
    addBulb.appendChild(bulbHeading);
    addBulb.appendChild(bulbButton);
    let addConditioner = this._createElement("div", "addDevice__device"),
      conditionerHeading = this._createElement(
        "h4",
        "addDevice__deviceHeading"
      ),
      conditionerButton = this._createElement(
        "button",
        "addDevice__deviceButton addDevice__deviceButton_conditioner"
      );
    conditionerButton.value = "Conditioner";
    conditionerHeading.innerText = "Conditioner";
    addConditioner.appendChild(conditionerHeading);
    addConditioner.appendChild(conditionerButton);

    tvButton.addEventListener("click", e => {
      root.appendChild(addDeviceModal);
      createDeviceButton.innerText = `Add ${e.target.value}`;
      modalHeading.innerText = `Add new ${e.target.value}`;
    });

    bulbButton.addEventListener("click", e => {
      root.appendChild(addDeviceModal);
      createDeviceButton.innerText = `Add ${e.target.value}`;
      modalHeading.innerText = `Add new ${e.target.value}`;
    });

    conditionerButton.addEventListener("click", e => {
      root.appendChild(addDeviceModal);
      createDeviceButton.innerText = `Add ${e.target.value}`;
      modalHeading.innerText = `Add new ${e.target.value}`;
    });

    let addDeviceModal = this._createElement("div", "modal"),
      modalContainer = this._createElement("form", "modal__container"),
      modalHeading = this._createElement("h4", "modal__heading"),
      inputName = this._createElement("input", "modal__input"),
      createDeviceButton = this._createElement("button", "btn modal__button"),
      cancelButton = this._createElement("div", "modal__cancelButton");

    createDeviceButton.type = "button";
    createDeviceButton.setAttribute("disabled", "disabled");
    inputName.id = "addDeviceInput";
    inputName.setAttribute("autocomplete", "off");
    inputName.placeholder = "Enter the name";

    modalContainer.appendChild(modalHeading);
    modalContainer.appendChild(inputName);
    modalContainer.appendChild(createDeviceButton);
    modalContainer.appendChild(cancelButton);
    addDeviceModal.appendChild(modalContainer);

    inputName.addEventListener("keyup", () => {
      if (
        inputName.value.length > 0 &&
        this._house.devices.has(inputName.value) !== true
      ) {
        createDeviceButton.disabled = false;
      } else {
        createDeviceButton.setAttribute("disabled", "disabled");
      }
    });

    createDeviceButton.addEventListener("click", () => {
      if (createDeviceButton.innerText === "Add Bulb") {
        this._house.addDevice(new Bulb(inputName.value));
        inputName.value = "";
      } else if (createDeviceButton.innerText === "Add Tv") {
        this._house.addDevice(new Tv(inputName.value));
        inputName.value = "";
      } else if (createDeviceButton.innerText === "Add Conditioner") {
        this._house.addDevice(new Conditioner(inputName.value));
        inputName.value = "";
      }

      this.render();
    });

    cancelButton.addEventListener("click", () => {
      this.render();
    });

    rootElement.appendChild(addDeviceHeading);
    rootElement.appendChild(addTv);
    rootElement.appendChild(addBulb);
    rootElement.appendChild(addConditioner);
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
          "btn deviceContainer__btn deviceContainer__btn_remove",
          "Remove"
        );
      deviceState.innerText = `State: ${device.isOn ? "вкл." : "выкл."}`;

      deviceType.innerText = `Type: ${device.constructor.name}`;
      deviceName.innerText = `Name: ${device._name}`;

      deviceContainer.appendChild(btnTurnOnOff);
      deviceContainer.appendChild(removeDeviceBtn);
      deviceContainer.appendChild(deviceType);
      deviceContainer.appendChild(deviceName);
      deviceContainer.appendChild(deviceState);

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

      if (device instanceof Bulb) {
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

        if (device.isOn === false) {
          increaseBrightness.setAttribute("disabled", "disabled");
          decreaseBrightness.setAttribute("disabled", "disabled");
        }

        deviceContainer.appendChild(deviceBrightness);
        deviceContainer.appendChild(increaseBrightness);
        deviceContainer.appendChild(decreaseBrightness);
      } else if (device instanceof Tv) {
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

        if (device.isOn === false) {
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
      } else if (device instanceof Conditioner) {
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
            "btn deviceContainer__btn deviceContainer__btn_mode",
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

        if (device.isOn === false) {
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

      rootElement.appendChild(deviceContainer);
    });
  }
  _showActiveInactiveDevices(rootElement, state) {
    this._house.devicesArray.forEach(device => {
      if (device.isOn === state) {
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
            "btn deviceContainer__btn deviceContainer__btn_remove",
            "Remove"
          );
        deviceState.innerText = `State: ${device.isOn ? "вкл." : "выкл."}`;

        deviceType.innerText = `Type: ${device.constructor.name}`;
        deviceName.innerText = `Name: ${device._name}`;

        deviceContainer.appendChild(btnTurnOnOff);
        deviceContainer.appendChild(removeDeviceBtn);
        deviceContainer.appendChild(deviceType);
        deviceContainer.appendChild(deviceName);
        deviceContainer.appendChild(deviceState);

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

        if (device instanceof Bulb) {
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

          if (device.isOn === false) {
            increaseBrightness.setAttribute("disabled", "disabled");
            decreaseBrightness.setAttribute("disabled", "disabled");
          }

          deviceContainer.appendChild(deviceBrightness);
          deviceContainer.appendChild(increaseBrightness);
          deviceContainer.appendChild(decreaseBrightness);
        } else if (device instanceof Tv) {
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

          if (device.isOn === false) {
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
        } else if (device instanceof Conditioner) {
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
              "btn deviceContainer__btn deviceContainer__btn_mode",
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

          if (device.isOn === false) {
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

        rootElement.appendChild(deviceContainer);
      }
    });
  }
  _removeAllDevices() {
    this._house.removeAllDevices();
  }
  render() {
    let root = document.getElementById("root");
    root.innerText = "";

    let aside = this._createElement("aside", "aside"),
      main = this._createElement("main", "main");

    let devices = this._createElement("div", "devices"),
      addDeviceContainer = this._createElement("div", "addDeviceContainer");

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
      "btn houseInfo__btn",
      "Add Device"
    );
    let showDevicesBtn = this._createElement(
      "button",
      "btn houseInfo__btn btn_active",
      "Show Devices"
    );
    let showActiveDevicesBtn = this._createElement(
      "button",
      "btn houseInfo__btn",
      "Show Active Devices"
    );
    let showInactiveDevicesBtn = this._createElement(
      "button",
      "btn houseInfo__btn",
      "Show Inactive Devices"
    );
    let removeAllDevicesBtn = this._createElement(
      "button",
      "btn houseInfo__btn",
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

    showDevicesBtn.addEventListener("click", () => {
      this._currentState = "Show Devices";
      this._showDevices(main);
      this.render();
    });

    addDeviceBtn.addEventListener("click", () => {
      this._currentState = "Add Device";
      this._addDevice(main);
      this.render();
    });

    showActiveDevicesBtn.addEventListener("click", () => {
      this._currentState = "Show Active Devices";
      this._showActiveInactiveDevices(main, true);
      this.render();
    });

    showInactiveDevicesBtn.addEventListener("click", () => {
      this._currentState = "Show Inactive Devices";
      this._showActiveInactiveDevices(main, false);
      this.render();
    });

    if (this._currentState === "Show Devices") {
      this._showDevices(devices);
      main.appendChild(devices);
    } else if (this._currentState === "Add Device") {
      this._addDevice(addDeviceContainer);
      main.appendChild(addDeviceContainer);
    } else if (this._currentState === "Show Active Devices") {
      this._showActiveInactiveDevices(devices, true);
      main.appendChild(devices);
    } else if (this._currentState === "Show Inactive Devices") {
      this._showActiveInactiveDevices(devices, false);
      main.appendChild(devices);
    }

    root.appendChild(aside);
    root.appendChild(main);
  }
}
