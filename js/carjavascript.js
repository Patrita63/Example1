"use strict";

function viewCarData() {
    const car = {name:"Fiat", model:"500", weight:"850 kg.", color:"white"};
    
    let inputCarName = document.getElementById("cname");
    let inputCarModel = document.getElementById("modname");
    let inputCarWeight = document.getElementById("wname");
    let inputCarColor = document.getElementById("colname");

    inputCarName.value = car.name;
    inputCarModel.value = car.model;
    inputCarWeight.value = car.weight;
    inputCarColor.value = car.color;

}