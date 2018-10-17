"use strict";
import { ViewHome } from "./Home/View";
import { Home } from "./Home/Model";
import { Tv } from "./Devices/Tv/Tv";
import { ViewTv } from "./Devices/Tv/ViewTv";
import { Bulb } from "./Devices/Bulb/Bulb";
import { Conditioner } from "./Devices/Conditioner/Conditioner";

let home = new Home("My Home", "UA 21", "Igor");
// home.addDevice(new Tv("My Tv"));
// home.addDevice(new Bulb("My Bulb"));
// home.addDevice(new Conditioner("Air"));
const viewHome = new ViewHome(home, document.getElementById("root"));
viewHome.render();

window.home = home;
