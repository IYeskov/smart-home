/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "../"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./js/Devices/Bulb/Bulb.js":
      /*!*********************************!*\
  !*** ./js/Devices/Bulb/Bulb.js ***!
  \*********************************/
      /*! exports provided: Bulb */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bulb", function() { return Bulb; });\n/* harmony import */ var _Devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Devices */ "./js/Devices/Devices.js");\n\n\nclass Bulb extends _Devices__WEBPACK_IMPORTED_MODULE_0__["Devices"] {\n  constructor(name) {\n    super(name);\n    this._brightness = 5;\n    this._maxBrightness = 15;\n    this._minBrightness = 1;\n  }\n  get brightness() {\n    return this._brightness;\n  }\n  set brightness(brightness) {\n    if (\n      brightness <= this._maxBrightness &&\n      brightness >= this._minBrightness\n    ) {\n      this._brightness = brightness;\n    } else {\n      throw new Error("Incorrect parameter");\n    }\n  }\n  increaseBrightness() {\n    if (this._brightness === this._maxBrightness) {\n      this._brightness = this._maxBrightness;\n    } else {\n      this._brightness++;\n    }\n  }\n  decreaseBrightness() {\n    if (this._brightness === this._minBrightness) {\n      this._brightness = this._minBrightness;\n    } else {\n      this._brightness--;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Bulb/Bulb.js?'
        );

        /***/
      },

    /***/ "./js/Devices/Bulb/ViewBulb.js":
      /*!*************************************!*\
  !*** ./js/Devices/Bulb/ViewBulb.js ***!
  \*************************************/
      /*! exports provided: ViewBulb */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBulb", function() { return ViewBulb; });\nclass ViewBulb {\n  constructor(device, rootElement) {\n    this._device = device;\n    this._rootElement = rootElement;\n    this._state = document.createElement("div");\n  }\n  stateChange() {\n    this._state.className = "state";\n    this._state.innerText = `State: ${this._device.isOn ? "вкл." : "выкл."}`;\n  }\n  render() {\n    let bulb = document.createElement("div");\n    bulb.className = "device device__bulb";\n\n    let deviceType = document.createElement("div");\n    deviceType.innerText = `Bulb`;\n\n    let name = document.createElement("div");\n    name.className = "bulb__name";\n    name.innerText = `Device name: ${this._device.name}`;\n\n    let brightness = document.createElement("div");\n    brightness.className = "bulb__brightness";\n    brightness.innerText = `Brightness: ${this._device.brightness}`;\n\n    let onBtn = document.createElement("button");\n    onBtn.type = "button";\n    onBtn.innerHTML = "On";\n    onBtn.className = "btn btn__bulb";\n    onBtn.addEventListener("click", () => {\n      this._device.turnOn();\n      this.stateChange();\n    });\n\n    let offBtn = document.createElement("button");\n    offBtn.type = "button";\n    offBtn.innerHTML = "Off";\n    offBtn.className = "btn btn__bulb";\n    offBtn.addEventListener("click", () => {\n      this._device.turnOff();\n      this.stateChange();\n    });\n\n    let increaseBrightness = document.createElement("button");\n    increaseBrightness.type = "button";\n    increaseBrightness.innerHTML = "BrightnessUp";\n    increaseBrightness.className = "btn btn_brightness";\n    increaseBrightness.addEventListener("click", () => {\n      this._device.increaseBrightness();\n      brightness.innerText = `Brightness: ${this._device.brightness}`;\n    });\n\n    let decreaseBrightness = document.createElement("button");\n    decreaseBrightness.type = "button";\n    decreaseBrightness.innerHTML = "BrightnessDown";\n    decreaseBrightness.className = "btn btn_brightness";\n    decreaseBrightness.addEventListener("click", () => {\n      this._device.decreaseBrightness();\n      brightness.innerText = `Brightness: ${this._device.brightness}`;\n    });\n\n    this.stateChange();\n    bulb.appendChild(deviceType);\n    bulb.appendChild(name);\n    bulb.appendChild(this._state);\n    bulb.appendChild(brightness);\n    bulb.appendChild(onBtn);\n    bulb.appendChild(offBtn);\n    bulb.appendChild(increaseBrightness);\n    bulb.appendChild(decreaseBrightness);\n\n    this._rootElement.appendChild(bulb);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Bulb/ViewBulb.js?'
        );

        /***/
      },

    /***/ "./js/Devices/Conditioner/Conditioner.js":
      /*!***********************************************!*\
  !*** ./js/Devices/Conditioner/Conditioner.js ***!
  \***********************************************/
      /*! exports provided: Conditioner */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conditioner", function() { return Conditioner; });\n/* harmony import */ var _Devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Devices */ "./js/Devices/Devices.js");\n\n\nclass Conditioner extends _Devices__WEBPACK_IMPORTED_MODULE_0__["Devices"] {\n  constructor(name) {\n    super(name);\n    this._temperature = 21;\n    this._modeList = ["cool", "heat", "dry", "fan"];\n    this._mode = 1;\n    this._speed = 3;\n    this._minTemperature = 16;\n    this._maxTemperature = 30;\n    this._maxSpeed = 5;\n    this._minSpeed = 1;\n  }\n  get temperature() {\n    return this._temperature;\n  }\n  set temperature(temperature) {\n    if (\n      temperature <= this._maxTemperature &&\n      temperature >= this._minTemperature\n    ) {\n      this._temperature = temperature;\n    } else {\n      throw new Error("Incorrect parameter");\n    }\n  }\n  get speed() {\n    return this._speed;\n  }\n  set speed(speed) {\n    if (speed <= this._maxSpeed && speed >= this._minSpeed) {\n      this._speed = speed;\n    } else {\n      throw new Error("Incorrect parameter");\n    }\n  }\n  get mode() {\n    return this._modeList[this._mode - 1];\n  }\n  get modeList() {\n    return this._modeList;\n  }\n  set mode(mode) {\n    if (~this._modeList.indexOf(mode)) {\n      this._mode = mode;\n    } else {\n      throw new Error("Incorrect parameter");\n    }\n  }\n  changeMode() {\n    if (this._mode === this._modeList.length) {\n      this._mode = 0;\n    }\n    this._mode++;\n  }\n  increaseSpeed() {\n    if (this._speed === this._maxSpeed) {\n      this._speed = this._maxSpeed;\n    } else {\n      this._speed++;\n    }\n  }\n  decreaseSpeed() {\n    if (this._speed === this._minSpeed) {\n      this._speed = this._minSpeed;\n    } else {\n      this._speed--;\n    }\n  }\n  increaseTemperature() {\n    if (this._temperature === this._maxTemperature) {\n      this._temperature = this._maxTemperature;\n    } else {\n      this._temperature++;\n    }\n  }\n  decreaseTemperature() {\n    if (this._temperature === this._minTemperature) {\n      this._temperature = this._minTemperature;\n    } else {\n      this._temperature--;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Conditioner/Conditioner.js?'
        );

        /***/
      },

    /***/ "./js/Devices/Conditioner/ViewConditioner.js":
      /*!***************************************************!*\
  !*** ./js/Devices/Conditioner/ViewConditioner.js ***!
  \***************************************************/
      /*! exports provided: ViewConditioner */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewConditioner", function() { return ViewConditioner; });\nclass ViewConditioner {\n  constructor(device, rootElement) {\n    this._device = device;\n    this._rootElement = rootElement;\n    this._state = document.createElement("div");\n  }\n  stateChange() {\n    this._state.className = "state";\n    this._state.innerText = `State: ${this._device.isOn ? "вкл." : "выкл."}`;\n  }\n  render() {\n    let conditioner = document.createElement("div");\n    conditioner.className = "device device__conditioner";\n\n    let deviceType = document.createElement("div");\n    deviceType.innerText = `Conditioner`;\n\n    let name = document.createElement("div");\n    name.className = "conditioner__name";\n    name.innerText = `Device name: ${this._device.name}`;\n\n    let temperature = document.createElement("div");\n    temperature.className = "conditioner__temperature";\n    temperature.innerText = `temperature: ${this._device.temperature}`;\n\n    let mode = document.createElement("div");\n    mode.className = "conditioner__mode";\n    mode.innerText = `mode: ${this._device.mode}`;\n\n    let speed = document.createElement("div");\n    speed.className = "conditioner__speed";\n    speed.innerText = `speed: ${this._device.speed}`;\n\n    let onBtn = document.createElement("button");\n    onBtn.type = "button";\n    onBtn.innerHTML = "On";\n    onBtn.className = "btn btn__conditioner";\n    onBtn.addEventListener("click", () => {\n      this._device.turnOn();\n      this.stateChange();\n    });\n\n    let offBtn = document.createElement("button");\n    offBtn.type = "button";\n    offBtn.innerHTML = "Off";\n    offBtn.className = "btn btn__conditioner";\n    offBtn.addEventListener("click", () => {\n      this._device.turnOff();\n      this.stateChange();\n    });\n    let modeBtn = document.createElement("button");\n    modeBtn.type = "button";\n    modeBtn.innerHTML = "Mode";\n    modeBtn.className = "btn btn__conditioner btn__conditioner_mode";\n    modeBtn.addEventListener("click", () => {\n      this._device.changeMode();\n      mode.innerText = `mode: ${this._device.mode}`;\n    });\n    let increaseTemperature = document.createElement("button");\n    increaseTemperature.type = "button";\n    increaseTemperature.innerHTML = "tempUp";\n    increaseTemperature.className = "btn btn__conditioner";\n    increaseTemperature.addEventListener("click", () => {\n      this._device.increaseTemperature();\n      temperature.innerText = `temperature: ${this._device.temperature}`;\n    });\n\n    let decreaseTemperature = document.createElement("button");\n    decreaseTemperature.type = "button";\n    decreaseTemperature.innerHTML = "tempDown";\n    decreaseTemperature.className = "btn btn__conditioner";\n    decreaseTemperature.addEventListener("click", () => {\n      this._device.decreaseTemperature();\n      temperature.innerText = `temperature: ${this._device.temperature}`;\n    });\n\n    let increaseSpeed = document.createElement("button");\n    increaseSpeed.type = "button";\n    increaseSpeed.innerHTML = "speedUp";\n    increaseSpeed.className = "btn btn__conditioner";\n    increaseSpeed.addEventListener("click", () => {\n      this._device.increaseSpeed();\n      speed.innerText = `speed: ${this._device.speed}`;\n    });\n\n    let decreaseSpeed = document.createElement("button");\n    decreaseSpeed.type = "button";\n    decreaseSpeed.innerHTML = "speedDown";\n    decreaseSpeed.className = "btn btn__conditioner";\n    decreaseSpeed.addEventListener("click", () => {\n      this._device.decreaseSpeed();\n      speed.innerText = `speed: ${this._device.speed}`;\n    });\n\n    this.stateChange();\n    conditioner.appendChild(deviceType);\n    conditioner.appendChild(name);\n    conditioner.appendChild(this._state);\n    conditioner.appendChild(temperature);\n    conditioner.appendChild(mode);\n    conditioner.appendChild(speed);\n    conditioner.appendChild(onBtn);\n    conditioner.appendChild(offBtn);\n    conditioner.appendChild(modeBtn);\n    conditioner.appendChild(increaseTemperature);\n    conditioner.appendChild(decreaseTemperature);\n    conditioner.appendChild(increaseSpeed);\n    conditioner.appendChild(decreaseSpeed);\n\n    this._rootElement.appendChild(conditioner);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Conditioner/ViewConditioner.js?'
        );

        /***/
      },

    /***/ "./js/Devices/Devices.js":
      /*!*******************************!*\
  !*** ./js/Devices/Devices.js ***!
  \*******************************/
      /*! exports provided: Devices */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devices", function() { return Devices; });\nclass Devices {\n  constructor(name) {\n    this._name = name;\n    this._isOn = false;\n    this._id = null;\n  }\n  get id() {\n    return this._id;\n  }\n  set id(id) {\n    this._id = id;\n  }\n  get name() {\n    return this._name;\n  }\n  set name(name) {\n    this._name = name;\n  }\n  get isOn() {\n    return this._isOn;\n  }\n  turnOn() {\n    this._isOn = true;\n  }\n  turnOff() {\n    this._isOn = false;\n  }\n  show() {\n    this._isShow = true;\n  }\n  hide() {\n    this._isShow = false;\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Devices.js?'
        );

        /***/
      },

    /***/ "./js/Devices/Tv/Tv.js":
      /*!*****************************!*\
  !*** ./js/Devices/Tv/Tv.js ***!
  \*****************************/
      /*! exports provided: Tv */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tv", function() { return Tv; });\n/* harmony import */ var _Devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Devices */ "./js/Devices/Devices.js");\n\n\nclass Tv extends _Devices__WEBPACK_IMPORTED_MODULE_0__["Devices"] {\n  constructor(name) {\n    super(name);\n    this._channel = 1;\n    this._volume = 6;\n    this._maxChannel = 70;\n    this._minChannel = 1;\n    this._maxVolume = 50;\n    this._minVolume = 0;\n  }\n  get maxChannel() {\n    return this._maxChannel;\n  }\n  get channel() {\n    return this._channel;\n  }\n  set channel(channel) {\n    if (channel <= this._maxChannel && channel >= this._minChannel) {\n      this._channel = channel;\n    } else {\n      throw new Error("Incorrect parameter");\n    }\n  }\n  get volume() {\n    return this._volume;\n  }\n  set volume(volume) {\n    if (volume <= this._maxVolume && channel >= this._minVolume) {\n      this._volume = volume;\n    } else {\n      throw new Error("Incorrect parameter");\n    }\n  }\n  increaseVolume() {\n    if (this._volume === this._maxVolume) {\n      this._volume = this._maxVolume;\n    } else {\n      this._volume++;\n    }\n  }\n  decreaseVolume() {\n    if (this._volume === this._minVolume) {\n      this._volume = this._minVolume;\n    } else {\n      this._volume--;\n    }\n  }\n  increaseChannel() {\n    if (this._channel === this._maxChannel) {\n      this._channel = this._minChannel;\n    } else {\n      this._channel++;\n    }\n  }\n  decreaseChannel() {\n    if (this._channel === this._minChannel) {\n      this._channel = this._maxChannel;\n    } else {\n      this._channel--;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Tv/Tv.js?'
        );

        /***/
      },

    /***/ "./js/Devices/Tv/ViewTv.js":
      /*!*********************************!*\
  !*** ./js/Devices/Tv/ViewTv.js ***!
  \*********************************/
      /*! exports provided: ViewTv */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTv", function() { return ViewTv; });\nclass ViewTv {\n  constructor(device, rootElement) {\n    this._device = device;\n    this._rootElement = rootElement;\n    this._state = document.createElement("div");\n    this._isShow = true;\n  }\n  stateChange() {\n    this._state.className = "state";\n    this._state.innerText = `State: ${this._device.isOn ? "вкл." : "выкл."}`;\n  }\n  render() {\n    let tv = document.createElement("div");\n    tv.className = "device device__tv";\n\n    let deviceType = document.createElement("div");\n    deviceType.innerText = `Tv`;\n\n    let name = document.createElement("div");\n    name.className = "tv__name";\n    name.innerText = `Device name: ${this._device.name}`;\n\n    let channel = document.createElement("div");\n    channel.className = "tv__channel";\n    channel.innerText = `Channel: ${this._device.channel}`;\n\n    let volume = document.createElement("div");\n    volume.className = "tv__volume";\n    volume.innerText = `Volume: ${this._device.volume}`;\n\n    let onBtn = document.createElement("button");\n    onBtn.type = "button";\n    onBtn.innerHTML = "On";\n    onBtn.className = "btn btn__tv";\n    onBtn.addEventListener("click", () => {\n      this._device.turnOn();\n      this.stateChange();\n    });\n\n    let offBtn = document.createElement("button");\n    offBtn.type = "button";\n    offBtn.innerHTML = "Off";\n    offBtn.className = "btn btn__tv";\n    offBtn.addEventListener("click", () => {\n      this._device.turnOff();\n      this.stateChange();\n    });\n\n    let increaseVolumeBtn = document.createElement("button");\n    increaseVolumeBtn.type = "button";\n    increaseVolumeBtn.innerHTML = "VolumeUp";\n    increaseVolumeBtn.className = "btn btn__tv";\n    increaseVolumeBtn.addEventListener("click", () => {\n      this._device.increaseVolume();\n      volume.innerText = `Volume: ${this._device.volume}`;\n    });\n\n    let decreaseVolumeBtn = document.createElement("button");\n    decreaseVolumeBtn.type = "button";\n    decreaseVolumeBtn.innerHTML = "VolumeDown";\n    decreaseVolumeBtn.className = "btn btn__tv";\n    decreaseVolumeBtn.addEventListener("click", () => {\n      this._device.decreaseVolume();\n      volume.innerText = `Volume: ${this._device.volume}`;\n    });\n\n    let increaseChannelBtn = document.createElement("button");\n    increaseChannelBtn.type = "button";\n    increaseChannelBtn.innerHTML = "ChannelUp";\n    increaseChannelBtn.className = "btn btn__tv";\n    increaseChannelBtn.addEventListener("click", () => {\n      this._device.increaseChannel();\n      channel.innerText = `Channel: ${this._device.channel}`;\n    });\n\n    let decreaseChannelBtn = document.createElement("button");\n    decreaseChannelBtn.type = "button";\n    decreaseChannelBtn.innerHTML = "ChannelDown";\n    decreaseChannelBtn.className = "btn btn__tv";\n    decreaseChannelBtn.addEventListener("click", () => {\n      this._device.decreaseChannel();\n      channel.innerText = `Channel: ${this._device.channel}`;\n    });\n\n\n    this.stateChange();\n    tv.appendChild(deviceType);\n    tv.appendChild(name);\n    tv.appendChild(this._state);\n    tv.appendChild(channel);\n    tv.appendChild(volume);\n    tv.appendChild(onBtn);\n    tv.appendChild(offBtn);\n    tv.appendChild(increaseVolumeBtn);\n    tv.appendChild(decreaseVolumeBtn);\n    tv.appendChild(increaseChannelBtn);\n    tv.appendChild(decreaseChannelBtn);\n    this._rootElement.appendChild(tv);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Devices/Tv/ViewTv.js?'
        );

        /***/
      },

    /***/ "./js/Home/Model.js":
      /*!**************************!*\
  !*** ./js/Home/Model.js ***!
  \**************************/
      /*! exports provided: Home */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });\nclass Home {\n  constructor(name, location, owner) {\n    this._name = name;\n    this._location = location;\n    this._owner = owner;\n    this._devices = new Map();\n    this._counterId = 0;\n  }\n  get name() {\n    return this._name;\n  }\n  get location() {\n    return this._location;\n  }\n  get owner() {\n    return this._owner;\n  }\n  get devices() {\n    return this._devices;\n  }\n  get activeDevices() {\n    return Array.from(this._devices.values()).filter(devices => devices.isOn);\n  }\n  get inactiveDevices() {\n    return Array.from(this._devices.values()).filter(devices => !devices.isOn);\n  }\n  get counterId() {\n    return this._counterId;\n  }\n  addDevice(device) {\n    this._counterId++;\n    device.id = this._counterId;\n    this._devices.set(device.id, device);\n  }\n  getDeviceById(id) {\n    return this._devices.get(id) || null;\n  }\n  getDeviceByName(name) {\n    return (\n      Array.from(this._devices.values()).filter(\n        device => ~device.name.indexOf(name)\n      )[0] || null\n    );\n  }\n  removeDeviceById(id) {\n    this._devices.delete(id);\n  }\n  removeAllDevices() {\n    this._devices.clear();\n  }\n  turnOffAllDevices() {\n    this._devices.forEach(device => device.turnOff());\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Home/Model.js?'
        );

        /***/
      },

    /***/ "./js/Home/View.js":
      /*!*************************!*\
  !*** ./js/Home/View.js ***!
  \*************************/
      /*! exports provided: ViewHome */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHome", function() { return ViewHome; });\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./js/Home/Model.js");\n/* harmony import */ var _Devices_Tv_Tv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Devices/Tv/Tv */ "./js/Devices/Tv/Tv.js");\n/* harmony import */ var _Devices_Tv_ViewTv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Devices/Tv/ViewTv */ "./js/Devices/Tv/ViewTv.js");\n/* harmony import */ var _Devices_Bulb_Bulb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Devices/Bulb/Bulb */ "./js/Devices/Bulb/Bulb.js");\n/* harmony import */ var _Devices_Bulb_ViewBulb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Devices/Bulb/ViewBulb */ "./js/Devices/Bulb/ViewBulb.js");\n/* harmony import */ var _Devices_Conditioner_Conditioner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Devices/Conditioner/Conditioner */ "./js/Devices/Conditioner/Conditioner.js");\n/* harmony import */ var _Devices_Conditioner_ViewConditioner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Devices/Conditioner/ViewConditioner */ "./js/Devices/Conditioner/ViewConditioner.js");\n\n\n\n\n\n\n\n\nclass ViewHome {\n  constructor(home, rootElement) {\n    this._home = home;\n    this._rootElement = rootElement;\n  }\n  render() {\n    let root = document.getElementById("root");\n\n    root.innerHTML = "";\n    let sidebar = document.createElement("div");\n    sidebar.className = "sidebar";\n    let main = document.createElement("div");\n    main.className = "main";\n    let header = document.createElement("div");\n\n    header.className = "header";\n    header.innerHTML = `\n            <div class="header__info">Name: ${this._home.name}</div>\n            <div class="header__info">Address: ${this._home.location}</div>\n            <div class="header__info">Owner: ${this._home.owner}</div>\n            <div class="header__info">Devices: ${\n              this._home.devices.size\n            }</div>`;\n    main.appendChild(header);\n    root.appendChild(sidebar);\n    root.appendChild(main);\n    // -------------------------- //\n    let btnAddDevice = document.createElement("button");\n    btnAddDevice.className = "btn";\n    btnAddDevice.innerText = "Add new Device";\n    sidebar.appendChild(btnAddDevice);\n\n    let btnShowDevices = document.createElement("button");\n    btnShowDevices.className = "btn";\n    btnShowDevices.innerText = "Show Devices";\n    sidebar.appendChild(btnShowDevices);\n    let container = document.createElement("div");\n    container.className = "container";\n\n    // [Add Device]\n\n    let addDeviceList = document.createElement("ul");\n    addDeviceList.className = "addDeviceList";\n\n    let addDeviceHeading = document.createElement("h3");\n    addDeviceHeading.className = "addDeviceList__heading";\n    addDeviceHeading.innerText = "Choose Device";\n\n    let addTv = document.createElement("li");\n    addTv.className = "addDevice__tv";\n    let addTvBtn = document.createElement("button");\n    // addTvBtn.innerText = "Add TV";\n    addTvBtn.className = "btn addDeviceList__btn addDeviceList__btn_tv";\n    addTvBtn.value = "Add TV";\n    addTv.appendChild(addTvBtn);\n\n    let addBulb = document.createElement("li");\n    addBulb.className = "addDevice__bulb";\n    let addBulbBtn = document.createElement("button");\n    // addBulbBtn.innerText = "Add Bulb";\n    addBulbBtn.className = "btn addDeviceList__btn addDeviceList__btn_bulb";\n    addBulbBtn.value = "Add Bulb";\n    addBulb.appendChild(addBulbBtn);\n\n    let addConditioner = document.createElement("li");\n    addConditioner.className = "addDevice__conditioner";\n    let addConditionerBtn = document.createElement("button");\n    // addConditionerBtn.innerText = "Add Conditioner";\n    addConditionerBtn.className =\n      "btn addDeviceList__btn addDeviceList__btn_conditioner";\n    addConditionerBtn.value = "Add Conditioner";\n\n    addConditioner.appendChild(addConditionerBtn);\n\n    addDeviceList.appendChild(addTv);\n    addDeviceList.appendChild(addBulb);\n    addDeviceList.appendChild(addConditioner);\n\n    btnAddDevice.addEventListener("click", () => {\n      container.innerHTML = "";\n      container.appendChild(addDeviceHeading);\n      container.appendChild(addDeviceList);\n    });\n    let addDeviceModal = e => {\n      let input = document.createElement("input");\n      input.placeholder = "Add device name";\n      let btn = document.createElement("button");\n      btn.innerText = e.target.value;\n\n      let modal = document.createElement("div");\n      modal.className = "modal";\n\n      btn.addEventListener("click", () => {\n        if (btn.innerText === "Add TV") {\n          this._home.addDevice(new _Devices_Tv_Tv__WEBPACK_IMPORTED_MODULE_1__["Tv"](input.value));\n          input.value = "";\n        } else if (btn.innerText === "Add Bulb") {\n          this._home.addDevice(new _Devices_Bulb_Bulb__WEBPACK_IMPORTED_MODULE_3__["Bulb"](input.value));\n          input.value = "";\n        } else if (btn.innerText === "Add Conditioner") {\n          this._home.addDevice(new _Devices_Conditioner_Conditioner__WEBPACK_IMPORTED_MODULE_5__["Conditioner"](input.value));\n          input.value = "";\n        }\n        this.render();\n      });\n\n      modal.appendChild(input);\n      modal.appendChild(btn);\n      container.appendChild(modal);\n      container.removeChild(addDeviceList);\n    };\n    addTvBtn.addEventListener("click", addDeviceModal, {\n      once: true\n    });\n    addBulbBtn.addEventListener("click", addDeviceModal, {\n      once: true\n    });\n    addConditionerBtn.addEventListener("click", addDeviceModal, {\n      once: true\n    });\n    // End of [Add Device]\n    // [Show Devices]\n\n    btnShowDevices.addEventListener("click", () => {\n      container.innerHTML = "";\n      let a = Array.from(this._home.devices.values()).filter(\n        devices => devices.name\n      );\n      a.forEach(item => {\n        let deleteBtn = document.createElement("button");\n        deleteBtn.type = "button";\n        deleteBtn.innerText = "Delete";\n        if (item.constructor.name === "Tv") {\n          let a = new _Devices_Tv_ViewTv__WEBPACK_IMPORTED_MODULE_2__["ViewTv"](item, container);\n          a.render();\n          let d = Array.from(document.getElementsByClassName("device__tv"));\n          d.forEach((item, i) => {\n            d[i].appendChild(deleteBtn);\n          });\n        } else if (item.constructor.name === "Bulb") {\n          let a = new _Devices_Bulb_ViewBulb__WEBPACK_IMPORTED_MODULE_4__["ViewBulb"](item, container);\n          a.render();\n          let d = Array.from(document.getElementsByClassName("device__bulb"));\n          d.forEach((item, i) => {\n            d[i].appendChild(deleteBtn);\n          });\n        } else if (item.constructor.name === "Conditioner") {\n          let a = new _Devices_Conditioner_ViewConditioner__WEBPACK_IMPORTED_MODULE_6__["ViewConditioner"](item, container);\n          a.render();\n          let d = Array.from(\n            document.getElementsByClassName("device__conditioner")\n          );\n          d.forEach((item, i) => {\n            d[i].appendChild(deleteBtn);\n          });\n        }\n        deleteBtn.addEventListener("click", () => {\n          this._home.removeDeviceById(item.id);\n          this.render();\n        });\n      });\n\n      main.appendChild(container);\n    });\n\n    // End of [Show devices]\n    main.appendChild(container);\n    // Show active Devices //\n    let btnShowActiveDevices = document.createElement("button");\n    btnShowActiveDevices.className = "btn";\n    btnShowActiveDevices.innerText = "Show Active Devices";\n    sidebar.appendChild(btnShowActiveDevices);\n\n    btnShowActiveDevices.addEventListener("click", () => {\n      container.innerHTML = "";\n      let a = this._home.activeDevices;\n      a.forEach(item => {\n        let deleteBtn = document.createElement("button");\n        deleteBtn.type = "button";\n        deleteBtn.innerText = "Delete";\n        if (item.constructor.name === "Tv") {\n          let a = new _Devices_Tv_ViewTv__WEBPACK_IMPORTED_MODULE_2__["ViewTv"](item, container);\n          a.render();\n          let b = document.getElementsByClassName("device__tv")[0];\n          b.appendChild(deleteBtn);\n        } else if (item.constructor.name === "Bulb") {\n          let a = new _Devices_Bulb_ViewBulb__WEBPACK_IMPORTED_MODULE_4__["ViewBulb"](item, container);\n          a.render();\n          let b = document.getElementsByClassName("device__bulb")[0];\n          b.appendChild(deleteBtn);\n        } else if (item.constructor.name === "Conditioner") {\n          let a = new _Devices_Conditioner_ViewConditioner__WEBPACK_IMPORTED_MODULE_6__["ViewConditioner"](item, container);\n          a.render();\n          let b = document.getElementsByClassName("device__conditioner")[0];\n          b.appendChild(deleteBtn);\n        }\n        deleteBtn.addEventListener("click", () => {\n          this._home.removeDeviceById(item.id);\n          this.render();\n        });\n      });\n\n      main.appendChild(container);\n    });\n\n    // Show inactive Devices //\n    let btnShowInctiveDevices = document.createElement("button");\n    btnShowInctiveDevices.className = "btn";\n    btnShowInctiveDevices.innerText = "Show InActive Devices";\n    sidebar.appendChild(btnShowInctiveDevices);\n\n    btnShowInctiveDevices.addEventListener("click", () => {\n      container.innerHTML = "";\n      let a = this._home.inactiveDevices;\n      a.forEach(item => {\n        let deleteBtn = document.createElement("button");\n        deleteBtn.type = "button";\n        deleteBtn.innerText = "Delete";\n        if (item.constructor.name === "Tv") {\n          let a = new _Devices_Tv_ViewTv__WEBPACK_IMPORTED_MODULE_2__["ViewTv"](item, container);\n          a.render();\n          let b = document.getElementsByClassName("device__tv")[0];\n          b.appendChild(deleteBtn);\n        } else if (item.constructor.name === "Bulb") {\n          let a = new _Devices_Bulb_ViewBulb__WEBPACK_IMPORTED_MODULE_4__["ViewBulb"](item, container);\n          a.render();\n          let b = document.getElementsByClassName("device__bulb")[0];\n          b.appendChild(deleteBtn);\n        } else if (item.constructor.name === "Conditioner") {\n          let a = new _Devices_Conditioner_ViewConditioner__WEBPACK_IMPORTED_MODULE_6__["ViewConditioner"](item, container);\n          a.render();\n          let b = document.getElementsByClassName("device__conditioner")[0];\n          b.appendChild(deleteBtn);\n        }\n        deleteBtn.addEventListener("click", () => {\n          console.log(item.name);\n          this._home.removeDeviceById(item.id);\n          this.render();\n        });\n      });\n\n      main.appendChild(container);\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./js/Home/View.js?'
        );

        /***/
      },

    /***/ "./js/index.js":
      /*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/View */ "./js/Home/View.js");\n/* harmony import */ var _Home_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home/Model */ "./js/Home/Model.js");\n/* harmony import */ var _Devices_Tv_Tv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Devices/Tv/Tv */ "./js/Devices/Tv/Tv.js");\n/* harmony import */ var _Devices_Tv_ViewTv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Devices/Tv/ViewTv */ "./js/Devices/Tv/ViewTv.js");\n/* harmony import */ var _Devices_Bulb_Bulb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Devices/Bulb/Bulb */ "./js/Devices/Bulb/Bulb.js");\n/* harmony import */ var _Devices_Conditioner_Conditioner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Devices/Conditioner/Conditioner */ "./js/Devices/Conditioner/Conditioner.js");\n\n\n\n\n\n\n\n\nlet home = new _Home_Model__WEBPACK_IMPORTED_MODULE_1__["Home"]("My Home", "UA 21", "Igor");\n// home.addDevice(new Tv("My Tv"));\n// home.addDevice(new Bulb("My Bulb"));\n// home.addDevice(new Conditioner("Air"));\nconst viewHome = new _Home_View__WEBPACK_IMPORTED_MODULE_0__["ViewHome"](home, document.getElementById("root"));\nviewHome.render();\n\nwindow.home = home;\nwindow.viewHome = viewHome;\n\n\n//# sourceURL=webpack:///./js/index.js?'
        );

        /***/
      },

    /***/ "./scss/style.scss":
      /*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          "// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./scss/style.scss?"
        );

        /***/
      },

    /***/ 0:
      /*!*********************************************!*\
  !*** multi ./js/index.js ./scss/style.scss ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          '__webpack_require__(/*! ./js/index.js */"./js/index.js");\nmodule.exports = __webpack_require__(/*! ./scss/style.scss */"./scss/style.scss");\n\n\n//# sourceURL=webpack:///multi_./js/index.js_./scss/style.scss?'
        );

        /***/
      }

    /******/
  }
);
