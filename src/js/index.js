"use strict";
import { ViewHouse } from "./House/View";
import { House } from "./House/Model";
import { Tv } from "./Devices/Tv/Tv";
import { Bulb } from "./Devices/Bulb/Bulb";
import { Conditioner } from "./Devices/Conditioner/Conditioner";

let house = new House("My Home", "UA 21", "Igor");
house.addDevice(new Tv("My Tv"));
house.addDevice(new Bulb("My Bulb"));
house.addDevice(new Conditioner("Air"));

const vh = new ViewHouse(house, document.getElementById("root"));
vh.render();
window.vh = vh;
window.house = house;
