"use strict";

import { Home } from "./Devices/Home";
import { Bulb } from "./Devices/Bulb";
import { Tv } from "./Devices/Tv";
import { Conditioner } from "./Devices/Conditioner";
import { stringify } from "querystring";

const home = new Home("My Home", "Ukraine", "Petya");
window.home = home;

home.addDevice(new Bulb("Bulb 1"));
home.addDevice(new Bulb("Bulb 2"));
home.getDeviceById(1).brightness = 9;
console.log(home.getDeviceByName("Bulb 1"));
console.log(home.getDeviceById(1));

home.addDevice(new Tv("In the kitchen"));
home.addDevice(new Conditioner("In the kitchen"));
home.addDevice(new Tv("One more Tv"));
