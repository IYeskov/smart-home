"use strict";

import { Home } from "./Home";
import { Bulb } from "./Devices/Bulb";
import { Tv } from "./Devices/Tv";
import { Conditioner } from "./Devices/Conditioner";

const home = new Home("My Home", "Ukraine");
window.home = home;

home.addDevice(new Bulb("Bulb"));
home.addDevice(new Tv("Tv"));
home.addDevice(new Conditioner("Conditioner"));
home.addDevice(new Tv("One more Tv"));
