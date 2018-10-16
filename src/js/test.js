btnShowDevices.addEventListener("click", () => {
  showDeviceList.innerHTML = "";
  container.appendChild(showDeviceList);
  let a = Array.from(this._home.devices.values()).filter(
    devices => devices.name
  );
  let device = document.getElementsByClassName("deviceName");
  let arrDevice = Array.from(device);
  let b = [];
  a.forEach(item => {
    showDeviceList.innerHTML += `<div class="deviceName deviceName_${
      item.constructor.name
    }"> ${item.constructor.name} - ${item.name} </div>`;
    // let a = new ViewTv(item, root);
    // a.render();
    b.push(item);
    console.log(item);
    console.log(b);
  });
});
