// initial code

"use strict";
console.clear();

// main code

let createButton = document.getElementById("createButton");
let loginButton = document.getElementById("loginButton");

createButton.addEventListener("click", function () {
  window.location = "signup.html";
});


loginButton.addEventListener("click" , function(e){

    e.preventDefault() ;

    window.location = `index.html?loginStatus=LogOut` ;

}) ;

