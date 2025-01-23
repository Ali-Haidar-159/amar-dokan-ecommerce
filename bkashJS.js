// initial code 

"use strict"
console.clear() ;

// main code 

let amountValue = document.getElementById("amountValue") ;
let conformButton = document.querySelector("#conformButton") ;
let closeButton = document.querySelector("#closeButton") ;
let paymentStatus = document.getElementById("paymentStatus") ;

let url = new URLSearchParams(window.location.search) ;
let price = url.get("price") ;

amountValue.innerHTML = price ;

conformButton.addEventListener("click" , function(){
    paymentStatus.style.display = "block" ;
}) ;

closeButton.addEventListener("click" , function(e){

    e.preventDefault ;

    window.location = "index.html" ;

}) ;

