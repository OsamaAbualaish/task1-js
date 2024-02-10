var allproducts=document.querySelectorAll(" .card .btn ")
var totalbtn=document.getElementById("totalprice")
var showtotal=document.getElementById("show-totalprice")
var showproduct=document.querySelector(".show-product div span")
var priceblock=document.getElementById("totalprice-block")
var totalprice=0


allproducts.forEach(function (item){

    item.onclick=function () {
        
        totalprice +=  +(item.getAttribute("price"))
        console.log(totalprice)
        var productname = item.previousElementSibling.textContent;
        console.log(productname);
       
        
        showproduct.innerHTML += productname + " , <strong>price</strong> =" +item.getAttribute("price")+" EG  " +"<br/>"

        if (showproduct.innerHTML != ""){
            priceblock.style.display = "flex"
          
           
        }

        
    }
}



)

totalbtn.onclick = function (){
    console.log(totalprice+"EG")
    showtotal.innerHTML=totalprice+" EG"

    showtotal.style.width = "150px"
   
    showtotal.style.textAlign="center"
}