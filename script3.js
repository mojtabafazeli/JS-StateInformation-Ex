'use strict'

function parseData() {
    var formData = decodeURIComponent(location.search);
    var formArray = [];
    var list = document.querySelector("div.results ul");
    console.log(list)
    formData = formData.substring(1, formData.length);
    while (formData.indexOf("+") !== -1) {
        formData = formData.replace("+", " ");// formData?
    }

    formData = decodeURIComponent(formData);
    formArray = formData.split("&");
    for (var i = 0; i < formArray.length; i++) {
        var newItem = document.createElement("li");
        newItem.innerHTML = formArray[i];
        console.log("new item " , newItem);
        list.appendChild(newItem)
        console.log(list)
    }
}

if (window.addEventListener) {
    console.log("loaded")
    window.addEventListener("load", parseData, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", parseData);
}