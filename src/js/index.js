"use strict";

import { Home } from "./Home";
import { Devices } from "./Devices";
import { Bulb } from "./Devices/Bulb";
import { Tv } from "./Devices/Tv";
import { Conditioner } from "./Devices/Conditioner";

const home = new Home("My Home", "Ukraine");

home.addDevice(new Bulb("Bulb"));
home.addDevice(new Tv("Tv", true, true));
home.addDevice(new Conditioner("In sleeping room", true, 21, "cold", 3));
