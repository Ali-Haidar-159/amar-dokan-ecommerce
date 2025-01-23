// initial code 

"use strict" 
console.clear() ;

// main code 
let mobileMedia = document.querySelector("#mobileMedia") ;
let cameraMedia = document.querySelector("#cameraMedia")  ;
let homeMedia = document.querySelector("#homeMedia")  ;
let kidMedia = document.querySelector("#kidMedia")  ;
let manMedia = document.querySelector("#manMedia") ;
let womanMedia = document.querySelector("#womanMedia") ;
let medicineMedia = document.querySelector("#medicineMedia") ;
let computerMedia = document.querySelector("#computerMedia")  ;


mobileMedia.addEventListener("click",function(){
    window.location = "productMobile.html" ;
}) ;

cameraMedia.addEventListener("click",function(){
    window.location = "productCamera.html" ;
}) ;

homeMedia.addEventListener("click",function(){
    window.location = "productHome.html" ;
}) ;

kidMedia.addEventListener("click",function(){
    window.location = "productKid.html" ;
}) ;

manMedia.addEventListener("click",function(){
    window.location = "productMan.html" ;
}) ;

womanMedia.addEventListener("click",function(){
    window.location = "productWoman.html" ;
}) ;

medicineMedia.addEventListener("click",function(){
    window.location = "productMedicine.html" ;
}) ;

computerMedia.addEventListener("click",function(){
    window.location = "productComputer.html" ;
}) ;


let loginButton = document.getElementById("loginButton") ;

function manageLoginStatus ()
{
    let urlParams = new URLSearchParams(window.location.search) ;

    let loginStatus1 = urlParams.get("loginStatus") || "LogIn" ;

    console.log(loginStatus1) ;

    if(loginStatus1 === "LogOut")
    {
        loginButton.innerHTML = "Log Out" ;
    }
    else
    {
        loginButton.innerHTML = "Log In" ;
    }
}

manageLoginStatus() ;


let account = document.getElementById("account");


account.addEventListener("click",function(){
    if (account.options[account.selectedIndex].value === "viewAccount") {
        window.location = "profile.html";
    }
    else
    {
        //get memberShip pages 
    }
}) ;


let someProductsRow1 = document.getElementById("someProductsRow1") ;
let someProductsRow2 = document.getElementById("someProductsRow2") ;

let row1_images = ["computer/com10.jpg" , "camera/cam6.jpg" , "home/home14.jpg" , "camera/cam15.jpg" , "computer/com13.jpg" , "kid/kid3.jpg"] ;
let row1_prices = ["5000" , "1500" , "3200" , "600" , "900" , "200"] ;
let row1_name = ["PC" , "Camera" , "Heater" , "Canon" , "Monitor" , "Kids Dress"] ;

for(let i= 0 ; i<6 ; i++)
{
    someProductsRow1.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-2">
                                        <div>
                                            <div class="card">

                                                <img class="card-img-top" src="./products/${row1_images[i]}" alt="imageMissing">

                                                <div class="card-body">
                                                    <h5 class="card-title">${row1_name[i]}</h5>
                                                    <p class="card-text">$ ${row1_prices[i]}</p>
                                                    <a href="" class="card-link stretched-link">Order</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>` ;
}

let row2_images = ["man/man2.jpg" , "mobile/mob2.jpg" , "man/man9.jpg" , "mobile/mob5.jpg" , "woman/wom4.jpg" , "woman/wom2.jpg"] ;
let row2_prices = ["50" , "1500" , "320" , "60" , "20" , "20"] ;
let row2_name = ["Pant" , "Iphone 12" , "Jacket" , "Samsung" , "Shirt" , "Kurti"] ;


for(let i= 0 ; i<6 ; i++)
    {
        someProductsRow2.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-2">
                                            <div>
                                                <div class="card">
    
                                                    <img class="card-img-top" src="./products/${row2_images[i]}" alt="imageMissing">
    
                                                    <div class="card-body">
                                                        <h5 class="card-title">${row2_name[i]}</h5>
                                                        <p class="card-text">$ ${row2_prices[i]}</p>
                                                        <a href="" class="card-link stretched-link">Order</a>
                                                    </div>
    
                                                </div>
                                            </div>
                                        </div>` ;
    }


    let someProductsRow1Cards = document.querySelectorAll("#someProductsRow1 .card");
    someProductsRow1Cards.forEach(function(item) {
        item.addEventListener("click", function(e) {
            e.preventDefault(); 
            let price = item.querySelector(".card-text").innerHTML;
            
            window.location = `bkash.html?price=${price}` ;

        });
    });


    let someProductsRow2Cards = document.querySelectorAll("#someProductsRow2 .card");
    someProductsRow2Cards.forEach(function(item) {
        item.addEventListener("click", function(e) {
            e.preventDefault(); 
            let price = item.querySelector(".card-text").innerHTML;
            
            window.location = `bkash.html?price=${price}` ;
        });
    });
    
    
    