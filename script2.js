'use strict'

var queryArray = [];

function populateInfo() {
    if(location.search) {
        var queryData = location.search;
        var hiddenInputs = document.querySelectorAll("input[type=hidden]");
        queryData = queryData.substring(1, queryData.length);
        queryArray = queryData.split('&');
    }
    for (var i = 0; i< queryArray.length; i++) {
        hiddenInputs[i].value = queryArray[i].substring(queryArray[i].lastIndexOf("=") + 1);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", populateInfo(), false)
} else if (window.attachEvent) {
    window.attachEvent("onload", populateInfo);
}
