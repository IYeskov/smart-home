import { Home } from "./Model";
import { Tv } from "../Devices/Tv/Tv";
import { ViewTv } from "../Devices/Tv/ViewTv";
import { Bulb } from "../Devices/Bulb/Bulb";
import { ViewBulb } from "../Devices/Bulb/ViewBulb";
import { Conditioner } from "../Devices/Conditioner/Conditioner";
import { ViewConditioner } from "../Devices/Conditioner/ViewConditioner";

export class ViewHome {
  constructor(rootElement) {
    this._home = null;
    this._rootElement = rootElement;
  }
  render() {
    let root = document.getElementById("root");
    if (this._home === null) {
      let form = document.createElement("form");
      form.className = "form";
      let inputName = document.createElement("input");
      inputName.className = "form__input";
      inputName.placeholder = "Insert Name";
      let inputLocation = document.createElement("input");
      inputLocation.className = "form__input";
      inputLocation.placeholder = "Insert Address";
      let inputOwner = document.createElement("input");
      inputOwner.className = "form__input";
      inputOwner.placeholder = "Insert Owner";
      let btnAddHouse = document.createElement("button");
      btnAddHouse.className = "btn form__btn";
      btnAddHouse.type = "button";
      btnAddHouse.innerText = "Add home";

      btnAddHouse.addEventListener("click", () => {
        this._home = new Home(
          inputName.value,
          inputLocation.value,
          inputOwner.value
        );
        this.render();
      });
      form.appendChild(inputName);
      form.appendChild(inputLocation);
      form.appendChild(inputOwner);
      form.appendChild(btnAddHouse);
      root.appendChild(form);
    } else {
      root.innerHTML = "";
      let sidebar = document.createElement("div");
      sidebar.className = "sidebar";
      let main = document.createElement("div");
      main.className = "main";
      let header = document.createElement("div");

      header.className = "header";
      header.innerHTML = `
            <div class="header__info">Name: ${this._home.name}</div>
            <div class="header__info">Address: ${this._home.location}</div>
            <div class="header__info">Owner: ${this._home.owner}</div>
            <div class="header__info">Devices: ${this._home.counterId}</div>`;
      main.appendChild(header);
      root.appendChild(sidebar);
      root.appendChild(main);
      // -------------------------- //
      let btnAddDevice = document.createElement("button");
      btnAddDevice.className = "btn";
      btnAddDevice.innerText = "Add new Device";
      sidebar.appendChild(btnAddDevice);

      let btnShowDevices = document.createElement("button");
      btnShowDevices.className = "btn";
      btnShowDevices.innerText = "Show Devices";
      sidebar.appendChild(btnShowDevices);
      let container = document.createElement("div");
      container.className = "container";

      // [Add Device]

      let addDeviceList = document.createElement("ul");
      addDeviceList.className = "container__addDevice";

      let addTv = document.createElement("li");
      addTv.className = "addDevice__tv";
      let addTvBtn = document.createElement("button");
      addTvBtn.innerText = "Add TV";
      addTv.appendChild(addTvBtn);

      let addBulb = document.createElement("li");
      addBulb.className = "addDevice__bulb";
      let addBulbBtn = document.createElement("button");
      addBulbBtn.innerText = "Add Bulb";
      addBulb.appendChild(addBulbBtn);
      let addConditioner = document.createElement("li");
      addConditioner.className = "addDevice__conditioner";
      let addConditionerBtn = document.createElement("button");
      addConditionerBtn.innerText = "Add Conditioner";
      addConditioner.appendChild(addConditionerBtn);

      addDeviceList.appendChild(addTv);
      addDeviceList.appendChild(addBulb);
      addDeviceList.appendChild(addConditioner);

      btnAddDevice.addEventListener("click", () => {
        container.innerHTML = "";
        container.appendChild(addDeviceList);
      });
      let addDeviceModal = e => {
        let input = document.createElement("input");
        input.placeholder = "Add device name";
        let btn = document.createElement("button");
        btn.innerText = e.target.innerText;

        let modal = document.createElement("div");
        modal.className = "modal";

        btn.addEventListener("click", () => {
          if (btn.innerText === "Add TV") {
            this._home.addDevice(new Tv(input.value));
            input.value = "";
          } else if (btn.innerText === "Add Bulb") {
            this._home.addDevice(new Bulb(input.value));
            input.value = "";
          } else if (btn.innerText === "Add Conditioner") {
            this._home.addDevice(new Conditioner(input.value));
            input.value = "";
          }
          this.render();
          console.log(this._home);
        });

        modal.appendChild(input);
        modal.appendChild(btn);
        container.appendChild(modal);
        container.removeChild(addDeviceList);
      };
      addTvBtn.addEventListener("click", addDeviceModal, {
        once: true
      });
      addBulbBtn.addEventListener("click", addDeviceModal, {
        once: true
      });
      addConditionerBtn.addEventListener("click", addDeviceModal, {
        once: true
      });
      // End of [Add Device]
      // [Show Devices]

      btnShowDevices.addEventListener("click", () => {
        container.innerHTML = "";
        let a = Array.from(this._home.devices.values()).filter(
          devices => devices.name
        );
        a.forEach(item => {
          let deleteBtn = document.createElement("button");
          deleteBtn.type = "button";
          deleteBtn.innerText = "Delete";
          if (item.constructor.name === "Tv") {
            let a = new ViewTv(item, container);
            a.render();
            let d = Array.from(document.getElementsByClassName("device__tv"));
            d.forEach((item, i) => {
              d[i].appendChild(deleteBtn);
            });
          } else if (item.constructor.name === "Bulb") {
            let a = new ViewBulb(item, container);
            a.render();
            let d = Array.from(document.getElementsByClassName("device__bulb"));
            d.forEach((item, i) => {
              d[i].appendChild(deleteBtn);
            });
          } else if (item.constructor.name === "Conditioner") {
            let a = new ViewConditioner(item, container);
            a.render();
            let d = Array.from(
              document.getElementsByClassName("device__conditioner")
            );
            d.forEach((item, i) => {
              d[i].appendChild(deleteBtn);
            });
          }
          deleteBtn.addEventListener("click", () => {
            this._home.removeDeviceById(item.id);
            this.render();
          });
        });

        main.appendChild(container);
      });

      // End of [Show devices]
      main.appendChild(container);
      // Show active Devices //
      let btnShowActiveDevices = document.createElement("button");
      btnShowActiveDevices.className = "btn";
      btnShowActiveDevices.innerText = "Show Active Devices";
      sidebar.appendChild(btnShowActiveDevices);

      btnShowActiveDevices.addEventListener("click", () => {
        container.innerHTML = "";
        let a = this._home.activeDevices;
        a.forEach(item => {
          let deleteBtn = document.createElement("button");
          deleteBtn.type = "button";
          deleteBtn.innerText = "Delete";
          if (item.constructor.name === "Tv") {
            let a = new ViewTv(item, container);
            a.render();
            let b = document.getElementsByClassName("device__tv")[0];
            b.appendChild(deleteBtn);
          } else if (item.constructor.name === "Bulb") {
            let a = new ViewBulb(item, container);
            a.render();
            let b = document.getElementsByClassName("device__bulb")[0];
            b.appendChild(deleteBtn);
          } else if (item.constructor.name === "Conditioner") {
            let a = new ViewConditioner(item, container);
            a.render();
            let b = document.getElementsByClassName("device__conditioner")[0];
            b.appendChild(deleteBtn);
          }
          deleteBtn.addEventListener("click", event => {
            console.log(item.name);
            this._home.removeDeviceById(item.name);
            this.render();
          });
        });

        main.appendChild(container);
      });

      // Show inactive Devices //
      let btnShowInctiveDevices = document.createElement("button");
      btnShowInctiveDevices.className = "btn";
      btnShowInctiveDevices.innerText = "Show InActive Devices";
      sidebar.appendChild(btnShowInctiveDevices);

      btnShowInctiveDevices.addEventListener("click", () => {
        container.innerHTML = "";
        let a = this._home.inactiveDevices;
        a.forEach(item => {
          let deleteBtn = document.createElement("button");
          deleteBtn.type = "button";
          deleteBtn.innerText = "Delete";
          if (item.constructor.name === "Tv") {
            let a = new ViewTv(item, container);
            a.render();
            let b = document.getElementsByClassName("device__tv")[0];
            b.appendChild(deleteBtn);
          } else if (item.constructor.name === "Bulb") {
            let a = new ViewBulb(item, container);
            a.render();
            let b = document.getElementsByClassName("device__bulb")[0];
            b.appendChild(deleteBtn);
          } else if (item.constructor.name === "Conditioner") {
            let a = new ViewConditioner(item, container);
            a.render();
            let b = document.getElementsByClassName("device__conditioner")[0];
            b.appendChild(deleteBtn);
          }
          deleteBtn.addEventListener("click", event => {
            console.log(item.name);
            this._home.removeDeviceById(item.name);
            this.render();
          });
        });

        main.appendChild(container);
      });
    }
  }
}
