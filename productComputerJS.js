// initial code 

"use strict"
console.clear() ;

// main code 

let productsDiv = document.getElementById("productsDiv") ;

let computerLength = computer.length;
let numberOfColumn = 4 ;
let numberOfRow = Math.floor((computerLength / numberOfColumn)+1) ; 
var numberOfImage = -1 ;

for(let i=0 ; i<numberOfRow ; i++)
{
    productsDiv.innerHTML += `<div class="row">

                            </div>`

    for(let j=0 ; j<4 ; j++)
    {
        numberOfImage++ ;

        if(numberOfImage >= computerLength)
        {
            break ;
        }

        let rows = productsDiv.children[i].innerHTML += `<div class="col-sm-6 col-lg-3">

                                    <div>

                                        <div class="card">

                                            <img id="${computer[numberOfImage].id}" src="./products/computer/${computer[numberOfImage].id}.jpg" alt="imageMissing" class="card-img-top">

                                            <div class="card-body">

                                                <p class="card-title">${computer[numberOfImage].name}</p>
                                                <p class="card-text small">$ ${computer[numberOfImage].price}</p>
                                                <a href="#" class="card-link stretched-link">&#11088;&#11088;&#11088;&#11088;</a>

                                            </div>

                                        </div>

                                    </div>

                                </div>
` ;
    }
}

let cards = document.querySelectorAll(".card") ;

for(let item of cards)
{
    item.addEventListener("click" , function(){

        let name = item.querySelector(".card-title").innerHTML ;
        let id = item.querySelector(".card-img-top").id ;

        let priceArr = (item.querySelector(".card-text").innerHTML).split(" ") ;
        let price = priceArr[1] ;

        console.log(price) ;
        console.log(name) ;
        console.log(id) ;

        window.location = `individualProduct.html?name=${name}&price=${price}&id=${id}`
    }) ;
}
