// initial code 
"use strict" 
console.clear() ;

// main code 

// select all the html element 
let mainImage = document.querySelector("#mainImage") ;
let productName = document.querySelector("#productName") ;
let productPrice = document.querySelector("#productPrice") ;
let shortImage = document.querySelectorAll("#shortImage img") ;

// get value from the url 
let urlValue = new URLSearchParams(window.location.search); 
let proName = urlValue.get("name") ;
let proPrice = urlValue.get("price") ;
let proID = urlValue.get("id") ;

console.log("from individual " ,proName) ;
console.log("from individual " ,proPrice); 
console.log("from individual " ,proID) ;

//set the value in the page 
productName.textContent = proName ;
productPrice.textContent = "$ "+proPrice ;

let imagePath = calculateImagePath(proID[0],proID[1],proID[2]) ;

function calculateImagePath(...x) //x is an array
{ 
    let imagePath ;

    x = x.join("") ; // array to string convert

    if(x === "mob")
    {
        imagePath = `./products/mobile/${proID}.jpg` ;
        return imagePath ;
    }
    else if(x === "cam")
    {
        imagePath = `./products/camera/${proID}.jpg` ;
        return imagePath ;
    }
    else if(x === "hom")
        {
            imagePath = `./products/home/${proID}.jpg` ;
            return imagePath ;
        }

    else if(x === "kid")
        {
            imagePath = `./products/kid/${proID}.jpg` ;
            return imagePath ;
        }
    else if(x === "man")
        {
            imagePath = `./products/man/${proID}.jpg` ;
            return imagePath ;
        }
    else if(x === "wom")
        {
            imagePath = `./products/woman/${proID}.jpg` ;
            return imagePath ;
        }
    else if(x === "med")
        {
            imagePath = `./products/medicine/${proID}.jpg` ;
            return imagePath ;
        }
    else if(x === "com")
        {
            imagePath = `./products/computer/${proID}.jpg` ;
            return imagePath ;
        }

}

mainImage.setAttribute("src" , imagePath) ;

for(let item of shortImage)
{
    item.setAttribute("src",imagePath) ;
}

let orderButton = document.getElementById("orderButton") ;

function getPayment ()
{
    orderButton.addEventListener("click" , function(e){

        e.preventDefault ;

        let price = proPrice || 0 ;

        window.location = `bkash.html?price=${price}` ;

    }) ;
}

getPayment() ;
